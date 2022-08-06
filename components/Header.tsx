import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid"
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"

function Header() {
  return (
    <div>
        {/* left */}
        <div className='flex items-center'>
            <Image src="https://links.papareact.com/5me"
            width={50} height={50} layout="fixed" 
        />
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon className='h-5 w-5 text-gray-600'/>
                <input
                className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' 
                type="text" placeholder='Search Facebook' name="" id="" />
            </div>
        </div>

        {/* center */}

        {/* right */}
    </div>
  )
}

export default Header