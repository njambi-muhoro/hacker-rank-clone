
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'


function NavBar(){
    const [navbar, setNavbar] = useState(false);

    return(
        <div>
            <nav className='w-full fixed top-0 left-0 right-0 z-10'>
			<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div>
                <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                    {/* LOGO */}
					<Link href='/'>
					<h2 className='text-2xl text-black-600 font-bold '>HackerRank</h2>
					</Link>

                    {/* HamburgerMenu */}
                    <div className='md:hidden'>
									<button
										className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
										onClick={() => setNavbar(!navbar)}
									>
										{navbar ? (
									<AiOutlineClose />
                                            ) : (
                                     <GiHamburgerMenu />
                                            )}
                                        </button>
                                    </div>
                </div>
                </div>
                <div>
                <div
								className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
									navbar ? "p-12 md:p-0 block" : "hidden"
								}`}
							>
                                <ul className='h-screen md:h-auto items-center justify-center md:flex '>
                                <li className='pb-4 text-xl  py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:text-green-700  border-cyan-900  '>
										<Link href='#about' onClick={() => setNavbar(!navbar)}>
											Products
										</Link>
     
									</li>
                                    <li className='pb-4 text-xl  py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:text-green-700  border-cyan-900  '>
										<Link href='#about' onClick={() => setNavbar(!navbar)}>
											Solutions
										</Link>
     
									</li>    
                                <li className='pb-4 text-xl  py-5 md:px-6 text-center  border-b-2 md:border-b-0  hover:text-green-700  border-cyan-900  '>
										<Link href='#blog' onClick={() => setNavbar(!navbar)}>
											Resources
										</Link>
									</li>
                                    <div className='md:flex-col flex-wrap gap-8 ml-12 px-9 py-3 items-center'>
                                    <li className='pb-4 text-xl bg-[#D9D9D9] w-full md:w-full mb-3 py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:text-green-700  border-cyan-900  '>
										<Link href='#about' onClick={() => setNavbar(!navbar)}>
											Log In
										</Link>
     
									</li>
                                    <li className='pb-4 text-xl bg-[#077407] py-5 md:px-6 text-center border-b-2 md:border-b-0  hover:text-green-700  border-cyan-900  '>
										<Link href='#about' onClick={() => setNavbar(!navbar)}>
											Sign Up
										</Link>
     
									</li>
                                    </div>
                                </ul>

                            </div>
                </div>
            </div>
            </nav>

        </div>


         
    )
}
export default NavBar


