import './componentStyle.css'
import { FaWhatsapp } from 'react-icons/fa';


function WhatsApp() {
    return(
        <>
           <a href='https://wa.me/5551999181403' target="_blank"  ><FaWhatsapp className="icon whatsapp" /></a>
        </>
    )
}

export default WhatsApp;