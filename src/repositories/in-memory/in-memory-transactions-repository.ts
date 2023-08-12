import { Transaction } from '@prisma/client'
import {
  CreateTransactionDTO,
  TransactionsRepository
} from '../transactions-repository'

export class InMemoryTransactionsRepository implements TransactionsRepository {
  public items: Transaction[] = []

  async createTransaction(data: CreateTransactionDTO): Promise<Transaction> {
    const transaction = {
      ...data,
      id: 'eaa8feeb-ce6f-4d09-9bff-24ede81c19d8',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(transaction)
    return transaction
  }
}
