"use client"
import { ModeToggle } from '@/components/mode-toggle';
import React, { useState } from 'react';
import DrawerComponent from '@/components/mobile-drawer';
import ReportComponent from '@/components/report-component';
import { useToast } from '@/hooks/use-toast';
import ChatComponent from '@/components/chat-component';

type Props = {}

const HomeComponent = (props: Props) => {
  const { toast } = useToast()

  const [reportData, setreportData] = useState("");
  const onReportConfirmation = (data: string) => {
    setreportData(data);
    toast({
      description: "Updated!"
    });
  }
  return (
    <div className='w-full h-screen'>
      <div className='flex flex-col'>
        <header className='sticky z-10 gap-2 p-2 flex items-center border-b-2'>
          <div className='text-2xl font-semibold text-[#FF3E10]'>ProDoc</div>
          <div className='flex flex-row gap-2 justify-end w-full p-2'>
            <ModeToggle />
            <DrawerComponent onReportConfirmation={onReportConfirmation} />
          </div>
        </header>
        <div className='grid md:grid-cols-2 flex-1 lg:grid-cols-3 gap-4 p-4'>
          <div className='hidden md:flex flex-col'><ReportComponent onReportConfirmation={onReportConfirmation} /></div>
          <div className='sm:col-span-2'><ChatComponent reportData={reportData} /></div>
        </div>
      </div>

    </div>
  )
}

export default HomeComponent;