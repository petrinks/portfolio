import './App.css'
import Github from "./components/Github";
import Instagram from "./components/Instagram";
import WhatsApp from "./components/WhatsApp"
import Linkedin from "./components/Linkedin";
import profilePhoto from "./assets/profile-pic.png";
import project1 from "./assets/project1.png";
import { IoIosMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { FaPlane } from "react-icons/fa";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaVirus } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [menuAtivo,setMenuAtivo] = useState(true)
  const [iconAtivo,setIconAtivo] = useState(false)
  const [lerMaisProject, setlerMaisProject ] = useState(true)
  const [mostrarMaisProjetos, setMostrarMaisProjetos] = useState(true)
 
  function trocarMenuAtivo() {
    setMenuAtivo(!menuAtivo)
    setIconAtivo(!iconAtivo)
  }

  function lerMaisProjeto() {
    setlerMaisProject(!lerMaisProject)
  }

  function mostrarMaisProjetosFunc() {
    setMostrarMaisProjetos(!mostrarMaisProjetos)
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

      <div className="primeira-impressao">
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
            <div className="me-img"><img src={profilePhoto} alt="" /></div>
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
      </div>


            <div className="container-sobremim-tempo">
               
                  <section className='container-sobremim'>
                  <h1>Sobre mim</h1>
                    <div className="content-p-sobremim">
                      <p>Sou um desenvolvedor front-end apaixonado pela arte de criar interfaces digitais cativantes e funcionais. Com minhas habilidades técnicas refinadas e meu olho aguçado para o design, me destaco ao transformar conceitos em experiências interativas e intuitivas.</p>
                      <p>Além da minha paixão pela programação, valorizo um estilo de vida saudável e ativo. A academia é uma parte essencial da minha rotina diária, pois sei que cuidar do meu corpo é fundamental para manter a mente afiada. O exercício físico não apenas fortalece meus músculos, mas também nutre meu cérebro com endorfinas e energia positiva, o que, por sua vez, impulsiona minha criatividade e foco no trabalho.</p>
                      <p>Minha dedicação em me manter em forma reflete-se na minha abordagem disciplinada e perseverante para solucionar desafios de programação. Assim como em meus treinos, supero obstáculos, busco constantemente aprender e me aprimorar, mantendo-me atualizado sobre as últimas tendências e tecnologias do mundo front-end.</p>
                      <p>No geral, sou um desenvolvedor front-end apaixonado e dedicado, cuja busca pela excelência técnica e bem-estar pessoal se entrelaçam, resultando em um profissional talentoso e equilibrado.</p> 
                    </div>
                 </section>
              <section className='container-tempo'>
                <div className="container-linha-tempo">
                  <div className="grid-linha">
                    <div className="circle-tempo"></div>
                  </div>
                  <div className="grid-linha">
                  <div className="circle-tempo"></div>
                  </div>
                  <div className="grid-linha">
                  <div className="circle-tempo"></div>
                  </div>
                  <div className="grid-linha">
                  <div className="circle-tempo"></div>
                  </div>
                </div>
                <div className="container-acontecimento-tempo">
                  <div className="grid-acontecimento">
                    <h1>Ainda existe muito a ser codificado</h1>
                  </div>
                  <div className="grid-acontecimento puc">
                    <h1>Graduação em Ciências da computação</h1>
                    <p>Em Breve</p>
                  </div>
                  <div className="grid-acontecimento alura">
                    <h1>Mergulhe em Tecnologia!</h1>
                    <p>Alura</p>
                    <p>2022 - 2023</p>
                  </div>
                  <div className="grid-acontecimento senac">
                    <h1>Ensino médio Técnico</h1>
                    <p>Desenvolvimento Web</p>
                    <p>2021 - 2023</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="container-projeto-main">
            
              {mostrarMaisProjetos ? (
                <div className="container-projetos">
                <h1>Projetos</h1>
                <div className="grid-projeto">
                <button className='button-oculto' onClick={mostrarMaisProjetosFunc}>Mostrar Mais</button>
                  <div className="grid-projeto-esquerda">
                    <h1>Projeto 1</h1>
                      <div className="box-p">
                        {lerMaisProject ? (
                           <p> at Hampden-Sydney College in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi deleniti ducimus porro voluptatibus ipsum sunt ut cupiditate .. <a className='saber-mais' 
                          onClick={lerMaisProjeto}>Ler mais</a></p>
                        )
                        : (
                          <p> at Hampden-Sydney College in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi deleniti ducimus porro voluptatibus ipsum sunt ut cupiditate Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ducimus. <a className='saber-mais' 
                          onClick={lerMaisProjeto}>Ler Menos</a></p>
                        )}
                      </div>
                      <p><a href="">Repositório do Projeto</a></p>
                      <div className="container-tecnologias">
                        <AiFillHtml5 />
                        <FaCss3Alt />
                        <FaReact />
                        <SiSass />
                      </div>
                  </div>
                  <div className="grid-projeto-direita">
                    <img src={project1} />
                  </div>   
                </div>
                </div>
              ) : (
              
                <div className="container-projetos-long">
              <h1>Projetos</h1>
                <div className="grid-projeto">
                  <div className="grid-projeto-esquerda">
                    <h1>Projeto 1</h1>
                      <div className="box-p">
                        {lerMaisProject ? (
                           <p> at Hampden-Sydney College in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi deleniti ducimus porro voluptatibus ipsum sunt ut cupiditate .. <a className='saber-mais' 
                          onClick={lerMaisProjeto}>Ler mais</a></p>
                        )
                        : (
                          <p> at Hampden-Sydney College in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi deleniti ducimus porro voluptatibus ipsum sunt ut cupiditate Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ducimus. <a className='saber-mais' 
                          onClick={lerMaisProjeto}>Ler Menos</a></p>
                        )}
                      </div>
                      <p><a href="">Repositório do Projeto</a></p>
                      <div className="container-tecnologias">
                        <AiFillHtml5 />
                        <FaCss3Alt />
                        <FaReact />
                        <SiSass />
                      </div>
                  </div>
                  <div className="grid-projeto-direita">
                    <img src={project1} />
                  </div>   
                </div>
                <div className="grid-projeto">
                <button  className='button-oculto' onClick={mostrarMaisProjetosFunc}>Mostrar Menos</button>
                  <div className="grid-projeto-esquerda">
                    <h1>Projeto 1</h1>
                      <div className="box-p">
                        {lerMaisProject ? (
                           <p> at Hampden-Sydney College in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi deleniti ducimus porro voluptatibus ipsum sunt ut cupiditate .. <a className='saber-mais' 
                          onClick={lerMaisProjeto}>Ler mais</a></p>
                        )
                        : (
                          <p> at Hampden-Sydney College in Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi deleniti ducimus porro voluptatibus ipsum sunt ut cupiditate Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ducimus. <a className='saber-mais' 
                          onClick={lerMaisProjeto}>Ler Menos</a></p>
                        )}
                      </div>
                      <p><a href="">Repositório do Projeto</a></p>
                      <div className="container-tecnologias">
                        <AiFillHtml5 />
                        <FaCss3Alt />
                        <FaReact />
                        <SiSass />
                      </div>
                  </div>
                  <div className="grid-projeto-direita">
                    <img src={project1} />
                  </div>  
                </div>
                </div>
             
              )}

            
          </div>
              {/* <div className="container-categorias">
                <div className="box">
                    <FaPlane />
                    <h1>Fluência em linguas Estrangeiras</h1>
                    <p>Já estou cursando inglês a 1 ano. Penso em futuramente fazer um intercâmbio para para aprimorar meu vocabulário.</p>
                </div>
                <div className="box">
                    <BsFillLightbulbFill />
                    <h1>Aprendizado Contínuo</h1>
                    <p>Gosto de estar sempre atualizado e aprender novas tecnologias e habilidades. Por isso, sempre procuro novas maneiras de expandir meu conhecimento </p>
                </div>
                <div className="box">
                    <FaVirus />
                    <h1>Linux, Kali Linux, Python</h1>
                    <p>Tenho conhecimento sobre Pentest, SQL Injection, técnicas avançadas de Denial of Service e outros tipos de ataques.</p>
                </div>
              </div> */}
        </main>
  </div>
  )
}

export default App

