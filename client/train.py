# train_model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report, accuracy_score
import joblib

# Path to your csv
DATA_PATH = "cleaned_predictive_maintenance.csv"  # adjust if needed
MODEL_OUT = "model_pipeline.joblib"

def main():
    df = pd.read_csv(DATA_PATH)

    # Features we'll use
    feature_cols = [
        "type",
        "air_temperature_k",
        "process_temperature_k",
        "rotational_speed_rpm",
        "torque_nm",
        "tool_wear_min",
    ]
    target_col = "target"  # 0/1

    X = df[feature_cols]
    y = df[target_col]

    # Train/test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    # Preprocessing
    cat_cols = ["type"]
    num_cols = [
        "air_temperature_k",
        "process_temperature_k",
        "rotational_speed_rpm",
        "torque_nm",
        "tool_wear_min",
    ]

    # OneHotEncoder with handle_unknown='ignore' so API can send unseen types
    preprocessor = ColumnTransformer(
        transformers=[
            ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), cat_cols),
            ("num", StandardScaler(), num_cols),
        ],
        remainder="drop",
    )

    # Pipeline: preprocessor -> classifier
    pipeline = Pipeline(
        steps=[
            ("preprocessor", preprocessor),
            ("clf", RandomForestClassifier(n_estimators=200, random_state=42, n_jobs=-1)),
        ]
    )

    print("Training model...")
    pipeline.fit(X_train, y_train)

    print("Evaluating model...")
    preds = pipeline.predict(X_test)
    probs = pipeline.predict_proba(X_test)[:, 1]
    print("Accuracy:", accuracy_score(y_test, preds))
    print(classification_report(y_test, preds))

    print(f"Saving model to {MODEL_OUT} ...")
    joblib.dump(pipeline, MODEL_OUT)
    print("Done.")

if __name__ == "__main__":
    main()
