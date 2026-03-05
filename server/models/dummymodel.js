function dummyModel({ airTemp, processTemp, rpm, torque, toolWear }) {
  const riskScore = Number(toolWear) + Number(torque) + Number(rpm) / 100;

  if (riskScore > 250) return 'High Risk of Failure';
  if (riskScore > 150) return 'Moderate Risk';
  return 'Low Risk';
}

module.exports = dummyModel;
