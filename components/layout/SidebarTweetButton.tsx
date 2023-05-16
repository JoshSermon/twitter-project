import React from 'react'
import { useRouter } from 'next/router';
import { FaFeather } from 'react-icons/fa';

const SidebarTweetButton = () => {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/')}>
            <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center bg-teal-600 hover:bg-opacity-80 transition cursor-pointer">
            <FaFeather size={24} color="white" />
            </div>
        </div>
    )
}

export default SidebarTweetButton

// Stopped at 23:52 - May 15, 2023