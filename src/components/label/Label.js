import React  from "react";
import "./label.css";

function submit({type,placeHolder,onChange}){
return(<input className="submit" type={type} placeholder={placeHolder} onChange={onChange}/>
);

}
export default submit;