import { User } from '@/_root/RootLayout';
import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';

interface TopbarProps {
  user: User;
  onDeptChange: (newDepartment: string) => void;
}

const Topbar:React.FC<TopbarProps> = ({ user, onDeptChange }) => {
  const [department, setDepartment] = useState(user.department)

  const handleChange = (newDepartment: string) => {
    setDepartment(newDepartment);
    onDeptChange(newDepartment);
  };
  return (
    <div className='topbar'>
      <div className=' bg-light-2 rounded-md m-3 border-2 border-black h-fit w-fit sm:p-1'>
        <img src="/assets/images/Logo.png" alt="logo" width={220} height={42} className=' shadow-2xl shadow-black sm:w-28 sm:h-6'/>
      </div>
      <div className='flex space-x-10 mr-10 flex-center sm:space-x-2 sm:mr-3'>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className=' font-semibold bg-white rounded-md border-2 border-black h-9 w-48 sm:h-9 sm:w-36 sm:text-xs sm:font-medium'>Department: {user.department}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit bg-white">
          <DropdownMenuLabel>Department</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={department} 
            onValueChange={(newDepartment) => handleChange(newDepartment)}>
            <DropdownMenuRadioItem value="Sales">Sales</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Marketing">Marketing</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Finance">Finance</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
        </DropdownMenu>
        <div className='w-fit h-full flex flex-between space-x-2 text-white cursor-pointer sm:space-x-1'>
          <FaRegUserCircle className=' w-6 h-6 sm:w-4 sm:h-4'/>
          <p className='sm:text-sm'>{user.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Topbar