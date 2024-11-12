import { Badge } from '@/app/_components/ui/badge';
import { Transaction, TransactionType } from '@prisma/client';
import { ArrowDown, ArrowUp, HandCoins } from 'lucide-react';

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className='bg-primary bg-opacity-10 font-bold text-primary hover:bg-muted'>
        <ArrowUp className='' size={15} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className='bg-danger bg-opacity-10 font-bold text-danger hover:bg-muted'>
        <ArrowDown size={15} />
        Despesa
      </Badge>
    );
  } else {
    return (
      <Badge className='bg-muted bg-opacity-10 font-bold text-white'>
        <HandCoins size={15} />
        Investimento
      </Badge>
    );
  }
};

export default TransactionTypeBadge;
