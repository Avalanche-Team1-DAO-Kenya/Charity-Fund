// Used to connect to  a wallet
import {InjectedConnector} from "@web3-react/injected-connector"
import { useWeb3React } from "@web3-react/core"
import AdminHome from "./LandinPage"
export const injected=new InjectedConnector({
    supportedChainIds:[1,3,4,5,42],
})


export default function NewWalletConnect(){
    const {activate,account}=useWeb3React();
    const ConnectWallet=async()=>{   
        try {           
           await activate(injected)
        } catch (error) {
      console.error(`An error occurred activating your account ${error}`)        
        }
    }
    return (
        <div>
            Account : {account}
            <button onClick={ConnectWallet}>Connect Wallet</button>
            <AdminHome/>
        </div>
    )
}