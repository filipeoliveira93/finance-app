'use client';

import { Transaction, TransactionCategory, TransactionPaymentMethod } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import TransactionTypeBadge from '../_compontent/type-badge';
import { Button } from '@/app/_components/ui/button';
import { EditIcon, Trash2Icon } from 'lucide-react';

const transactionCategoryMap = {
  [TransactionCategory.EDUCATION]: 'Estudos',
  [TransactionCategory.FOOD]: 'Alimentação',
  [TransactionCategory.ENTERTAINMENT]: 'Lazer',
  [TransactionCategory.HOUSING]: 'Moradia',
  [TransactionCategory.OTHER]: 'Outros',
  [TransactionCategory.SALARY]: 'Salário',
  [TransactionCategory.TRANSPORTATION]: 'Transporte',
  [TransactionCategory.UTILITY]: 'Utilidades',
  [TransactionCategory.HEALTH]: 'Saúde',
};

const paymentMethodMap = {
  [TransactionPaymentMethod.CASH]: 'Dinheiro',
  [TransactionPaymentMethod.CREDIT_CARD]: 'Cartão de crédito',
  [TransactionPaymentMethod.DEBIT_CARD]: 'Cartão de debito',
  [TransactionPaymentMethod.BANK_TRANSFER]: 'Transferência bancária',
  [TransactionPaymentMethod.BANK_SLIP]: 'Boleto bancário',
  [TransactionPaymentMethod.PIX]: 'PIX',
  [TransactionPaymentMethod.OTHER]: 'Outros',
};

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original: transaction } }) => <TransactionTypeBadge transaction={transaction} />,
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row: { original: transaction } }) => transactionCategoryMap[transaction.category],
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Método de pagamento',
    cell: ({ row: { original: transaction } }) => paymentMethodMap[transaction.paymentMethod],
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
    cell: ({ row: { original: transaction } }) =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: () => {
      return (
        <div className='space-x-1'>
          <Button variant={'ghost'} size='icon' className='text-muted-foreground'>
            <EditIcon />
          </Button>
          <Button variant={'ghost'} size='icon' className='text-muted-foreground'>
            <Trash2Icon />
          </Button>
        </div>
      );
    },
  },
];
