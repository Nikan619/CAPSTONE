
import {createContext,useState,useEffect} from 'react';




 export const Context = createContext();


 const ContextProvider = (props) =>{

    const [user, setUser] = useState(null);
useEffect(() =>{
    fetchMe()
},[])

    const fetchMe = () =>{
        fetch("/me").then((r)=>{
            if(r.ok){
              r.json().then((user)=> setUser(user))
            }
          });
        
    }



    const handleLogoutClick = ()=>{
        fetch("/logout",{method:"DELETE"}).then((r)=>{
            if(r.ok){
                setUser({});
            }
        })
    }



    const fetchLogin = (username,password,setError) => {
       
    
        fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Invalid password');
          })
          .then((data) => {
            setUser(data)
          })
          .catch((error) => {
            setError(error.message);
          });
      };

    const store = {
        test: "testing",
        user,
        setUser,
        fetchMe,
        handleLogoutClick,
        fetchLogin
    }
return(
    <Context.Provider value={store}>{props.children}</Context.Provider>
)

 }


 export default ContextProvider