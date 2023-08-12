'use client'

import { api } from '@/lib/axios'
import 'dotenv/config'
import {
  ReactNode,
  createContext,
  useState
} from 'react'

interface TransactionProps {
  id: string
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface CreateTransactionInputProps {
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
}

interface TransactionContextType {
  transactions: TransactionProps[]
  createTransaction: (transaction: CreateTransactionInputProps) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

const TRANSACTION_LIMIT = 5

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function createTransaction(transaction: CreateTransactionInputProps) {
    const { description, price, category, type } = transaction

    try {
      const response = await api.post('', {
        description,
        price,
        category,
        type,
      })

      setTransactions((state) =>
        [response.data, ...state].slice(0, TRANSACTION_LIMIT),
      )

      // toast.success('Transação criada com sucesso!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
