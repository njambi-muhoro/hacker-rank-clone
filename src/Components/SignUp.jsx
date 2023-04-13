import React, { useContext, useState } from "react"
import { AuthContext } from "./context/AuthContext"

function SignUp() {
  const { register } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
  const [userType, setUserType] = useState("student")
 
  function handleRegister(e) {
    e.preventDefault()
     console.log(email,password,username,userType)
    register(email,password,username,userType)
  }
return(
  <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
  <div className="container h-full p-10">
    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* <!-- Left column container--> */}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                {/* <!--Logo--> */}
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="data:image/png;base64,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"
                    alt="logo"
                  />
                  <h2 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    How do you want to use HackerRank?
                  </h2>
                  <h4 className="mb-12 mt-1 pb-1 text-xl ">
                    We’ll personalize your setup experience accordingly.
                  </h4>
                </div>

                <form onSubmit={handleRegister}>
                  <p className="mb-4">Please Create An Account</p>

                  {/* <!--Username input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="exampleFormControlInput1"
                        placeholder="Username"
                        value={username}
														onChange={(e) => setUsername(e.target.value)}
                    />
                    <label
                      for="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      User Name
                    </label>
                  </div>

                  {/* <!--Email input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="Email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="exampleFormControlInput1"
                        placeholder="Username"
                        value={email}
													onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      for="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Email address
                    </label>
                  </div>

                  {/*  <!--Password input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="exampleFormControlInput11"
                        placeholder="Password"
                        value={password}
														onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      for="block text-gray-700 text-sm font-bold mb-2"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                  </div>
                  {/*  <!--UserType input--> */}

                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="userType"
                    >
                      Click to select User
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="userType"
                        value={userType} onChange={(e => setUserType(e.target.value))}
                    >
                      <option value="student">Student</option>
                      <option value="TM">TM</option>
                    </select>
                  </div>

                  {/*  */}
                  {/* <!--Registration button--> */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      style={{
                        background: " rgb(65,121,56",
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* <!-- Right column container with background and description--> */}
            <div
              className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
              style={{
                background:
                  "black",
              }}
            >
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                  Welcome to our HackerRank clone! We're excited to offer a
                  platform that caters to both students and TMs. If you're a
                  student looking to improve your coding skills and prepare
                  for real-world programming challenges, you've come to the
                  right place. Our platform offers a wide range of coding
                  exercises and challenges, as well as tutorials to help you
                  learn at your own pace. If you're a TM looking to provide
                  your students with the best possible programming
                  education, our platform can help. Our challenges and
                  tutorials are designed to cater to different skill levels,
                  making it easy for you to customize your curriculum to
                  suit your students' needs. With our platform, you can
                  easily track your progress, identify areas for
                  improvement, and measure your success. Our user-friendly
                  interface makes it easy to navigate and find the
                  challenges and tutorials that are right for you. So
                  whether you're a student or a TM, sign up today and take
                  the first step towards improving your programming skills
                  and achieving your goals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}export default SignUp