import React from "react";
import { useNavigate } from "react-router-dom";
export const Examples=()=> {
    const navigate=useNavigate();
  return (
    <div className="examples">
     <img  className="resume1" src="resume1.png"/> 
     <img  className="resume2" src="resume2.webp"/> 
     <img  className="resume3" src="resume3.webp"/> 
     <img  className="resume4" src="resume4.webp"/> 
     <img  className="resume5" src="resume5.jpg"/> 
     <button className='buttonexp' type="submit" onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
}
export default Examples;