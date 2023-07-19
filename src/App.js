
import { useState } from 'react'
import "./App.css"
import Home from './login-regis/Home'
import Page from './login-regis/Page'


function App(){
    const [login,setLogin]=useState(false)
    return(<>{login?<Page login={login} setLogin={setLogin}/>:<Home login={login} setLogin={setLogin}/>}
    </>
    )
};

export default App;