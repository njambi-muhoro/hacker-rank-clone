import { createContext, useState } from "react";
import React from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
export const AuthContext = createContext();




export default function AuthProvider({children}) 
{
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState('')

    // login
    const login = (email, password) =>{
        fetch(`http://localhost:3000/login`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }
        )
        .then(res=>res.json())
        .then(response=>{
            console.log(response)
            if(response.errors){
                 const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                    })

                    Toast.fire({
                    icon: 'error',
                    title: 'Signed in successfully'
                    })
            }
            else if (response.user) {
                // set the user token in the session storage
              sessionStorage.setItem('jwtToken', response.jwt);
                sessionStorage.setItem('userTYpe', response.user.userType);
                sessionStorage.setItem('username', response.user.username);
                 sessionStorage.setItem('userId', response.user.id);
                setCurrentUser(response.user)
                navigate('/dashboard')
                // show success message 
                    const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                    })

                    Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                    })
            }
            else{
                
            }
        })
    }

// Register
    const register = (email, password, username, userType) => {
         console.log("userType:", userType); // add this line to debug

        fetch(`http://localhost:3000/users`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               email, password, username, userType
            })
        }
        )
        .then(res=>res.json())
        .then(response=>{
            console.log(response)
            if(response.errors){
                 const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                    })

                    Toast.fire({
                    icon: 'error',
                    title: 'Unable to Sign-up'
                    })
            }

            else if (response.status==='created') {
                // show success message 
                navigate('/login')
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                    })

                    Toast.fire({
                    icon: 'success',
                    title: 'Signed up successfully'
                    })

            }
            else{
                
            }
        })
         
    }
    
     // Logout
     const logout = () =>{
       sessionStorage.clear();
       localStorage.clear();
             navigate('/login');
     }
    
    const contextData = {
        login, logout, register, currentUser
    }

  return (
    <>
     <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
    </>
  )
}
