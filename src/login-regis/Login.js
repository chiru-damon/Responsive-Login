import { useRef } from 'react';
import './Login.css';

function Login(props) {
  const user=useRef(null);
  const pass=useRef(null);
  function states(e){
    e.preventDefault(); 
    if (user.current.value==="admin" && pass.current.value==="admin"){
      props.setLogin(true)
    }else{
      props.setLogin(!true)  
    }
  }
  return (<>
      <div className="form-container"  style={window.outerWidth<760?{width:'100%'}:{width:'47%'}}>
      
        <div className="form-header">
          Log in
          <div onClick={()=>{props.close(false)}}  ><img id="close" alt="" src={require('./close.png')}></img></div>
        </div>
        <form onSubmit={states}>
          <label htmlFor="user" >USERNAME </label>
          <input type="text" ref={user} id="user" placeholder="Username"/>
          <label htmlFor='pass' >PASSWORD</label>
          <input type="password" ref={pass} id="pass" placeholder="Password"/>
          <button type="submit">
          Submit
          </button>
        </form>
      </div></>
  );
}

export default Login;
