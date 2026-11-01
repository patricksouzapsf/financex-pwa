// Auto-generated from your database schema — do not edit by hand.
// Regenerates automatically whenever a table is created or altered.

export type FinanceAccountsRow = {
  id: string
  userId: string
  name: string
  accountType: string
  initialBalance: number | string
  createdAt: string
}

export type FinanceBudgetsRow = {
  id: string
  userId: string
  month: string
  categoryId: string | null
  limitAmount: number | string
  createdAt: string
}

export type FinanceCardsRow = {
  id: string
  userId: string
  name: string
  lastFour: string
  creditLimit: number | string
  dueDay: number | string
  closingDay: number | string
  createdAt: string
}

export type FinanceCategoriesRow = {
  id: string
  userId: string
  name: string
  transactionType: string
  color: string
  createdAt: string
}

export type FinanceGoalsRow = {
  id: string
  userId: string
  name: string
  targetAmount: number | string
  currentAmount: number | string
  dueDate: string | null
  createdAt: string
}

export type FinanceTransactionsRow = {
  id: string
  userId: string
  title: string
  amount: number | string
  transactionType: string
  categoryId: string | null
  accountId: string | null
  cardId: string | null
  transactionDate: string
  note: string | null
  paymentMethod: string | null
  installmentGroup: string | null
  installmentIndex: number | string
  installmentCount: number | string
  createdAt: string
}
