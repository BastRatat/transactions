import transactions from './transactions.json'

const ETH_ACTIONS = {
  ACCOUNTS: 'eth_accounts',
  REQUEST_ACCOUNTS: 'eth_requestAccounts',
}

const { abi: CONTRACT_ABI = '' } = transactions
const CONTRACT_ADDRESS = '0x6fAdeAcb46BFbe69d1a462537B7977BD206935D6'

export { CONTRACT_ABI, CONTRACT_ADDRESS, ETH_ACTIONS }
