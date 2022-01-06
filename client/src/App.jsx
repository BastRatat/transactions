import { useEthereum } from './contexts/EthContext'

const App = () => {
  const { connectToWallet, currentAccount } = useEthereum()
  return (
    <>
      {!currentAccount && (
        <button type="button" onClick={connectToWallet}>
          Connect
        </button>
      )}
    </>
  )
}

export default App
