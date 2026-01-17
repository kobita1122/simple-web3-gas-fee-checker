async function updateGasFees() {
  const low = await getLowGas();
  const medium = await getMediumGas();
  const high = await getHighGas();

  document.getElementById("low").innerText = formatGas(low);
  document.getElementById("medium").innerText = formatGas(medium);
  document.getElementById("high").innerText = formatGas(high);
}
