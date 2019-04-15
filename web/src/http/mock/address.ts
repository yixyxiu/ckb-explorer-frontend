import Address from '../response/Address'
import { Transaction } from '../response/Transaction'
import { Response } from '../response/Response'

export const AddressData: Response<Address> = {
  type: 'address',
  data: {
    address_hash: '0xnj7982dd3149da69e05e8867ccebd84eebdddaf947cc2618a1dca7683eadekoi',
    balance: 1000,
    transactions_count: 100,
    cell_consumed: 50,
    lock_script: {
      args: ['pubk', 'pubk'],
      binary_hash: '0xnj7982dd3149da69e05e8867ccebd84eebdddaf947cc2618a1dca7683eadekoi',
    },
  },
  status: 200,
  message: 'success',
}

export const TransactionsData: Response<Transaction[]> = {
  type: 'address_transaction',
  pagination: {
    previous: 1,
    next: 3,
    current: 2,
    page_size: 20,
    total: 200,
    pages: 10,
  },
  data: [
    {
      transaction_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
      block_number: '770',
      block_timestamp: 1553068833785,
      transaction_fee: 666,
      version: 0,
      display_inputs: [
        {
          input_id: 101,
          address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
          capacity: 100,
        },
        {
          input_id: 102,
          address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
          capacity: 100,
        },
      ],
      display_outputs: [
        {
          output_id: 103,
          address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
          capacity: 100,
        },
        {
          output_id: 104,
          address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
          capacity: 100,
        },
      ],
    },
    {
      transaction_hash: '0xmk8721e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
      block_number: '770',
      block_timestamp: 1553068833785,
      transaction_fee: 666,
      version: 0,
      display_inputs: [
        {
          input_id: 101,
          address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
          capacity: 100,
        },
        {
          input_id: 102,
          address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
          capacity: 100,
        },
      ],
      display_outputs: [
        {
          output_id: 103,
          address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
          capacity: 100,
        },
        {
          output_id: 104,
          address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
          capacity: 100,
        },
      ],
    },
    {
      transaction_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10623dc1cef292cbae324',
      block_number: '770',
      block_timestamp: 1553068833785,
      transaction_fee: 666,
      version: 0,
      display_inputs: [
        {
          input_id: 101,
          address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
          capacity: 100,
        },
        {
          input_id: 102,
          address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
          capacity: 100,
        },
      ],
      display_outputs: [
        {
          output_id: 103,
          address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
          capacity: 100,
        },
        {
          output_id: 104,
          address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
          capacity: 100,
        },
      ],
    },
    {
      transaction_hash: '0x3abd21e6e51674bb961bb565f3cee9faa5da30e64be10623dc1cef292cbae324',
      block_number: '770',
      block_timestamp: 1553068833785,
      transaction_fee: 666,
      version: 0,
      display_inputs: [
        {
          input_id: 101,
          address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
          capacity: 100,
        },
        {
          input_id: 102,
          address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
          capacity: 100,
        },
      ],
      display_outputs: [
        {
          output_id: 103,
          address_hash: '0x3abd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae324',
          capacity: 100,
        },
        {
          output_id: 104,
          address_hash: '0xddbd21e6e51674bb961bb4c5f3cee9faa5da30e64be10628dc1cef292cbae323',
          capacity: 100,
        },
      ],
    },
  ],
  status: 200,
  message: 'success',
}