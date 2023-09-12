import Web3 from "web3";

async function handleConnect(callback: Function) {
  const web3 = new Web3(window.ethereum);
  try {
    await window.ethereum.enable();
  } catch (error: Error | any) {
    if (error.message === "User denied account authorization") {
      // handle the case where the user denied the connection request
    } else if (error.message === "MetaMask is not enabled") {
      // handle the case where MetaMask is not available
    } else {
      // handle other errors
    }
  }
  const accounts = await web3.eth.getAccounts();
  const userAddress = accounts[0];
  callback(userAddress);
}

async function isConnected(): Promise<string | null> {
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.getAccounts();
  const userAddress = accounts[0];

  return userAddress ?? null;
}

export { handleConnect, isConnected };
