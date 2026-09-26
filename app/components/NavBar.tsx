"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '@/public/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WorkoutContext } from '../context/WorkoutContext';


const NavBar = () => {

    const { plan, saved } = useContext(WorkoutContext);
    const pathname = usePathname();

    return (
    <nav className='sticky top-0 z-50 w-full border-b border-gray-900 bg-[#0B0D10]'>
        <div className='container mx-auto max-w-[1620] md:px-10 lg:px-12 py-4 flex items-center justify-between'>
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
<div className="flex items-center gap-6">

  <Link
    href="/my-plan"
    className="flex items-center gap-2 hover:text-lime-400"
  >
    <span>Plan</span>

    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-950 px-1 text-xs text-lime-400">
      {plan.length}
    </span>
  </Link>

  <Link
    href="/my-plan"
    className="flex items-center gap-2 hover:text-lime-400"
  >
    <span>Saved</span>

    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-800 px-1 text-xs text-gray-400">
      {saved.length}
    </span>
  </Link>

</div>
            
        </div>
    </nav>    
    );
};

export default NavBar;