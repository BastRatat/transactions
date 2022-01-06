import { ethers } from 'ethers'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './constants'

const setAccount = (asyncResponse, dispatcher) => {
  if (Array.isArray(asyncResponse) && asyncResponse.length) {
    dispatcher()
    return
  }
}

const createETHContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
}

export { setAccount, createETHContract }
