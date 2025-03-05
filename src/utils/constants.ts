import { BigNumber } from 'ethers'

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 570: // rollux mainnet
      return '0xAf14C7514eF373d5d0916A522648F46ebc1A3d2C'
    case 57000: // rollux testnet
      return '0x85919312dB290fCcFe9D85d11CEA94DD97b0a1a7'
    case 5701: // zksys testnet
      return '0x963ddB2bA401088b194a93D8b6203cb5cB2c5456'
    default:
      throw new Error(`Universal Router not deployed on chain ${chainId}`)
  }
}

export const WETH_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 570: // rollux mainnet
    case 57000: // rollux testnet
      return '0x4200000000000000000000000000000000000006'
    case 5701:
      return '0x8BBb86D74e11C388913000f598A8C0F6B9e35055'
    default:
      throw new Error(`WETH9 or UniversalRouter not deployed on chain ${chainId}`)
  }
}

export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'
export const PERMIT2_ADDRESS_ZKSYS = '0x0000000000000000000000000000000000008001'

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
