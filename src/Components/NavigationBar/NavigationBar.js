import  React  from  "react";
import  "./NavigationBar.css";
// import  "node_modules/bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/css/bootstrap.min.css";
import  "./Animate.css";
// import  "./cssanimation.min.css";
// import  "./letteranimation.min";

class  NavigationBar  extends   React.Component
{
    render() {
        return (
            <nav className="container navbar  navbar-expand-sm  nav-styles  nav-fixed-position  animated  fadeInDown  hight-priority">
				 <a className="navbar-brand text-white navbar-text animated  slideInDown delay-5s" href="#"><img src="" alt="" /></a>
                    <ul className="navbar-nav  absolute-position  stick-to-right">
                        <li className="nav-item"><a className="nav-link  b-yekan-font ease-nav-link  animated  bounceIn delay-4s" href="#contactus">تماس با ما</a></li>
                        <li className="nav-item"><a className="nav-link  b-yekan-font  ease-nav-link animated bounceIn delay-3s" href="#">نمونه کارها</a></li>
                        <li className="nav-item"><a className="nav-link  b-yekan-font  ease-nav-link  animated bounceIn  delay-2s" href="#contactus">سفارش  لوگو</a></li>
                        <li className="nav-item"><a className="nav-link  b-yekan-font  ease-nav-link  animated  bounceIn delay-1s" href="https://beautylogo.ir/">خانه</a></li>
                    </ul>
            </nav>
        );
    }
}

export default  NavigationBar