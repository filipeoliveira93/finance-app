import { ArrowDownUpIcon } from 'lucide-react';
import { Button } from '../_components/ui/button';
import { db } from '../_lib/prisma';
import { DataTable } from '../_components/ui/data-table';
import { transactionColumns } from './_columns';

const transactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className='space-y-6 p-6'>
      <div className='flex w-full items-center justify-between p-6'>
        <h1>Transações</h1>
        <Button className='rounded-full font-bold'>
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>

      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default transactionsPage;
