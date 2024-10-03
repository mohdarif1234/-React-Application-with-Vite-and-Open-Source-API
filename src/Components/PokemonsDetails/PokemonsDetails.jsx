import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokimonsDetails.css'
import PokimonList from "../PokimonList/PokimonList";
import usePokimonList from "../PokimonList/usePokimonList";
import usePokimonDetails from "../PokimonList/usePokimonDetails";

function PokemonsDetails(){
    const {id} = useParams();
    const [pokemon, pokemonListState] = usePokimonDetails(id);
    
    return (
        <div className="main">
        <div className="pokimon-details-wrapper">
        <div className="pokemon-details-names">{pokemon.name}</div>
        <div className="pokemon-content">
            <div className="pokemon-details-image"><img src={pokemon.image}/></div>
            <div className="Content">
                <div className="pokemon-details-weight font-style">weight: {pokemon.weight} kg</div>
                <div className="pokimon-details-height font-style">height: {pokemon.height} m</div>
                <div className="pokimon-details-types font-style"> {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}</div>   
            </div>
        </div>
        </div>
        {
            pokemon.types && pokemonListState.pokemonList && 
            <div>
                more {pokemon.types} type pokemons
                <ul>
                pokemonListState.PokimonList.map((p) => <li key={id}>{}</li>)
                </ul>
            </div>
        }
        </div>
        
    )
}

export default PokemonsDetails;