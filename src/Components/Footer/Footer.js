import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


class Footer extends React.Component
{
	 render(){
	 	 return (
	 	 		<div id="contactus" className="container footer-background" >
					 <h5 className="zar font-weight-bolder text-white" style={{fontSize: "25px",float: "right"}}>ارتباط با ما</h5>
					 <ul>
						  <li><span className="fa fa-envelope text-white"></span><b className="text-white">  1376mohammad.m@gmail.com</b></li>
						  <li><span className="fa fa-phone-square text-white" ></span><b className="text-white">  09016944578(جهت سفارش)</b></li>
					 </ul>
					 <ul>
						  <li><span className="fab fa-telegram text-white" ></span><b className="text-white"> <a href="https://t.me/ben_ygr/">تلگرام ما</a> </b></li>
						  <li><span className="fab fa-instagram text-white"></span><b className="text-white"><a href="https://www.instagram.com/ta_chi_ba_na_1/">اینستاگرام ما</a> </b></li>
					 </ul>
					 <ul>
						  {/* <li><span className="fab fa-linkedin text-dark"></span><b className="text-white">  @linkedinId</b></li> */}
					 </ul>
				</div>
		 );
	 }
}

export default Footer