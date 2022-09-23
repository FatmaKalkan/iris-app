
import "./App.css";
import Input  from "./components/input/Input";
import Button  from "./components/button/Button";
import Form from "./components/form/Form";
import { useState } from "react";

function App()
{
    const [user ,setUser]=useState({name:"",password:""})
    const handleChange=(e)=>{
        if(e.target.type==="text")
        {
           setUser({...user,name: e.target.value});
          console.log(user);
        }
        else
        {
            setUser({...user,password: e.target.value});
            console.log(user); 
        }
     
    }
return(
<div className="App">
<h2>Giriş Formu</h2>
<Form>
    <Input type={"text"}
    value={user.name}
     placeHolder={"Kullaıcı Ismi"}
     onChange={handleChange}/>
    <Input 
    type={"password"}
    value={user.password}
    placeHolder={"Şifre"}
    onChange={handleChange}/>
    <Button />
</Form>
</div>
);
}
export default App;