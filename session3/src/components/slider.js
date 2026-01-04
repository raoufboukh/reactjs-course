import { useEffect, useState } from "react";
import './navbar.css';
import Image1 from './image-launch-vehicle-landscape.jpg';
import Image2 from './image-space-capsule-landscape.jpg';
import Image3 from './image-spaceport-landscape.jpg';
function Slider(){
    const [next,setNext] = useState(1);
    return(
        <>
            <div className="slider">
                <div className={1 === next ? null : 'disable'}>
                    <img src={Image1}/>
                </div>
                <div className={2 === next ? null : 'disable'}>
                    <img src={Image2}/>
                </div>
                <div className={3 === next ? null : 'disable'}>
                    <img src={Image3}/>
                </div>
                <i className="fa-duotone fa-solid fa-chevron-right" onClick={() => {
                    if(next === 3){
                        setNext(1);
                    }else{
                        setNext(next + 1);
                    }
                }}></i>
                <i className="fa-duotone fa-solid fa-chevron-left" onClick={() => {
                    if(next === 1){
                        setNext(3);
                    }else{
                        setNext(next - 1);
                    }
                }}></i>

            </div>
        </>
    )
}

export default Slider;