import React from "react";
import "./AdvertisePlace.css";
import "bootstrap/dist/css/bootstrap.min.css";

class AdvertisePlace extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            Top: this.props.Top,
            Left: this.props.Left,
            Width: this.props.Width,
            Height: this.props.Height
        }
    }
    render(){
        return(
            <div className="zar adv-background adv-place-style col-md-2 col-sm-1 col-lg-12" >
                <p className="animated fadeIn infinite">اینجا جای تبلیغات شماست</p>
            </div>
        );
    }
}

export default AdvertisePlace