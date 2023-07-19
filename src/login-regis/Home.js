import "./Home.css"
import Login from "./Login"
import { useState } from "react"
import Modal from "react-modal"
import Registration from "./Regis"
import Happy from "./Happy"

Modal.setAppElement("#root")

export default function Home({login,setLogin}){
    const [islogin,setlogin] = useState(false)
    const [isregis,setregis] = useState(false)
    const mystyle={
        overlay:{
            backgroundColor:'grey'
        },
        content:{
            display:'flex',
            justifyContent:'stretch',
            width:"90%",
            margin:"0 auto",
            borderRadius:"20px",
            padding:'0',
            flexWrap:'wrap'
        }
    }
    return (
        <>
        <nav>
            <h1>Quiz</h1>
            <ul>
                <li>
                <button onClick={()=>{setlogin(true)}}>
                    Login
                </button>
                </li>
                <li>
                <button onClick={()=>{setregis(true)}}>
                    Registration
                </button>
                </li>
            </ul>
        </nav>
        <Modal 
            isOpen={islogin}
            onRequestClose={()=>{setlogin(false)}}
            style={mystyle}>
            <Happy/>
            <Login login={login} setLogin={setLogin} close={setlogin}/>
        </Modal>
        <Modal 
            isOpen={isregis}             
            onRequestClose={()=>{setregis(false)}}
            style={mystyle}>
            <Happy/>
            <Registration close={setregis}/>
        </Modal>
        </>
    )
}