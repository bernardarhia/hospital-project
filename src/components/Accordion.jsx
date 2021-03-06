import React,{useState} from "react"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
import {accordionContents} from "../content/accordionContent";
const Accordion = () => {
    const [toggleAccordionIcon, setToggleAccordionIcon] = useState(false)
  return (
    <div className="accordion">
      <div className="accordion__lists">
        {accordionContents.map((accordionContent, index)=>{
            return <div className="accordion__list" key={index}>
                <input type="checkbox" name="accordion" id={`accordion${index}`} onChange={()=>{
                    setToggleAccordionIcon(!toggleAccordionIcon)
                }} />
                 <label htmlFor={`accordion${index}`} className="head">
                    <span>{accordionContent.heading}</span>
                   { toggleAccordionIcon ? <RiArrowDropUpLine /> :< RiArrowDropDownLine />}
                    </label>
                <div className="content">
            <p>{accordionContent.content}</p>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Accordion