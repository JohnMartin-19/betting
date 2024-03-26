import {React} from "react";
import './landing.css'
import phone from '../img/phone.png'
import Footer from "./Footer";
function LandingPage(){
    return(
        <div>
            
            <div className="container-fluid">
                
                <div className="row1">
                    <div className="column1">
                        <h1>
                            <br />
                            <br />
                            Aviator
                            <br />
                            <br />
                            Predictor Apk
                            
                        </h1>
                        <br />
                        <p>With Aviator Predictor, casino gaming becomes effortless and straightforward! Noew, you have full control over airplane movement via our app. Register and download our Predictor Aviator Bot apk for the Android Operating System.</p>
                        <br />
                        <button className="btn">Download v2.5.1(apk)</button>
                    </div>
                    <div className="column2">
                        <img className="phone" src={phone} alt="phone" />
                    </div>
                </div>
            </div>
            <br />
            <div className="container-fluid">
                
                <div className="row">
                    <div className="column">
                    <img className="phone2" src={phone} alt="phone" />
                    </div>
                    <div className="column4">
                        <h1 className="head">Reliable Predictions</h1>
                        <p> The Artificial Intelligence (AI) that underpins the Aviator Predictor app is designed to provide a reliable forecast of the plane's drop point with 99% accuracy. Utilizing the forecasts provided by the app, you can alter your life. https://aviatorpredict.com You need to execute simple steps for registration and app activation, then download the apk file for your mobile phone. Our Aviator Predictor Premium app supports mobile devices running on Android and iOS operating systems.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>

        </div>
        
    )
}
export default LandingPage