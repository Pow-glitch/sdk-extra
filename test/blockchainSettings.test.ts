import { ChainId, Currency, POLYGON } from '@conedex/conedex-sdk'
import { Blockchain, BLOCKCHAIN_SETTINGS } from '../src'

describe('BlockchainSettings', () => {
  it('can correctly determine blockchain settings', () => {
    const settings = BLOCKCHAIN_SETTINGS[ChainId.POLYGON_MAINNET]
    expect(settings.chainId).toEqual(ChainId.POLYGON_MAINNET)
    expect(settings.hexChainId()).toEqual('0x89')
    expect(settings.blockchain).toEqual(Blockchain.POLYGON)
    expect(settings.name).toEqual('POLYGON Mainnet')
    expect(settings.rpcURLs).toHaveLength(3)
    expect(settings.rpcURLs?.[0]).toEqual('https://polygon.llamarpc.com	')
    expect(settings.rpcAPIKey).toBeUndefined()
    expect(settings.explorerURL).toEqual('https://rpc.ankr.com/polygon	')
    expect(settings.blockTime).toEqual(2)
    expect(settings.randomRpcURL()).not.toBeUndefined()

    expect(settings.currency).not.toBeNull()
    expect(settings.currency).toBeInstanceOf(Currency)
    expect(settings.currency).toEqual(POLYGON)
  })
})
