import {React} from "react";
import './landing.css'
import phone from '../img/phone.png'
import phone2 from '../img/phone2.png'
import phone3 from '../img/phone3.png'
import phone4 from'../img/phone4.png'
import Footer from "./Footer";
function LandingPage(){
    return(
        <div>
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
                        <button className="btn-btn">Download v2.5.1(apk)</button>
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
                    <img className="phone2" src={phone2} alt="phone" />
                    </div>
                    <div className="column4">
                        <h1 >Reliable Predictions</h1>
                        <br />
                        <p> The Artificial Intelligence (AI) that underpins the Aviator Predictor app is designed to provide a reliable forecast of the plane's drop point with 99% accuracy. Utilizing the forecasts provided by the app, you can alter your life. https://aviatorpredict.com You need to execute simple steps for registration and app activation, then download the apk file for your mobile phone. Our Aviator Predictor Premium app supports mobile devices running on Android and iOS operating systems.
                        </p>
                        <br />
                        <button className="btn">Download apk</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="container-fluid">
                
                <div className="row">
                <div className="column4">
                        <h1 >Steady Earnings</h1>
                        <br />
                        <p> By using the forecast provided by our Aviator Predictor Hack, you can earn daily profits of upto 100% per day from the amount of your deposit. To avoid issues such as account suspension or payout hold, you should strictly adhere to the rules and regulations which we will explain during the regiatration process. We strongly recommend that you familiarize yourself with the documentation before using the app. For beginner, we recommend you start by playing the demo version of Aviator.
                        </p>
                        <br />
                        <button className="btn">Download hack</button>
                    </div>
                    <div className="column">
                    <img className="phone2" src={phone3} alt="phone" />
                    </div>
                </div>
            </div>

            <br />
            <div className="container-fluid">
                
                <div className="row">
                    <div className="column">
                    <img className="phone2" src={phone4} alt="phone" />
                    </div>
                    <div className="column4">
                        <h1 >Safe Usage Scheme</h1>
                        <br />
                        <p> You need to follow the rules and strictly adhere to the instructions for using the application. For these purposes, we limit the operations for the Predictor Aviator app for new users. More detailed information about the scheme to adhere to is available on our website.
                        </p>
                        <br />
                        <button className="btn">Download app</button>
                    </div>
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