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
import HeaderIcon from './HeaderIcon'

function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2
    lg:px-5 shadow-md'>
        {/* left */}
        <div className='flex items-center'>
            <Image src="https://links.papareact.com/5me"
            width={50} height={50} layout="fixed" 
        />
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon className='h-5 w-5 text-gray-600'/>
                <input
                className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' 
                type="text" placeholder='Search Facebook' name="" id="" />
            </div>
        </div>

        {/* center */}
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active={true} Icon={HomeIcon}/>
                <HeaderIcon active={false} Icon={FlagIcon}/>
                <HeaderIcon active={false} Icon={PlayIcon}/>
                <HeaderIcon active={false} Icon={UserGroupIcon}/>
                <HeaderIcon active={false} Icon={ShoppingCartIcon}/>
            </div>
        </div>
        {/* right */}
        <div className='flex items-center sm:space-x-2 justify-end'>
            {/* Profile Pic */}
            <p className='font-semibold pr-3 whitespace-nowrap'>Brian Spencer</p>

            <ViewGridIcon className='icon' />
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <ChevronDownIcon className='icon' />
        </div>
    </div>
  )
}

export default Header