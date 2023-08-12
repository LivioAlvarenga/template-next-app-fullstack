import { prisma } from '@/lib/prisma'
import {
  CreateTransactionDTO,
  TransactionsRepository
} from '../transactions-repository'

export class PrismaTransactionsRepository implements TransactionsRepository {
  async createTransaction(data: CreateTransactionDTO) {
    return await prisma.transaction.create({
      data: {
        description: data.description,
        price: data.price,
        category: data.category,
        type: data.type,
      },
    })
  }
}
