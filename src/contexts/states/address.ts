export const initAddressState: State.AddressState = {
  address: {
    addressHash: '',
    lockHash: '',
    balance: '0',
    balanceOccupied: '0',
    daoDeposit: 0,
    interest: 0,
    daoCompensation: 0,
    transactionsCount: 0,
    pendingRewardBlocksCount: 0,
    lockScript: {
      args: '',
      codeHash: '',
      hashType: '',
    },
    type: '',
    lockInfo: {
      status: 'unlocked',
      epochNumber: '0',
      epochIndex: '0',
      estimatedUnlockTime: '0',
    },
    liveCellsCount: '',
    minedBlocksCount: '',
    isSpecial: false,
    specialAddress: '',
    udtAccounts: [],
  },
  transactions: [],
  total: 0,
  addressStatus: 'None',
  transactionsStatus: 'None',
}

export default initAddressState
