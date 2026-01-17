async function getHighGas() {
  const data = await fetchGasData();
  return data.FastGasPrice;
}
