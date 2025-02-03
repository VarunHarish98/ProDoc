import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';
import DrawerComponent from '@/components/mobile-drawer';

type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className='w-full h-screen'>
      <div className='flex flex-col'>
        <header className='sticky z-10 gap-2 p-2 flex items-center border-b-2'>
          <div className='text-2xl font-semibold text-[#FF3E10]'>ProDoc</div>
          <div className='flex flex-row gap-2 justify-end w-full p-2'>
            <ModeToggle />
            <DrawerComponent />
          </div>
        </header>
      </div>

    </div>
  )
}

export default HomeComponent;