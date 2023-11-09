import {FaBars, FaTimes} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const currentPage = useLocation().pathname;
    const links = [
        {
            id: 1,
            link: '/',
            name: 'Home'
        },
        {
            id: 2,
            link: '/about',
            name: 'About Me'
        },
        {
            id: 3,
            link: '/portfolio',
            name: 'Portfolio'
        },
        {
            id: 3,
            link: '/contact',
            name: 'Contact'
        },
        {
            id: 4,
            link: '/resume',
            name: 'Resume'
        },
    ]


    return <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black'>
        <div>
            <h1 className=' text-5xl font-signature ml-2'>Nathan</h1>
        </div>

        <ul className='flex'>
            {/* map thorugh links object to create a <Link for each route.*/}
            {links.map(({ id, link, name}) => (
                <Link 
                key={id}
                to={link}
                // Change color to white if navtab is active
                className = {currentPage === link ? 'px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200;' : ' px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'} 
                >
                    {name}
                </Link>
            ))}
        </ul>
    </div>
}

export default NavBar;