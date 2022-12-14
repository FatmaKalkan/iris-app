
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
     const handleClick = () => {
        if(user.name==="")
        {
            alert("Kullanıcı adı boş");
        }
        else if(user.password==="")
        {
            alert("Şifre boş");
        }
        else{
            alert("Başarılı");
        }
    }
return(
<div className="App">
<h2></h2>
<Form>
    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    <Input type={"text"}
    value={user.name}
     placeHolder={"Kullaıcı Ismi"}
     onChange={handleChange}/>
    <Input 
    type={"password"}
    value={user.password}
    placeHolder={"Şifre"}
    onChange={handleChange}/>
    {/* <Button onClick={()=>{alert();}} /> */}
    <a href="#">Forgot your password?</a>
    <></>
    <h2></h2>
    <Button onClick={handleClick} />
</Form>
</div>
);
}
export default App;