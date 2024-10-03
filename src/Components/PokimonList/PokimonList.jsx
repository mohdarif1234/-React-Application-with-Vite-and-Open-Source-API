
import './PokimonList.css';
import Pokemon from '../Pokemon/Pokemon.jsx';
import Loading from '../Loading/Loading.jsx';
import usePokimonList from './usePokimonList.jsx';

function PokimonList(){

    const [PokimonListState, setPokimonListState] = usePokimonList(false);

    return(
        <div className='pokimon-list-wrapper'>
            <div className='controls'>
            <button disabled={PokimonListState.prevUrl == undefined} onClick={() => setPokimonListState((state) => ({...state, pokedexurl: PokimonListState.prevUrl}))}>Prev</button>
            <button disabled={PokimonListState.nextUrl == undefined} onClick={() => setPokimonListState((state) => ({...state, pokedexurl: PokimonListState.nextUrl}))}>Next</button>
            </div>
            <div className='pokemon-wrapper'>
            {
                (PokimonListState.isLoading )? <Loading/> : PokimonListState.pokimonList.map((p) => <Pokemon name={p.name}  image={p.image} key={p.id} id={p.id}/>)
            }
            </div>

            <div className='controls'>
            <button disabled={PokimonListState.prevUrl == undefined} onClick={() => setPokimonListState((state) => ({...state, pokedexurl: PokimonListState.prevUrl}))}>Prev</button>
            <button disabled={PokimonListState.nextUrl == undefined} onClick={() => setPokimonListState((state) => ({...state, pokedexurl: PokimonListState.nextUrl}))}>Next</button>
            </div>
        </div>
    )
}

export default PokimonList; 