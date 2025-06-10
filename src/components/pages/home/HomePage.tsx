import React from 'react'
import TodaysTask from './sections/TodaysTask'
import InProgress from './sections/InProgress'
import TaskGroups from './sections/TaskGroups'

const HomePage = () => {
  return (
    <main>
        <div className='container pt-5 flex flex-col gap-y-5 pb-[150px]'>
            <TodaysTask/>
            <InProgress/> 
            <TaskGroups/>
        </div>
    </main>
  )
}

export default HomePage