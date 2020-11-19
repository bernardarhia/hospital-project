import React,{useEffect, useState} from 'react'

const Hero = () => {
    const [url, setUrl] = useState('')
    useEffect(()=>{
        const currentUrl = window.location.href.split('/');
        let path = currentUrl[currentUrl.length - 1];
        if(path === ''){
           path = 'Home'
        }
        const pathName = path[0].toUpperCase() + path.slice(1)
        setUrl(pathName);
    },[])
    return (
        <div className="hero">
             <div className="hero__content">
                <div className="heading">
                    {url}
                </div>
                </div> 
        </div>
    )
}

export default Hero
