# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

MODEL_PATH = "model_pipeline.joblib"  # same file produced by train_model.py

app = Flask(__name__)
CORS(app)  # allow requests from your frontend during development

# Load pipeline
model = joblib.load(MODEL_PATH)

@app.route("/api/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        # Expected keys (we accept both short keys from your frontend and full names)
        # Required features: type, air_temperature_k, process_temperature_k, rotational_speed_rpm, torque_nm, tool_wear_min
        # Frontend may send keys like airTemp, processTemp, rpm, torque, toolWear
        # We'll map them here:
        mapping = {
            "type": data.get("type", "L"),  # default product type if not provided
            "air_temperature_k": data.get("airTemp", data.get("air_temperature_k")),
            "process_temperature_k": data.get("processTemp", data.get("process_temperature_k")),
            "rotational_speed_rpm": data.get("rpm", data.get("rotational_speed_rpm")),
            "torque_nm": data.get("torque", data.get("torque_nm")),
            "tool_wear_min": data.get("toolWear", data.get("tool_wear_min")),
        }

        # Validate numeric fields
        for k in ["air_temperature_k", "process_temperature_k", "rotational_speed_rpm", "torque_nm", "tool_wear_min"]:
            if mapping[k] is None:
                return jsonify({"error": f"Missing field {k}"}), 400
            # convert to float/int as appropriate
            try:
                if k in ["rotational_speed_rpm", "tool_wear_min"]:
                    mapping[k] = int(mapping[k])
                else:
                    mapping[k] = float(mapping[k])
            except ValueError:
                return jsonify({"error": f"Invalid value for {k}"}), 400

        # Build single-row dataframe
        X = pd.DataFrame([mapping])

        # Predict
        pred = model.predict(X)[0]  # 0 or 1
        prob = float(model.predict_proba(X)[0, 1])  # prob of class 1

        label = "Failure" if pred == 1 else "No Failure"
        return jsonify({"prediction": label, "probability": prob})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
