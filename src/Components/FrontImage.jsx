import React from "react";


function FrontImage() {
    return (
        <>
            <div>
                <img className="front-img" src="/images/Page_images/FrontPageIMG.jpg" alt="" />
            </div>

            <div className="slide-boxes">
                <div>
                    <button>Om os</button>
                    <button>Bestil fremvisning</button>
                </div>
            </div>

            <div className="outer-box">
                <div className="inner-box">
                    <div className="inner-box-item">
                        <img src="/images/Page_images/box-båd.jpg" alt="Både Image" className="box-image" />
                        <h3 className="center-text">Både</h3>
                        <button className="new-btn">Nye Både</button>
                        <button className="used-btn">Brugte Både</button>
                    </div>
                    <div className="inner-box-item">
                        <img src="/images/Page_images/box-motor.jpg" alt="Motor Image" className="box-image" />
                        <h3 className="center-text">Motor</h3>
                        <button className="new-btn">Nye Motor</button>
                        <button className="used-btn">Brugte Motor</button>
                    </div>
                    <div className="inner-box-item">
                        <img src="/images/Page_images/box-tilbehør.jpg" alt="Tilbehør Image" className="box-image" />
                        <h3 className="center-text">Tilbehør</h3>
                        <button className="new-btn">Se Tilbehør</button>
                        <button className="used-btn">Katalog</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FrontImage;