import React, { createContext, useReducer, useEffect, useContext } from 'react'

import { setAccount } from '../utils/helpers'
import { ETH_ACTIONS } from '../utils/constants'

const { ethereum } = window

const reducerInitialState = {
  transactions: [],
  currentAccount: '',
  AddressTo: '',
  amount: '',
  message: '',
  transactionsCount: 0,
  hasMetaMask: false,
}

const EthContext = createContext({
  ...reducerInitialState,
  isWalletConnected: () => null,
  handleFieldChange: () => null,
})

const EthContextProvider = ({ children }) => {
  const [contextState, dispatch] = useReducer(
    (prevState, payload) => ({
      ...prevState,
      ...payload,
    }),
    reducerInitialState,
  )

  const checkMetaMask = () => {
    if (!ethereum) {
      dispatch({ hasMetaMask: false })
      throw new Error('Please add Metamask to your browser extension')
    }
    dispatch({ hasMetaMask: true })
    return true
  }

  const isWalletConnected = async () => {
    try {
      checkMetaMask()
      const response = await ethereum.request({ method: ETH_ACTIONS.ACCOUNTS })
      setAccount(response, () => dispatch({ currentAccount: response[0] }))
    } catch (error) {
      console.error(error)
    }
  }

  const connectToWallet = async () => {
    try {
      checkMetaMask()
      const response = await ethereum.request({
        method: ETH_ACTIONS.REQUEST_ACCOUNTS,
      })
      setAccount(response, () => dispatch({ currentAccount: response[0] }))
    } catch (error) {
      console.error(error)
    }
  }

  const handleFieldChange = (event, field) => {
    dispatch({ [field]: event.target.value })
  }

  // TODO: sendTransactions()
  // TODO: areTransactionsExist()
  // TODO: getTransactions()

  useEffect(() => {
    isWalletConnected()
    // TODO: areTransactionsExist()
  }, [])

  const { currentAccount, transactions, transactionsCount, hasMetaMask } =
    contextState

  return (
    <EthContext.Provider
      value={{
        connectToWallet,
        handleFieldChange,
        currentAccount,
      }}
    >
      {children}
    </EthContext.Provider>
  )
}

// use in functional components
const useEthereum = () => {
  const ethereumObject = useContext(EthContext)
  return ethereumObject
}

// use in class components
function withEthereum(ChildComponent) {
  return props => {
    const ethereumState = useEthereum()
    return <ChildComponent {...props} {...ethereumState} />
  }
}

export { EthContext, EthContextProvider, useEthereum, withEthereum }
