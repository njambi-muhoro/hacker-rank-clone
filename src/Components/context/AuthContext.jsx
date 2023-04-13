import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
export const AuthContext = createContext();




export default function AuthProvider({children}) 
{
  const navigate = useNavigate()

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
     const register = (email,username,userType, password) =>{
        fetch(`http://localhost:3000/users`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,username,userType, password
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
            else if (response.user) {
                // show success message 
                console.log(response)
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
             navigate("/login");
     }
    
    const contextData = {
        login, logout, register
    }

  return (
    <>
     <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
    </>
  )
}