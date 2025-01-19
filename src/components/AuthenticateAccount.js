import Web3 from "web3";

const web3 = new Web3(window.ethereum);

export const connectAndAuthenticateWallet = async () => {
  try {
    // Request wallet connection
    const accounts = await web3.eth.requestAccounts();
    const walletAddress = accounts[0];

    // Generate a unique message to sign
    const message = `Authenticate this message to log in: ${Date.now()}`;
    const signature = await web3.eth.personal.sign(message, walletAddress);
  }
  catch(error){
    console.error("An error ocuurd authenticating account",error)

  }
}