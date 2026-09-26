
import Image from 'next/image';
import logo from '@/public/bicep.png'

const Footer = () => {
    return (
        <>
        <div className='sticky top-0 z-50 w-full border-t border-gray-900 bg-[#0B0D10] py-8 mt-10'>
            <div className='container mx-auto flex justify-between items-center'>
            {/* left */}
            <div className='flex gap-2'>
            <Image src={logo}
            alt='footer logo'
            width={40}
            height={10} / >
            <h4 className='font-bold mt-3'>FITLOG</h4>
            </div>
            {/* right */}
            <div>
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
            
        </div>
        </div>
        </>
    );
};

export default Footer;