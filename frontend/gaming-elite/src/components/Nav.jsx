
import { Link } from "react-router-dom"

export default function Nav (){
    return(
    <nav>
    <ul>   
       
        <Link to="/"> Home </Link>

        <Link to="/consoles">  Consoles  </Link>
       
        <Link to="/accessories">  Accessories  </Link>
       
        <Link to="/games">  Games  </Link>

        <Link to="/retro">  Retro  </Link>
  
    </ul>
  </nav>
    )
}

