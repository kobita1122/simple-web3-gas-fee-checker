async function getMediumGas() {
  const data = await fetchGasData();
  return data.ProposeGasPrice;
}
