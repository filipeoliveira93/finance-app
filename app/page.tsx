import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect('/login');
  }
  return (
    <div className='h-full'>
      <UserButton />
    </div>
  );
};

export default Home;
