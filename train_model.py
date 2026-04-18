import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
import joblib

# Load dataset
df = pd.read_csv("cleaned_predictive_maintenance.csv")

# Select features and target
X = df[['air_temperature_k',
        'process_temperature_k',
        'rotational_speed_rpm',
        'torque_nm',
        'tool_wear_min']]

y = df['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = GradientBoostingClassifier()
model.fit(X_train, y_train)

# Save model
joblib.dump(model, "model.pkl")

print("✅ Model trained and saved as model.pkl")