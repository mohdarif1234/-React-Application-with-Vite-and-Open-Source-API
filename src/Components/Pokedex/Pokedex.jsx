import PokimonList from '../PokimonList/PokimonList';
import Search from '../Seacrch/Search';
import './Pokedex.css'

function Pokedex() {

    return(
        <div className="pokedex-wrapper">
            
            <Search/>
            <PokimonList/>
        </div>
    )
}

export default Pokedex;