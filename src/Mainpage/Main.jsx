import React from 'react'
import { useNavigate } from 'react-router-dom'





function Main() {
  
  const navigate=useNavigate();
  
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Exam</title>
  <link rel="stylesheet" href="firr.css" />
  <div className="container">
    <nav className="navbar">
      <ul className="A">
        <img className="logo" src={`${process.env.PUBLIC_URL}/examlogo.png`} alt="Exam HElper" />
        <li className="a">
          <a  className="b" onClick={()=>navigate("/Home")}>
            Home
            
          </a>

        </li>
        <li className="a">
          <a className="b" onClick={()=>navigate("/About")}>
            About
          </a>
        </li>
        
        <li className="a">
          <a className="b" onClick={()=>navigate("/Contact")}>
            <a id='cde'>Contact Us</a>
          </a>
        </li>
        <li className="a">
          <a className="b" onClick={()=>navigate("/Login")}>
            <a id='def'>Login</a>
          </a>
        </li>
      </ul>
    </nav>

    <div className="cir">
      <a className="circulum" href={`${process.env.PUBLIC_URL}/R23 cir.pdf`} download="R23 cir.pdf">
        Click Here Download R23 CSM Circulum
      </a>
    </div>
    <div className="mainsection">
      <div className="e">
        CSM 2-1 Mid 1 Papers
        <br />
        <br />
        <a className="f" href={`${process.env.PUBLIC_URL}/csm mid1.pdf`} download="CSM 2-1 mid1 Papers">
          Download
        </a>
      </div>
      <div className="g">
        CSM 2-1 Mid 2 Papers
        <br />
        <br />
        <a className="f" href={`${process.env.PUBLIC_URL}/csm mid2.pdf`}download="CSM 2-1 mid2 Papers">
          Download
        </a>
      </div>
      <div className="c">
        CSM 2-1 SEM Papers
        <br />
        <br />
        <a
          className="d"
          href={`${process.env.PUBLIC_URL}/QUESTIONS SEM1.pdf`}
          download="CSM 2-1 QUESTION Papers"
        >
          Download
        </a>
      </div>
      
      <div className="c">
        MATH NOTES
        <br />
        <br />
        <a className="d" href={`${process.env.PUBLIC_URL}/MATHNotes.pdf`} download="Math Notes">
          Download
        </a>
      </div>
      
          <div className="c">
        JAVA NOTES
        <br />
        <br />
        <a className="d" href={`${process.env.PUBLIC_URL}/Java.pdf`} download="Java Notes">
          Download
        </a>
      </div>
      <div className="c">
        UHV NOTES
        <br />
        <br />
        <a className="d" href={`${process.env.PUBLIC_URL}/UHv.notes.pdf`} download="UHV Notes">
          Download
        </a>
      </div>
      <div className="c">
        ADSA NOTES
        <br />
        <br />
        <a className="d" href={`${process.env.PUBLIC_URL}/Adsanotes.pdf`} download="ADSA Notes">
          Download
        </a>
      </div>
      <div className="c">
        AI NOTES
        <br />
        <br />
        <a className="d" href={`${process.env.PUBLIC_URL}/Ai notes.pdf`} download="AI Notes">
          Download
        </a>
      </div>
      <div className="c">
        AI NOTES
        <br />
        <br />
        <a className="d" href={`${process.env.PUBLIC_URL}/Ai notes.pdf`} download="AI Notes">
          Download
        </a>
      </div>
     
  
    
    </div>
  </div>
</>

    </div>
  )
}

export default Main

