import Link from 'next/link';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import './Sidebar.css'; 

const SideBar = () => {
    return (
        <div className='sidebar-section flex-col items-center'>
            <div className='intro'>
                <img src="https://res.cloudinary.com/ds2bmmnmg/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1721555489/Trinadh_pxpa1p.jpg"
                    alt="profile" 
                    className='profile-image'
                 />
                 <div>
                    <h1 className='font-extrabold'>
                        Daram Trinadh Reddy
                    </h1>
                    <p className='font-semibold'>
                        Frontend Developer
                    </p>
                </div>
            </div> 
            <nav className='flex flex-row mt-5 lg:flex-col'>
                <Link href="/" className='m-5'>
                       <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
                        >
                            <span>Home</span>
                        </HoverBorderGradient>
                </Link>
                <Link href="/About" className='m-5'>
                       <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
                        >
                            <span>About</span>
                        </HoverBorderGradient>
                </Link>
                <Link href="/Projects" className='m-5'>
                       <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2"
                        >
                            <span>Projects</span>
                        </HoverBorderGradient>
                </Link>
    
            </nav>
        </div>
    );
}

export default SideBar;
