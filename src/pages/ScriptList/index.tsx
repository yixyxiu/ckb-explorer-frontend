import { FC } from 'react'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import Content from '../../components/Content'
import styles from './styles.module.scss'
import { MainnetContractHashTags, TestnetContractHashTags } from '../../constants/scripts'
import { isMainnet } from '../../utils/chain'
import { Link } from '../../components/Link'

const scriptDataList = isMainnet() ? MainnetContractHashTags : TestnetContractHashTags

type ScriptAttributes = Record<'name' | 'description', string> &
  Partial<Record<'code' | 'rfc' | 'deprecated' | 'website' | 'doc', string>>

export const scripts = new Map<string, ScriptAttributes>([
  [
    'secp256k1_blake160',
    {
      name: 'SECP256K1/blake160',
      description: 'SECP256K1/blake160 is the default lock script to verify CKB transaction signature.',
      rfc: 'https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0024-ckb-genesis-script-list/0024-ckb-genesis-script-list.md#secp256k1blake160',
      code: 'https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_sighash_all.c',
    },
  ],
  [
    'secp256k1 / multisig',
    {
      name: 'SECP256K1/multisig',
      description: 'SECP256K1/multisig is a script which allows a group of users to sign a single transaction.',
      rfc: 'https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0024-ckb-genesis-script-list/0024-ckb-genesis-script-list.md#secp256k1multisig',
      code: 'https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/secp256k1_blake160_multisig_all.c',
    },
  ],
  [
    'secp256k1 / anyone-can-pay (deprecated)',
    {
      name: 'Anyone-Can-Pay Lock',
      description: 'anyone_can_pay allows a recipient to provide cell capacity in asset transfer.',
      rfc: 'https://github.com/nervosnetwork/rfcs/blob/30980b378fdaccc6e9d21a1c6b53363364fb4abc/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md',
      code: 'https://github.com/nervosnetwork/ckb-production-scripts/tree/deac6801a95596d74e2da8f2f1a6727309d36100',
      deprecated: 'https://github.com/nervosnetwork/rfcs/commit/89049fe771aae277ef729269c3920db60693aede',
    },
  ],
  [
    'secp256k1 / anyone-can-pay',
    {
      name: 'Anyone-Can-Pay Lock',
      description: 'anyone_can_pay allows a recipient to provide cell capacity in asset transfer.',
      rfc: 'https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0026-anyone-can-pay/0026-anyone-can-pay.md',
      code: 'https://github.com/nervosnetwork/ckb-production-scripts/blob/e570c11aff3eca12a47237c21598429088c610d5/c/anyone_can_pay.c',
    },
  ],
  [
    'nervos dao',
    {
      name: 'Nervos DAO',
      description:
        'Nervos DAO is a smart contract with which users can interact the same way as any smart contract on CKB.',
      rfc: 'https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0023-dao-deposit-withdraw/0023-dao-deposit-withdraw.md',
      code: 'https://github.com/nervosnetwork/ckb-system-scripts/blob/master/c/dao.c',
    },
  ],
  [
    'sudt',
    {
      name: 'Simple UDT',
      description: 'Simple UDT provides a way for dapp developers to issue custom tokens on Nervos CKB.',
      rfc: 'https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md',
      code: 'https://github.com/nervosnetwork/ckb-production-scripts/blob/e570c11aff3eca12a47237c21598429088c610d5/c/simple_udt.c',
    },
  ],
  [
    'unipass v3',
    {
      name: 'Unipass',
      description: 'UniPass Wallet is a smart contract wallet solution that supports on-chain Email social recovery.',
      website: 'https://www.unipass.id/',
    },
  ],
  [
    'cota',
    {
      name: 'CoTA',
      description: 'A Compact Token Aggregator Standard for Extremely Low Cost NFTs and FTs',
      website: 'https://www.cotadev.io/',
    },
  ],
  [
    'cota_registry',
    {
      name: 'CoTA Registry',
      description: 'A Compact Token Aggregator Standard for Extremely Low Cost NFTs and FTs',
      website: 'https://www.cotadev.io/',
    },
  ],
  [
    'pwlock-k1-acpl',
    {
      name: 'PW Lock',
      description:
        "Forked from CKB's system scripts, and currently supports signature generated by personalSign and signTypedData from ethereum wallets.",
      code: 'https://github.com/lay2dev/pw-lock/',
    },
  ],
  [
    'godwoken_custodian_lock',
    {
      name: 'godwoken_custodian_lock',
      description: 'Rollup uses the custodian lock to hold the deposited assets.',
      code: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos/contracts/custodian-lock',
      website: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos#custodian-lock',
    },
  ],
  [
    'godwoken_deposit_lock',
    {
      name: 'godwoken_deposit_lock',
      description: 'A layer1 user can join the Rollup by creating a deposit cell.',
      code: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos/contracts/deposit-lock',
      website: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos#deposit-lock',
    },
  ],
  [
    'godwoken_withdrawal_lock',
    {
      name: 'godwoken_withdrawal_lock',
      description:
        'Withdrawal cells are generated in the RollupSubmitBlock action according to the block.withdrawals field.',
      code: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos/contracts/withdrawal-lock',
      website: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos#withdrawal-lock',
    },
  ],
  [
    'godwoken_challenge_lock',
    {
      name: 'godwoken_challenge_lock',
      description:
        'When a Godwoken node found that an invalid state exists in the Rollup, the node can send the RollupEnterChallenge action to the Rollup cell and generate a challenging cell.',
      code: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos/contracts/challenge-lock',
      website: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos#challenge-lock',
    },
  ],
  [
    'godwoken_stake_lock',
    {
      name: 'godwoken_stake_lock',
      description: 'A block producer is required to provide a stake cell to perform the RollupSubmitBlock action.',
      code: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos/contracts/stake-lock',
      website: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos#stake-lock',
    },
  ],
  [
    'omni_lock v1',
    {
      name: 'omni_lock v1',
      description:
        'Omnilock is a lock script designed for interoperability. It comes with built-in support for verification of transaction signing methods used in Bitcoin, Ethereum, EOS, and Dogecoin. Omnilock is also extensible, so more verification algorithms can be added in future.',
      rfc: 'https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0042-omnilock',
    },
  ],
  [
    'omni_lock v2',
    {
      name: 'omni_lock v2',
      description:
        'Omnilock is a lock script designed for interoperability. It comes with built-in support for verification of transaction signing methods used in Bitcoin, Ethereum, EOS, and Dogecoin. Omnilock is also extensible, so more verification algorithms can be added in future.',
      rfc: 'https://github.com/nervosnetwork/rfcs/tree/master/rfcs/0042-omnilock',
      code: 'https://github.com/cryptape/omnilock',
    },
  ],
  [
    'godwoken_state_validator',
    {
      name: 'godwoken_state_validator',
      description:
        'State validator is the major script to verify the on-chain Rollup cell. Rollup cell is an identity cell on CKB, it stores the structure GlobalState which represents the layer-2 state.',
      code: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos/contracts/state-validator',
      website: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos#state-validator',
    },
  ],
  [
    'godwoken_eth_account_lock',
    {
      name: 'godwoken_eth_account_lock',
      description: 'A layer-2 lock script, ETH account lock is a script that verifies the layer-2 account signature.',
      code: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos/contracts/eth-account-lock',
      website: 'https://github.com/godwokenrises/godwoken/tree/develop/gwos#eth-account-lock',
    },
  ],
  [
    'JoyID',
    {
      name: 'JoyID',
      description: 'An universal Account Protocol for Web3 Mass-adoption.',
      doc: 'https://docs.joy.id/',
      website: ' https://joy.id/',
    },
  ],
  [
    'xUDT',
    {
      name: 'xUDT',
      description: "Extensible UDT that derived from sUDT's programmability to support a wider range of scenarios",
      code: 'https://github.com/nervosnetwork/ckb-production-scripts/blob/master/c/xudt_rce.c',
      website: 'https://blog.cryptape.com/enhance-sudts-programmability-with-xudt#heading-xudt-cell',
    },
  ],
  [
    'xUDT(final_rls)',
    {
      name: 'xUDT(final_rls)',
      description: "Extensible UDT that derived from sUDT's programmability to support a wider range of scenarios",
      code: 'https://github.com/nervosnetwork/ckb-production-scripts/blob/master/c/xudt_rce.c',
      website: 'https://blog.cryptape.com/enhance-sudts-programmability-with-xudt#heading-xudt-cell',
    },
  ],
  [
    'Spore',
    {
      name: 'Spore',
      description:
        'Spore Protocol infuses digital assets with enduring value backed by tokenomics, redeemable at any time. Ensures true on-chain ownership, privacy, creative freedom and frictionless interaction.',
      rfc: 'https://github.com/sporeprotocol/spore-contract/blob/master/docs/RFC.md',
      code: 'https://github.com/sporeprotocol/spore-contract',
      doc: 'https://docs.spore.pro/',
      website: 'https://spore.pro/',
    },
  ],
  [
    'Force Bridge',
    {
      name: 'Force Bridge',
      description: 'Force Bridge Lock is compiled from the source code of Omnilock when it has not been released yet',
      doc: 'https://github.com/Magickbase/ckb-explorer-public-issues/issues/532#issue-2097393857',
      website: 'https://forcebridge.com/',
    },
  ],
  [
    'RGB++',
    {
      name: 'RGB++',
      description: 'RGB++ Lock',
      doc: 'https://github.com/ckb-cell/RGBPlusPlus-design/blob/main/docs/',
    },
  ],
  [
    'Unique Cell',
    {
      name: 'Unique Cell',
      description:
        'A unique cell can be created on the Nervos CKB through TypeID which makes sure the unique cell cannot be updated or destroyed.',
      code: 'https://github.com/ckb-cell/unique-cell/',
    },
  ],
  [
    'BTC Time Lock',
    {
      name: 'BTC Time Lock',
      description: 'A lock require n confirmations of Bitcoin transaction to unlock the cell.',
      doc: 'https://github.com/ckb-cell/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-en.md#btc_time_lock',
    },
  ],
  [
    'Nostr',
    {
      name: 'Nostr',
      description: 'The Nostr lock script is designed for interoperability with Nostr.',
      doc: 'https://github.com/cryptape/nostr-binding/blob/main/docs/lightpaper.md',
      code: 'https://github.com/cryptape/nostr-binding/',
    },
  ],
  [
    'Single Use Lock',
    {
      name: 'Single Use Lock',
      description: 'A lock script that can only be used once.',
      code: 'https://github.com/ckb-ecofund/ckb-proxy-locks',
    },
  ],
  [
    'iCKB Logic',
    {
      name: 'iCKB Logic',
      description: 'iCKB Logic tokenizes NervosDAO deposits into the iCKB xUDT token.',
      rfc: 'https://github.com/ickb/proposal',
      code: 'https://github.com/ickb/v1-core/tree/454cfa966052a621c4e8b67001718c29ee8191a2/scripts/contracts/ickb_logic',
      website: 'https://ickb.org/',
    },
  ],
  [
    'WR Owned-Owner',
    {
      name: 'WR Owned-Owner',
      description:
        'WR Owned-Owner enable to create Withdrawals Request from NervosDAO deposits locked with zero length args locks, developed as part of iCKB.',
      rfc: 'https://github.com/ickb/proposal#owned-owner-script',
      code: 'https://github.com/ickb/v1-core/tree/454cfa966052a621c4e8b67001718c29ee8191a2/scripts/contracts/owned_owner',
    },
  ],
  [
    'UDT Limit Order',
    {
      name: 'UDT Limit Order',
      description: 'UDT Limit Order is a general purpose UDT based Limit Order, developed as part of iCKB.',
      rfc: 'https://github.com/ickb/proposal#limit-order-script',
      code: 'https://github.com/ickb/v1-core/tree/454cfa966052a621c4e8b67001718c29ee8191a2/scripts/contracts/limit_order',
    },
  ],
  [
    'Stable++ Pool',
    {
      name: 'Stable++ Pool',
      description: 'Stable++ Pool',
    },
  ],
  [
    'DID',
    {
      name: 'DID',
      description:
        'DID is a blockchain-based, open source, censorship-resistant decentralized account system that provides a globally unique naming system with a .bit suffix that can be used for cryptocurrency transfers, domain name resolution, authentication, and other scenarios.',
      code: 'https://github.com/dotbitHQ/did-contracts',
      website: 'https://did.id/',
    },
  ],
  [
    'Stable++ Intent Lock',
    {
      name: 'Stable++ Intent Lock',
      description: 'Stable++ Lock hosting pledge',
      website: 'https://www.stablepp.xyz/stablecoin',
    },
  ],
  [
    'Stable++ Vault Lock',
    {
      name: 'Stable++ Vault Lock',
      description: 'Stable++ Vault Lock Script',
      website: 'https://www.stablepp.xyz/stablecoin',
    },
  ],
  [
    'Stable++ Asset',
    {
      name: 'Stable++ Asset',
      description: 'Stable++ Asset',
      website: 'https://www.stablepp.xyz/stablecoin',
    },
  ],
  [
    'USDI Asset',
    {
      name: 'USDI Asset',
      description: 'USDI Asset',
      website: 'https://www.interpaystellar.com/',
    },
  ],
  [
    'Fiber Channel',
    {
      name: 'Fiber Channel',
      description: 'Fiber Channel',
      website: 'https://www.ckbfiber.net',
    },
  ],
])

