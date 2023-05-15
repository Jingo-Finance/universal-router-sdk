import { BigNumber } from 'ethers'

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 570: // rollux mainnet
      return '0x9A49e44aAd6c8CF7ABa4b3f876DA38a0215b0eA4'
    case 57000: // rollux testnet
      return '0xdB29597a99b8C9389CB8397399f9923CBF8C2587'
    default:
      throw new Error(`Universal Router not deployed on chain ${chainId}`)
  }
}

export const WETH_ADDRESS = (chainId: number): string => {
  switch (chainId) {
    case 570: // rollux mainnet
    case 57000: // rollux testnet
      return '0x4200000000000000000000000000000000000006'
    default:
      throw new Error(`WETH9 or UniversalRouter not deployed on chain ${chainId}`)
  }
}

export const PERMIT2_ADDRESS = '0xA4f6261a5F45928b79d2d5ED22373e4D4d637C47'

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
