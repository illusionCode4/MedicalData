import { Button } from './ui/button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm'>
      <div className='flex items-center justify-between gap-x-2 ml-4 lg:ml-0'>
        <div className='flex items-center gap-x-4'>
          <Button
            size='sm'
            variant='ghost'
            className='text-muted-foreground hover:text-primary'
            asChild
          >
            <Link href={`/`}>
              {/* <Clapperboard className='h-5 w-5 lg:mr-2' /> */}
              <span className='hidden lg:block'>Home Page</span>
            </Link>
          </Button>
          <Button
            size='sm'
            variant='ghost'
            className='text-muted-foreground hover:text-primary'
            asChild
          >
            <Link href={`/healthy`}>
              {/* <Clapperboard className='h-5 w-5 lg:mr-2' /> */}
              <span className='hidden lg:block'>Health Page</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
