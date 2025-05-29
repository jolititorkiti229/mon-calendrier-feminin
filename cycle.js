function formatDate(date) {
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function calculateCycle() {
  const lastPeriod = new Date(document.getElementById("lastPeriod").value);
  const cycleLength = parseInt(document.getElementById("cycleLength").value);

  if (isNaN(lastPeriod.getTime())) {
    alert("Veuillez entrer une date valide.");
    return;
  }

  const nextPeriod = new Date(lastPeriod);
  nextPeriod.setDate(lastPeriod.getDate() + cycleLength);

  const ovulation = new Date(lastPeriod);
  ovulation.setDate(lastPeriod.getDate() + cycleLength - 14);

  const fertileStart = new Date(ovulation);
  fertileStart.setDate(ovulation.getDate() - 4);

  const fertileEnd = new Date(ovulation);
  fertileEnd.setDate(ovulation.getDate() + 1);

  document.getElementById("result").innerHTML = `
    <strong>Prochaines règles :</strong> ${formatDate(nextPeriod)}<br>
    <strong>Période fertile :</strong> du ${formatDate(fertileStart)} au ${formatDate(fertileEnd)}<br>
    <strong>Ovulation :</strong> ${formatDate(ovulation)}
  `;
}