const keysWithLinkValueInScript: (keyof ScriptAttributes)[] = ['rfc', 'code', 'doc', 'deprecated', 'website']

const ScriptList: FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const defaultOpenLabel = decodeURIComponent(location.hash.slice(1))

  return (
    <Content>
      <div className={styles.title}>{t(`script_list.title`)}</div>
      <div className={styles.container}>
        {[...scripts].map(([label, meta]) => {
          const script = scriptDataList.find(s => s.tag === label)
          if (!script) return null
          return (
            <details key={label} id={label} open={label === defaultOpenLabel}>
              <summary data-deprecated={!!meta.deprecated} title={meta.deprecated ? 'Deprecated' : undefined}>
                <b>{`${meta.name}:`}</b>
                {meta.description}
              </summary>
              <div>
                <h3>{`${t('script_list.links')}:`}</h3>
                <div className={styles.links}>
                  {keysWithLinkValueInScript.map(key =>
                    meta[key] ? (
                      <a key={key} href={meta[key]} target="_blank" rel="noopener noreferrer">
                        {t(`script_list.link.${key}`)}
                      </a>
                    ) : null,
                  )}
                  <Link
                    to={`/script/${script.codeHashes[0]}/${script.hashType}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('script_list.link.detail')}
                  </Link>
                </div>
                <>
                  <h3>{`${t(`script_list.on_chain_data`)}:`}</h3>
                  {script.codeHashes.map((codeHash: string, idx: number) => (
                    <pre key={codeHash}>
                      {`{
  "code_hash": "${codeHash}",
  "hash_type": "${script.hashType}",
  "out_point": {
    "tx_hash": "${script.txHashes[idx]?.split('-')[0]}",
    "index": "0x${(+script.txHashes[idx]?.split('-')[1]).toString(16)}"
  },
  "dep_type": "${script.depType}"
}`}
                    </pre>
                  ))}
                </>
              </div>
            </details>
          )
        })}
      </div>
    </Content>
  )
}

export default ScriptList
