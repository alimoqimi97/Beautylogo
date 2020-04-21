import React from "react";
import "./BedPlate.css";

class  BedPlate extends  React.Component
{
	 render()
	 {
	 	 return (
	 	 		<div className="container col col-lg-2  bedplate-style animated fadeInLeft delay-2s">
					 <img className="img-fluid bp-img-size mx-auto  d-block animated fadeIn delay-3s" src={this.props.imgSrc} alt="bedplate-image" />
					 <h1 className="text-center text-white font-20px b-yekan font-italic font-weight-bold ">{this.props.title}</h1>
					 <p className="text-center text-dark b-yekan-font  font-weight-bold "> {this.props.elaboration} </p>
					 <a id="more" className="float-right align-text-bottom text-decoration-none text-white" href={this.props.moreInfo}>More... </a>
				</div>
		 );
	 }
}

export default BedPlate