import React from 'react'
import { useNavigate } from 'react-router-dom';


const DashBoard = () => {
   const navigate = useNavigate()
    const username = sessionStorage.getItem("username");
    const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
	const userType = sessionStorage.getItem("userTYpe");

	// const [navbarHeight, setNavbarHeight] = useState(0)

	// window.addEventListener("resize", () => {
	// 	syncHeight()
	// })

	// function syncHeight() {
	// 	const navbar = document.getElementById("nav")
	// 	setNavbarHeight(navbar.offsetHeight)
	// }

	// useEffect(() => {
	// 	syncHeight()
	// }, [])

  return (
		<div className='mt-12 min-h-[100vh] justify-center items-center'>
			{isLoggedIn ? (
				<>
					{userType === "student" ? (
						<div>
							<header className='theme-m bg-gradient-to-br from-[#11639c] via-[#097bbf] to-[#00ace0] text-white mt-[6vh] justify-center items-center'>
								<div className='lg:max-w-6xl mx-auto px-10'>
									<h1 className='text-3xl font-md py-4 '>
										Welcome <span className='text-white'>{username}</span>!
									</h1>
									<p className=' text-xs py-2 text-gray-300'>
										We are here to help you get your dream job. Let’s get
										started with your interview preparation.
									</p>
									<p className=' py-2'>
										<span className='font-bold text-xs'>
											When is your interview?
										</span>
										<div
											data-event-label='OpenInterviewDropdown'
											data-event-category='HRC Interview Prep'
											data-cd-interview-time='one_week'
											data-click-event-enabled='true'
											className='inline-block relative ml-2'
										>
											<select className='custom-select prep-time-select appearance-none bg-gradient-to-br from-[#11639c] via-[#097bbf] to-[#00ace0] border border-white hover:border-black px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black'>
												<option value='one_week'>In a week</option>
												<option value='two_weeks'>In two weeks</option>
												<option value='three_weeks'>In three weeks</option>
											</select>
											<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
												<svg
													className='fill-current h-4 w-4'
													viewBox='0 0 20 20'
												>
													<path d='M9.29289 13.2929C9.68342 13.6834 10.3166 13.6834 10.7071 13.2929L14.7071 9.29289C15.0976 8.90237 15.0976 8.2692 14.7071 7.87868C14.3166 7.48815 13.6834 7.48815 13.2929 7.87868L10 11.1716L6.70711 7.87868C6.31658 7.48815 5.68342 7.48815 5.29289 7.87868C4.90237 8.2692 4.90237 8.90237 5.29289 9.29289L9.29289 13.2929Z' />
												</svg>
											</div>
										</div>
									</p>
								</div>
							</header>
							<section className='bg-white rounded-lg mb-10 '>
								<div className='flex justify-between items-center mb-4 mx-auto lg:max-w-6xl px-8'>
									<h2 className='text-2xl font-bold'>We recommend</h2>
									<a href='!#' className='text-[#077407] hover:underline'>
										View all
									</a>
								</div>
								<div className='px-10 bg-gray-100 m-4 md:w-3/4 md:mx-auto flex flex-col md:flex-row rounded-lg p-6 items-center'>
									<div className='flex items-center'>
										<div className=' w-40 p-3'>
											<img
												src='https://hrcdn.net/fcore/assets/dashboard/lady_practicing-1add890f1f.svg'
												alt=''
												className=' mx-auto mb-4'
											/>
										</div>
										<div className=''>
											<h3 className='text-lg font-bold mb-2'>
												1 Week Preparation Kit
											</h3>
											<div className='text-sm text-gray-700 mb-2'>
												<span>Challenges: </span>
												<span className='font-bold'>21</span>
												<span>, Mock Tests: </span>
												<span className='font-bold'>6</span>
												<span>, Attempts: </span>
												<span className='font-bold'>590206</span>
											</div>
											<div className='flex flex-wrap mb-2'>
												<a
													href='!#'
													className='mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-300 hover:text-gray-600'
												>
													Problem Solving (Basic)
												</a>
												<a
													href='!#'
													className='mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-300 hover:text-gray-600'
												>
													Problem Solving (Intermediate)
												</a>
												<a
													href='!#'
													className='mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-sm font-medium hover:bg-gray-300 hover:text-gray-600'
												>
													+1 more
												</a>
											</div>
											<p className='text-xs text-gray-700 mb-3'>
												This Interview Preparation Kit has challenges curated by
												our experts for you to prepare and ace your interview in
												a week's time.
											</p>
										</div>
									</div>
									<div className='flex w-1/3 justify-center border-black'>
										<a
											href='!#'
											className='px-4 py-2 block bg-[#077407] text-white rounded-lg font-medium hover:bg-[#077407] hover:text-white '
										>
											Start Preparation
										</a>
									</div>
								</div>
							</section>
							<section className='py-12 mb-10 mt-10 '>
								<div className='lg:max-w-6xl mx-auto justify-center items-center'>
									<div className='text-left'>
										<h2 className='text-3xl font-bold '>Or select a Topic</h2>
									</div>
									<div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-8  items-center'>
										<a
											href='/algorithms'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/Algorithm.svg'
													alt='Algorithms icon'
													className='w-8 h-8 mr-4'
												/>
												<div className='text-lg font-bold'>Algorithms</div>
											</div>
										</a>
										<a
											href='/data-structures'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/DataStructure.svg'
													alt='Data Structures icon'
													className='w-8 h-8 mr-4'
												/>
												<div className='text-lg font-bold'>Data Structures</div>
											</div>
										</a>
										<a
											href='/mathematics'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/Mathematics.svg'
													alt='Mathematics icon'
													className='w-8 h-8 mr-4'
												/>
												<div className='text-lg font-bold'>Mathematics</div>
											</div>
										</a>
										<a
											href='/ai'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/AI.svg'
													alt='Artificial Intelligence icon'
													className='w-8 h-8 mr-4'
												/>
												<div className='text-lg font-bold'>
													Artificial Intelligence
												</div>
											</div>
										</a>
										<a
											href='/c'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/C.svg'
													alt='C icon'
													className='w-8 h-8 mr-4'
												/>
												<div className='text-lg font-bold'>C</div>
											</div>
										</a>
										<a
											href='/cpp'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/C++.svg'
													alt='C++ icon'
													className='w-8 h-8 mr-4'
												/>
												<div className='text-lg font-bold'>C++</div>
											</div>
										</a>
										<a
											href='/java'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/Java.svg'
													alt=''
													className='w-6 h-6'
												/>
												<div className='text-lg font-bold'>Java</div>
											</div>
										</a>
										<a
											href='/python'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/Python.svg'
													alt=''
													className='w-6 h-6'
												/>
												<div className='text-lg font-bold'>Python</div>
											</div>
										</a>
										<a
											href='/ruby'
											className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
										>
											<div className='flex items-center'>
												<img
													src='https://hrcdn.net/s3_pub/hr-assets/dashboard/Ruby.svg'
													alt=''
													className='w-6 h-6'
												/>
												<div className='text-lg font-bold'>Ruby</div>
											</div>
										</a>
									</div>
								</div>
							</section>

							<div className='lg:max-w-6xl grid grid-cols-1 sm:grid-cols-2  gap-2 bg-white rounded-lg shadow-lg lg:p-6 mx-auto max-w-screen-lg mb-10 theme-m bg-gradient-to-br from-[#11639c] via-[#097bbf] to-[#00ace0]'>
								<div className=' p-6'>
									<div className='flex items-center mb-4'>
										<h3 className='text-lg font-semibold text-white'>
											{" "}
											NEW <br />
											Create a Job Winning Resume
										</h3>
									</div>
									<div>
										<p className='text-white mb-10'>
											Boost your chances of landing that dream job by building
											fine-tuned resumes that stand out.
										</p>
									</div>
									<div className='mt-10'>
										<a
											href='!#'
											className='bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded'
										>
											Create a Resume
										</a>
									</div>
								</div>
								<div className='mt-10'>
									<img
										alt='hackerresume-card'
										className='hackerresume-img'
										src='https://hrcdn.net/fcore/assets/dashboard/hackerresume-card-dd9b01fcd2.svg'
									/>
								</div>
							</div>
						</div>
					) : userType === "TM" ? (
						<div>
							<header className='theme-m bg-gradient-to-br from-[#11639c] via-[#097bbf] to-[#00ace0] text-white mt-[6vh] justify-center items-center'>
								<div className='lg:max-w-6xl mx-auto px-10'>
									<h1 className='text-3xl font-md py-4 '>
										Welcome <span className='text-white'>{username}</span>!
									</h1>
									<p className=' text-xs py-2 text-gray-300'>
										Welcome, we're excited to hear that you're interested in
										creating a coding test. Our team is ready to help you design
										an assessment that accurately evaluates the skills of the
										developers you're looking to hire.
									</p>
								</div>
							  </header>
							  <div class="grid grid-cols-3 gap-6 sm:block">
  {/* <!-- Card 1 --> */}
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src="https://via.placeholder.com/600x400" alt="Placeholder image" class="w-full"/>
    <div class="p-4">
      <h2 class="font-bold text-xl mb-2">Card 1 Title</h2>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae feugiat enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin faucibus dignissim quam, vel malesuada ex aliquam ac. </p>
    </div>
  </div>

  {/* <!-- Card 2 --> */}
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src="https://via.placeholder.com/600x400" alt="Placeholder image" class="w-full"/>
    <div class="p-4">
      <h2 class="font-bold text-xl mb-2">Card 2 Title</h2>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae feugiat enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin faucibus dignissim quam, vel malesuada ex aliquam ac. </p>
    </div>
  </div>

  {/* <!-- Card 3 --> */}
  <div class="bg-white rounded-lg shadow-lg overflow-hidden w-100">
    <img src="https://via.placeholder.com/300x400" alt="Placeholder image" />
    <div class="p-4">
      <h2 class="font-bold text-xl mb-2">Card 3 Title</h2>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae feugiat enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin faucibus dignissim quam, vel malesuada ex aliquam ac. </p>
    </div>
  </div>
</div>

						</div>
					) : null}
				</>
			) : (
				navigate("/login")
			)}
		</div>
	);
}

export default DashBoard;