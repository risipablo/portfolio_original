
import { useEffect, useState } from "react";
import { animateScroll as scroll} from "react-scroll";
import "../style/scrollTop.css"
import sun from "../assets/images/icons/sun.png"

export function ScrollTop(){

    const [visible, setVisible] = useState(false)


    const onClickUp = () => {
        scroll.scrollToTop();
     }

     const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight / 2) {
            setVisible(true)
        } else {
            setVisible(false)
        }
     }

     useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return() => {
            window.removeEventListener('scroll',toggleVisibility)
        }
     },[])



     return(
        <button onClick={onClickUp}   style={{ display: visible ? 'block' : 'none' }} className="btn-volver-arriba">
             <img src={sun} alt="sun" />
        </button>
     )
}