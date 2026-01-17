async function getLowGas() {
  const data = await fetchGasData();
  return data.SafeGasPrice;
}
