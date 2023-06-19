import './App.css'
import Github from "./components/Github";
import Instagram from "./components/Instagram";
import WhatsApp from "./components/WhatsApp"
import Linkedin from "./components/Linkedin";
import { IoIosMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { useState } from "react";

function App() {
  const [menuAtivo,setMenuAtivo] = useState(true)
  const [iconAtivo,setIconAtivo] = useState(false)

  // function trocarIconAtivo() {
  //   console.log("teste")
  // }

  function trocarMenuAtivo() {
    setMenuAtivo(!menuAtivo)
    setIconAtivo(!iconAtivo)
  }

  
  return (
  <div className='body-div'>
      
     {menuAtivo ? (
            null
          ) : (
            <>
            <div className="mobile-menu">
              <div className="header-mobile-menu">
                  <TfiClose className="menu-mobile-icon" onClick={trocarMenuAtivo}/>
                </div>
                <div className="mobile-menu-navbar">
                  <p><a href="#">Sobre mim</a></p>
                  <p><a href="#">Projetos</a></p>
                  <p><a href="#">Habilidades</a></p>
                  <p><a href="#">Contato</a></p>
                </div>
              </div>
            </>
            )}
        <div className="animation-container">
      <div className="lightning-container">
        <div className="lightning white"></div>
        <div className="lightning red"></div>
      </div>
      <div className="boom-container">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape triangle big yellow"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      <div className="boom-container second">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
    </div>
     <main>
          <header>
            <div> 
              <h1>Pedro Castello</h1>
            </div>
            <div className="navbar">
              <p><a href="#">Sobre mim</a></p>
              <p><a href="#">Projetos</a></p>
              <p><a href="#">Habilidades</a></p>
              <p><a href="#">Contato</a></p>
            </div>
            {/* MENU RETRATIL */}
            {iconAtivo ? (null) : ( 
            <div className="navbar-retratil" >
              <IoIosMenu className="icon" onClick={trocarMenuAtivo} />
            </div>)}       
          </header>
          <div className="me">
            <div className="me-img"><img src="./public/profile-pic.png" alt="" /></div>
            <div className="me-dev-social">
              <h1>Desenvolvedor Front End | 18y</h1>
              <div className="me-social">
                <Github />
                <WhatsApp />
                <Linkedin />
                <Instagram />
              </div>
            </div>
          </div>
            <div className="skills-container">
              <IoLogoJavascript />
              <TbBrandTypescript />
              <AiFillHtml5 />
              <FaCss3Alt />
              <FaReact />
              <SiSass />
              <CgFigma />
            </div>
        </main>
  </div>
  )
}

export default App

