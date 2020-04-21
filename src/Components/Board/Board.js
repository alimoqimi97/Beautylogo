import React from "react";
import BedPlate from "../BedPlate/BedPlate.js";
import "bootstrap/dist/css/bootstrap.min.css";
import tSrc from "D:/c++/worksample/Eden-hazard.jpg";
import mockup  from "D:/c++/worksample/ssw8-gold.jpg";
import nameSrc from "D:/c++/worksample/typo.jpg";
import corp from "D:/c++/worksample/daya.jpg";
import "./Board.css";

class Board extends  React.Component
{
	 render() {
	 	 let  desArray = [" typography "," mockup ","","corporationLogo description"];
	 	 let  linkArray = [ "typolink","mockup link","nameW link","corplink"];

	 	 return (
	 	 		<div className="container board-style  w-100 ">
					 {/*<hr/>*/}
					 {/* <h5 className=" container font-italic text-md-center  font-weight-bolder  text-danger bg-light margin-top-20px animated fadeInDown delay-2s zar title-border-style" >توانایی های ما</h5> */}
					 <div className="row board-row" >
						  <BedPlate  imgSrc={tSrc}  title="تایپوگرافی" elaboration={desArray[0]} moreInfo = {linkArray[0]}/>
						  <BedPlate  imgSrc={mockup}  title="موکاپ لوگو" elaboration={desArray[1]} moreInfo={linkArray[1]} />
						  <BedPlate  imgSrc={nameSrc}  title="اسم نوشته" elaboration={desArray[2]}  moreInfo={linkArray[2]} />
						  <BedPlate imgSrc={corp}  title="لوگوی شرکتی" elaboration={desArray[3]} moreInfo={linkArray[3]} />
					 </div>
				</div>
		 );
	 }
}

export default  Board