import React, { useState, useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  function handleLogin(e) {
    	e.preventDefault();
			// handle login logic here
	  console.log(email, password)
		  login(email, password);
	
    
   
  }
	return (
		<div>
			<section class='gradient-form h-full bg-neutral-200 dark:bg-neutral-700'>
				<div class='container h-full p-10'>
					<div class='g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
						<div class='w-full'>
							<div class='block rounded-lg bg-white shadow-lg dark:bg-neutral-800'>
								<div class='g-0 lg:flex lg:flex-wrap'>
									{/* <!-- Left column container--> */}
									<div class='px-4 md:px-0 lg:w-6/12'>
										<div class='md:mx-6 md:p-12'>
											{/* <!--Logo--> */}
											<div class='text-center'>
												<img
													className='mx-auto w-48'
													src='data:image/png;base64,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'
													alt='logo'
												/>
												<h4 class='mb-12 mt-1 pb-1 text-xl font-semibold'>
													Coding is fun, collaborative and creative
												</h4>
											</div>

											<form onSubmit={handleLogin}>
												<p class='mb-4'>Please login to your account</p>
												{/* <!--Username input--> */}
												<div class='relative mb-4' data-te-input-wrapper-init>
													<input
														type='Email'
														class='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
														id='exampleFormControlInput1'
														placeholder=' Enter your Email'
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
													<label
														for='exampleFormControlInput1'
														class='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
													>
														Email
													</label>
												</div>

												{/* <!--Password input--> */}
												<div class='relative mb-4' data-te-input-wrapper-init>
													<input
														type='password'
														class='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
														id='exampleFormControlInput11'
														placeholder='Password'
														value={password}
														onChange={(e) => setPassword(e.target.value)}
													/>
													<label
														for='exampleFormControlInput11'
														class='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
													>
														Password
													</label>
												</div>

												{/* <!--Submit button--> */}
												<div class='mb-12 pb-1 pt-1 text-center'>
													<button
														class=' bg-green-500 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
														type='submit'
														data-te-ripple-init
														data-te-ripple-color='light'
														disabled={!email || !password}
													>
														{/* "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" */}
														Log in
													</button>
													{/* 
                    <!--Forgot password link--> */}
													<a href='#!'>Forgot password?</a>
												</div>

												{/* <!--Register button--> */}
												<div class='flex  items-center justify-between pb-6'>
													<p class='mb-0 mr-2'>Don't have an account?</p>
													<button
														type='button'
														class=' bg-green-500 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
														data-te-ripple-init
														data-te-ripple-color='light'
													>
														Register
													</button>
												</div>
											</form>
										</div>
									</div>
									{/* 
            <!-- Right column container with background and description--> */}
									<div class=' bg-green-500 flex items-center rounded-b-lg lg:w-6/12 '>
										<div class=' bg-green-500 px-4 py-6 md:mx-12 md:p-12 '>
											<h4 class='mb-6 text-xl font-semibold'>
												We are more than just a company
											</h4>
											<p class='text-xl '>
												At Hackerank Coding, our goal is to teach children and
												parents the value of learning coding at a young age. Not
												only is programming vital to success in the
												technology-driven economy of the 21st century, but it
												can teach kids a broad range of skills that will help
												them in countless other areas as well.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Login;
