import  React from "react";
import "./TachiSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Slide } from "react-slideshow-image";
import  pic1 from "./pictures/worksample/daya.jpg";
import  pic2 from "./pictures/worksample/casbinab3.png";
import  pic3 from "./pictures/worksample/ag4.jpg";
import  pic4  from "./pictures/worksample/dc.jpg";
import  pic5  from "./pictures/worksample/casbinab.jpg";
import  pic6  from "./pictures/worksample/IT.jpg";
import  pic7  from "./pictures/worksample/istafelez.jpg";
import pic8  from "./pictures/worksample/sheikh.jpg";


class  TachiSlider  extends  React.Component
{
	 constructor(props){
	 	 super(props);
	 	 this.state = {
	 	 	 slideImages: [
	 	 	 		pic1,
					 pic2,
					 pic3,
					 pic4,
					 pic5,
					 pic6,
					 pic7,
					 pic8
			 ],
			  properties: {
	 	 	 	 	duration: 5000,
				   transitionDuration: 500,
				   infinite: true,
				   indicators: true,
				   arrows: true,
				   onChange: (oldIndex,nextIndex) => {
	 	 	 	 		 console.log("slide transition from  ${oldIndex} to ${nextIndex}");
				   }
			  }
		 }
	 }

	 render()
	 {
	 	 return (
	 	 		<div className=" container hightlight-it" >
					 <Slide  properties={this.state.properties} >


						  {
						  	 this.state.slideImages.map(function(elem,index){
						  	 	return (
						  	 			<div  className="each-slide">
											 <div className="height-600px" style={{backgroundImage: "url(" + elem + ")"}} ></div>
											 {/* <span className="text-danger gerd come-center font-weight-bold">{index + 1}</span> */}
										</div>
								);
						  	})
						  }

					 </Slide>
				</div>
		 );
	 }

	 componentDidMount() {

	 }
}

export default  TachiSlider
