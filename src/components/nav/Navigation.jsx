import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const token = localStorage.getItem('token');
    const authenticated = !!token;

  return (
    <nav className='bg-zinc-800' id='navigation'>
            <div className='w-full max-w-screen-xl min-h-full mx-auto px-4 nav-container'>
                <div className='flex justify-between items-center py-4 nav-wrapper'>
                    <NavLink to='/' className='brand-logo'>
                        <img className='w-16 h-16 rounded-full logo' src='https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY' alt="Logo" />
                    </NavLink>
                    <ul className='flex gap-5 text-white nav-list'>
                        <li className='nav-items'><NavLink to='#about'>About</NavLink></li>
                        <li className='nav-items'><NavLink to='#shop'>Shop</NavLink></li>
                        <li className='nav-items'><NavLink to='#service'>Recipes</NavLink></li>
                        <li className='nav-items'><NavLink to='#products'>Products</NavLink></li>
                    </ul>
                    <ul className='flex gap-3 text-white nav-list'>
                        <button className='py-3 px-8 bg-sky-900 rounded-full hover:opacity-90 nav-btn'>
                            <NavLink to='/register'>Register</NavLink>
                        </button>
                        <button className='py-3 px-8 bg-sky-900 rounded-full hover:opacity-90 nav-btn'>
                            <NavLink to='/login'>Login</NavLink>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navigation