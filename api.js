async function fetchGasData() {
  const response = await fetch(GAS_API);
  const data = await response.json();
  return data.result;
}
