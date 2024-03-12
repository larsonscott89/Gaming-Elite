
import { Link } from "react-router-dom"

export default function Nav (){
    return(
      <nav>
        <ul className="nav-items">   
        
          {/* <Link to="/"> Home </Link> */}

          <Link to="/consoles">  Consoles  </Link>
          <hr className="nav-divider" />
          <Link to="/games">  Games  </Link>
          <hr className="nav-divider" />
          <Link to="/accessories">  Accessories  </Link>
          <hr className="nav-divider" />
          <Link to="/retro">  Retro  </Link>
    
        </ul>
      </nav>
    )
}

