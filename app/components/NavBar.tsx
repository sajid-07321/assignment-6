"use client"
import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavBar = () => {
    const pathname = usePathname();

    return (
    <nav className='w-full border-b border-gray-900'>
        <div className='w-full px-6 md:px-10 lg:px-12 py-4 flex items-center justify-between'>
            {/* left side */}
            <div className='flex items-center gap-2'>
        <Image src={logo} alt="Logo" />
        <p className='font-semibold'>FITLOG</p>
            </div>
            {/* middle */}
            <div className="flex items-center gap-8">

            <Link
                href="/workouts"
                className={
                    pathname === "/workouts"
                        ? "rounded-full bg-lime-950 px-4 py-2 text-sm text-lime-400"
                        : "px-4 py-2 text-sm"
                }
            >
                Workouts
            </Link>

            <Link
                href="/my-plan"
                className={
                    pathname === "/my-plan"
                        ? "rounded-full bg-lime-950 px-4 py-2 text-sm text-lime-400"
                        : "px-4 py-2 text-sm"
                }
            >
                My Plan
            </Link>

        </div>
            {/* right side */}
            <div className='flex items-center gap-6'>
        <p>Plan</p>
        <p>Saved</p>        
            </div>
        </div>
    </nav>    
    );
};

export default NavBar;