import './componentStyle.css'
import { VscGithub } from 'react-icons/vsc';


function Github() {
    
    return(
        <>
            <a href='https://github.com/petrinks' target="_blank"  ><VscGithub  className="github" /></a>
        </>
    )
}

export default Github;