import { Link } from "react-router-dom";
import "./Pokemon.css"

function Pokemon({name, image, id}){
    return (
    
        <Link to={`/pokemon/${id}`}>
        <div className="pokemon">
            
            <div className="name">{name}</div>
            {/* <div className="name">{name}</div> */}
            <div>
                <img className="pokimon-image" src={image}/>
            </div>
             
        </div>
        </Link> 
    )
}

export default Pokemon;