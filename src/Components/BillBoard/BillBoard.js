import  React  from "react";
import  "./BillBoard.css";
import  "bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.min.js";
import  "popper.js/dist/popper.min.js";
import  pic1  from "./images/worksample/gotze.jpg";
import  pic2  from "./images/worksample/marco1.png";
import  pic3  from  "./images/worksample/Double-Exposure.jpg";
import  "bootstrap/dist/css/bootstrap-grid.min.css";
// import  "E:/WebStorm/WebStorm-Projects/design-logo/node_modules/bootstrap/js/src/carousel.js";
import  $ from "jquery";
import  "jquery/dist/jquery.min.js";

class  BillBoard  extends  React.Component
{
	 render()
	 {
	 	 return (
				 <div id="billboard" className="container col-xs-12 col-sm-7 col-md-7 col-lg-6 carousel  slide bill-board animated fadeIn delay-1s"  data-ride="carousel">
					  {/*indicators*/}
					  <ul className="carousel-indicators">
						   <li data-target="#billboard" data-slide-to="0"  className="active"></li>
						   <li data-target="#billboard" data-slide-to="1"></li>
						   <li  data-target="#billboard" data-slide-to="2"></li>
					  </ul>

					  <div className="carousel-inner  h-100" role="listbox">
						   <div className="carousel-item active h-100  border  border-white border-right border-left">
								<img className="d-block  w-100  h-100 " src={pic1} alt="image1" />
								<div className="carousel-caption b-yekan font-italic font-weight-bold">
									 <h1 >Mario gotze</h1>
									 <p>طرح رنگ روغنی</p>
								</div>
						   </div>

						   <div className="carousel-item h-100  border  border-white border-left border-right">
								<img  className="d-block  w-100 h-100" alt="image2" src={pic2} />
								<div className="carousel-caption b-yekan font-italic font-weight-bold">
									 <h1 >مارکو رویس</h1>
									 <p>طرح اسپری</p>
								</div>
						   </div>

						   <div className="carousel-item h-100 border border-white border-left border-right">
								<img className="d-block  w-100  h-100  "  src={pic3} alt="image3" />
								<div className="carousel-caption b-yekan font-italic font-weight-bold">
									 <h1>Esteghlal Logo</h1>
									 <p>Double Exposure</p>
								</div>
						   </div>
					  </div>

					  {/*Controllers*/}
					  {/*prev*/}
					  <a className="carousel-control-prev" href="#billboard" role="button"  data-slide="prev">
						   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
						   <span className="sr-only">Previous</span>
					  </a>
					  {/*next*/}
					  <a className="carousel-control-next" href="#billboard" role="button" data-slide="next">
						   <span className="carousel-control-next-icon" aria-hidden="true"></span>
						   <span className="sr-only">Next</span>
					  </a>
				 </div>

		 );
	 }

	 componentDidMount() {
	 	 $("#billboard").carousel({
			  interval:  2800,
			  keyboard: true,
			  pause: "hover"
		 });
	 }
}

export default  BillBoard