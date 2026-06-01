from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

model = joblib.load("model.pkl")

@app.route("/api/predict", methods=["POST"])
def predict():

    data = request.json

    features = np.array([[
        float(data["airTemp"]),
        float(data["processTemp"]),
        float(data["rpm"]),
        float(data["torque"]),
        float(data["toolWear"])
    ]])

    prediction = model.predict(features)[0]

    return jsonify({
        "prediction": "Failure" if prediction == 1 else "Normal",
        "probability": 0.95
    })

if __name__ == "__main__":
    app.run()
