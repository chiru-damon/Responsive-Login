
import "./Regis.css"

export default function Registration(props){
    return(
      <div className="container"  style={window.outerWidth<760?{width:'100%'}:{width:'47%'}}>
      
        <div className="form-header">
          <>Registration</>
          <div onClick={()=>{props.close(false)} } ><img id="close" alt="" src={require('./close.png')}></img></div>
        </div>
        <form>
          <div>
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name"/>
          </div>
          <div>
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name"/>
          </div>
          <div>
            <label for="id">Id:</label>
            <input type="text" id="id" name="id"/>
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"/>
          </div>
          <button type="submit">Submit</button>
        </form>
        
      </div>

    )
}