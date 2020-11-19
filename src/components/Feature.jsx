import React from 'react'
import{featureOne, featureTwo} from "../content/featuresContent";
import mask from '../images/mask.png'
import mask2 from '../images/2.png'
import check from '../images/check-circle.png'
import small from '../images/data.png'
const Feature = () => {
    return (
        <div className="features">
            <div className="feature__one">
                <div className="content">
                    <p className="heading">Online booking process for patients</p>
                   <ul className="lists">
                   {featureOne.map((text, index)=>{
                        return <div className="list"><img src={check} alt=""/><li key={index}>{text.text}</li></div>
                    })}
                   </ul>
                </div>

                <div className="showcase">
                    <div className="head__img">
                        <img src={mask} alt=""/>
                    </div>
                        <div className="small__img">
                            <img src={small} alt=""/>
                        </div>
                        <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default Feature
