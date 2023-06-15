import './App.css'
import Github from "./components/Github";
import Instagram from "./components/Instagram";
import WhatsApp from "./components/WhatsApp"
import Linkedin from "./components/Linkedin";

function App() {
  return (
    <>
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
       </main>
      </>
  )
}

export default App
