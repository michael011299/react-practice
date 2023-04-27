import { useState } from "react";

const Login = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
   
        const printValues = e => {
            e.preventDefault();
            setUsername('')
            setPassword('')
        };

        const pass = (e) => {
            setPassword(e.target.value)
            console.log("pass : " + password)
           
        }

        const user = (e) => {
            
            setUsername(e.target.value)
            console.log("username : " + username)
             
        }
         

   
        return(
            <>
                <form onSubmit={printValues}>
                <label> Username:</label>
                    <input name="username" 
                    type="text" 
                    value={username} 
                    onChange={user}/>
   
                <label> Password: </label>
                    <input type="password"
                    name="password"
                    value={password}
                    onChange={pass}/>
                <br/>
                <button>Submit</button>
                </form>
            </>
        );
}

export default Login;