import { useWeb3React } from '@web3-react/core'

import { CoinbaseWallet, MM, WalletConnect } from "./wallets";

const App = () => {

  const { activate, deactivate, chainId, account, active } = useWeb3React();

  return (
    <>
      <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
      <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
      <button onClick={() => { activate(MM) }}>Metamask</button>
      <button onClick={deactivate}>Disconnect</button>
      <div>Connection Status: {active ? "On" : "Off"}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>
    </>
  );
}

export default App;
