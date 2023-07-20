import React,{useState} from 'react';
import './styles.css';
const App=()=>{
  const [users,setUsers]=useState([]);
  const loadUsers=async()=>{
     console.log("before");
     const response=await fetch ("https://api.github.com/users");
     const jsonresponse=await
     response.json();
     setUsers(jsonresponse);
  };
  return (
    <div className='App'>
      <h1>Hello World</h1> 
      <button onClick={loadUsers}>Get data</button>

      <h2>Users:</h2>
      <ul>
        {/* <li>Name : Asif </li>
        <li>{users}</li> */}
        {users.map(({id,login,avatar_url})=>(
          <li key={id}> <b>Name:</b> {login} Avatar_var:<b>Avatar_var:</b>{avatar_url}</li>
        )
        )}
      </ul>
    </div>
  )
  
}
export default App;
 