
import {createContext,useState,useEffect} from 'react';




 export const Context = createContext();


 const ContextProvider = (props) =>{


const [committ,setCommitt]=useState("house");
  const [loading,setLoading] = useState(true);
  const[query,setQuery] = useState("");
  const [nommy,setNommy]=useState("received")

  const [nominations,setNominations] = useState([])

  const[statement,setStatement] = useState([]);

  const fetchStatements= async () =>{
    setLoading(true);
    try {
      const response = await fetch(`/searchstatements?query=${query}`)
     const data = await response.json();

      if(data){
    
  
    setStatement(data);
      }
       
    else {
        setStatement([]);
      }
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }
      
  const fetchNominations= async () =>{
    setLoading(true);
    try {
      const response = await fetch( `/nominations?query=${nommy}`)
     const data = await response.json();

      if(data){
    
 
    setNominations(data);
      }
       
    else {
        setNominations([]);
      }
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }
    
  const fetchCommittee= async () =>{
    setLoading(true);
    try {
      const response = await fetch( `/committee?query=${committ}`)
     const data = await response.json();

      if(data){
    
  console.log(data[0].committees
    );
    setCommitt(data[0].committees);
      }
       
    else {
        setCommitt([]);
      }
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }
    



  useEffect(()=>{
    fetchStatements();
    fetchNominations();
    fetchCommittee();
  },[query,nommy,committ])


  

    const [user, setUser] = useState(null);


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
        fetchLogin,
        loading,
        query,
        setQuery,
        statement,
        nominations,
        nommy,
        setNommy,
        committ,
        setCommitt
      
    }
return(
    <Context.Provider value={store}>{props.children}</Context.Provider>
)

 }


 export default ContextProvider