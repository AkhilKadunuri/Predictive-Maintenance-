import streamlit as st
import numpy as np
import joblib

# Load model
model = joblib.load("model.pkl")

st.title("Predictive Maintenance System")

st.write("Enter machine details:")

# Inputs (same order as training)
air_temp = st.number_input("Air Temperature (K)")
process_temp = st.number_input("Process Temperature (K)")
rpm = st.number_input("Rotational Speed (RPM)")
torque = st.number_input("Torque (Nm)")
tool_wear = st.number_input("Tool Wear (min)")

# Predict
if st.button("Predict"):
    data = np.array([[air_temp, process_temp, rpm, torque, tool_wear]])
    prediction = model.predict(data)

    if prediction[0] == 1:
        st.error("⚠️ Machine Failure Likely")
    else:
        st.success("✅ Machine is Normal")