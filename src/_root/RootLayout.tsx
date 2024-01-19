import LeftSideBar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import { useState } from 'react'
import { Home } from './pages';

export interface User {
  name: string;
  department: string;
}

const RootLayout = () => {
  const [user, setUser] = useState<User>({ name: 'Nithin', department: 'Marketing' });

  const handleDepartmentChange = (newDepartment: string) => {
    setUser((prevUser) => ({ ...prevUser, department: newDepartment }));
  };
  return (
    <div className=' w-full overflow-hidden'>
      <Topbar user={user} onDeptChange={handleDepartmentChange}/>
      <div className='flex flex-1 h-full'>
      <div className='sm:hidden'><LeftSideBar/></div>   
      <section className='flex flex-1 h-4/5 sm:w-full'>
        <Home user={user}/>
      </section>
      </div>
    </div>
  )
}

export default RootLayout