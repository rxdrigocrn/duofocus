'use client';
import React from 'react'
import FilterFeedback from '@/components/shared/FilterFeedback';
import FeedbackCard from '@/components/templates/FeedbackCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FeedbackTypeCard from '@/components/shared/FeedbackTypeCard';
import FeedbackText from '@/components/shared/FeedbackText';
import MedidorDeFelicidade from '@/components/shared/MedidorDeFelicidade';
import ShareProgressButton from '@/components/shared/ShareProgressButton';

const Feedback = () => {
  return (
    <div className='min-h-[calc(100vh-82px)] flex flex-col items-center gap-7 py-10 px-4'>  
        <FilterFeedback/>

        <FeedbackCard 
        title="Total Progress"
        value="85%"
        content={
          <div className="flex justify-between">
            <FeedbackTypeCard
            icon={<img src='/mindFeedback.svg' className='w-4'/>}
            title="Mind Tasks"
            value="18/20"
            trendIcon={<img src='/ArrowUpBlue.svg' className='w-5'/>}
            color="text-[#6699FF]"
            />
            <FeedbackTypeCard
            icon={<img src='/bodyFeedback.svg' className='w-5'/>}
            title="Body Tasks"
            value="16/20"
            trendIcon={<img src='/ArrowDownRed.svg' className='w-5'/>}
            color="text-[#FF6666]"
            />
          </div>
        }
          
        />

        <FeedbackCard
          title="Happiness Meters"
          content={
            <div className='flex flex-col gap-4'> 
              <MedidorDeFelicidade title="Mind" value={90}/>
              <MedidorDeFelicidade title="Body" value={80}/>
              <MedidorDeFelicidade title="Total" value={85}/>
            </div>
          }
        />
        
        <FeedbackCard
          title="Weekly Insight"
          content={<FeedbackText/>}
        />

          <ShareProgressButton/>

        <div className='text-center mt-2'>
          <h3 className='text-[#9CA3AF] '>
            "Consistency builds extraordinary results"
          </h3>
        </div>
    </div>
  )
}

export default Feedback