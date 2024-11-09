import Image from 'next/image';
import { Button } from '../_components/ui/button';
import { LogInIcon } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className='grid h-full grid-cols-2'>
      <div className='mx-auto flex h-full max-w-[550px] flex-col justify-center p-8'>
        <Image src='/logo.svg' alt='finance app' width={173} height={479} className='mb-8' />
        <h1 className='mb-3 text-2xl font-bold'> Bem vindo à nova era da sua vida financeira</h1>
        <p className='mb-8 text-muted-foreground'>
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e
          oferecer insights personalizados, facilitando o controle do seu orçamento.
        </p>
        <Button variant={'outline'}>
          <LogInIcon className='mr-2' />
          Fazer login ou criar conta
        </Button>
      </div>
      <div className='relative h-full w-full'>
        <Image src='/login-2.png' alt='Faça login' fill className='' />
      </div>
    </div>
  );
};

export default LoginPage;
