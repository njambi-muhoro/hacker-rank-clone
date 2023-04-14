
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { AuthContext } from './context/AuthContext';


function NavBar(){
	const [navbar, setNavbar] = useState(false);
	const { logout } = useContext(AuthContext);
	const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
	const userType = sessionStorage.getItem("userTYpe");
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

    return (
			<>
				<nav className='w-full fixed bg-black text-white top-0 left-0 right-0 z-10 lg:h-8vh md:height-5vh '>
					<div className='justify-between px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8'>
						<div>
							<div className='flex items-center justify-between py-3 md:py-5 md:block'>
								{/* LOGO */}
								<Link to='/'>
									<h2 className='text-2xl text-black-600 font-bold '>
										HackerRank
									</h2>
								</Link>

								{/* HamburgerMenu */}
								<div className='md:hidden'>
									<button
										className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
										onClick={() => setNavbar(!navbar)}
									>
										{navbar ? <AiOutlineClose /> : <GiHamburgerMenu />}
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
								<ul className='h-screen md:h-auto items-center justify-center md:flex'>
									{!isLoggedIn && (
										<>
											<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
												<Link href='#about' onClick={() => setNavbar(!navbar)}>
													Products
												</Link>
											</li>
											<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
												<Link href='#about' onClick={() => setNavbar(!navbar)}>
													Solutions
												</Link>
											</li>
											<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
												<Link href='#blog' onClick={() => setNavbar(!navbar)}>
													Resources
												</Link>
											</li>
											<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
												<Link to='/login' onClick={() => setNavbar(!navbar)}>
													Log In
												</Link>
											</li>
											<li className='pb-2 text-xl py-3 md:px-6 text-center hover:text-green-700'>
												<Link to='/signup' onClick={() => setNavbar(!navbar)}>
													Sign Up
												</Link>
											</li>
										</>
									)}
									{isLoggedIn && (
										<>
											{userType === "student" && (
												<>
													<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
														<Link
															to='/dashboard'
															onClick={() => setNavbar(!navbar)}
														>
															Prepare
														</Link>
													</li>
													<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
														<Link
															to='/dashboard'
															onClick={() => setNavbar(!navbar)}
														>
															Certify
														</Link>
													</li>
													<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
														<Link
															to='/dashboard'
															onClick={() => setNavbar(!navbar)}
														>
															Compete
														</Link>
													</li>
												</>
											)}
											{userType === "TM" && (
												<>
													<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
														<Link
															to='/admin-dashboard'
															onClick={() => setNavbar(!navbar)}
														>
															Candidates
														</Link>
													</li>
													<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
														<Link
															to='/admin-dashboard'
															onClick={() => setNavbar(!navbar)}
														>
															Tests
														</Link>
													</li>
													<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
														<Link
															to='/admin-dashboard'
															onClick={() => setNavbar(!navbar)}
														>
															Interviews
														</Link>
													</li>
													<li className='pb-2 text-xl py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:text-green-700 border-cyan-900'>
														<Link
															to='/admin-dashboard'
															onClick={() => setNavbar(!navbar)}
														>
															Library
														</Link>
													</li>
												</>
											)}
											<li className='pb-2 text-xl py-3 md:px-6 text-center hover:text-green-700'>
												<Link onClick={() => logout()}>Log Out</Link>
											</li>
											<div className='relative inline-flex'>
												<button
													onClick={toggleMenu}
													type='button'
													className='py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
												>
													<img
														className='w-8 h-auto rounded-full'
														src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
														alt='Maria'
													/>
													<span className='text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400'>
														Maria
													</span>
													<svg
														className={`w-2.5 h-2.5 text-gray-600 ${
															isOpen && "rotate-180"
														}`}
														width='16'
														height='16'
														viewBox='0 0 16 16'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
														/>
													</svg>
												</button>

												{isOpen && (
													<div className='absolute z-50 mt-2 right-0 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 dark:border dark:border-gray-700'>
														<a
															href='!#'
															className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
														>
															Profile
														</a>
														<a
															href='!#'
															className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
														>
															Mode
														</a>
														<a
															href='!#'
															className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
														>
															Settings
														</a>
														<a
															href='!#'
															className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
														>
															Logout
														</a>
													</div>
												)}
											</div>
										</>
									)}
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</>
		);
}
export default NavBar


