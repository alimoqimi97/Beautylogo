import React from "react";
import "./CustomPage.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";

class CustomPage extends React.Component
{
	 render(){
	 	 return (
	 	 		<div>
					 <div><a href="@ta_chi_ba_na_1" className="fab fa-instagram"></a></div>
					 <div><a href="@ben_ygr" className="fab fa-telegram"></a></div>
					 <div><a href="1376mohammad.m@gmail.com" className="fa fa-envelope"></a></div>
					 <div><a href="" className="fab fa-linkedin"></a></div>
					 <div><span className="fa fa-phone-square">09016944578</span></div>
				</div>
		 );
	 }
}

export default CustomPage