import { useState, useEffect } from "react";
import  axios  from "axios";
import usePokimonList from "./usePokimonList";


function usePokimonDetails(id){
    const [pokemon, setpokimon] = useState({})
    let PokimonListHookResponse = [];
     
    async function downloadPokemons() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response);
        

        setpokimon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default, 
            weight: response.data.weight,
            height: response.data.height,
            types : response.data.types.map((t) => t.type.name)
        });

        setPokimonListState({...PokimonListState, type : response.data.types ? response.data.types[0].type.name : ""})
    }
    const [PokimonListState, setPokimonListState]= usePokimonList();


    useEffect(() => {
        downloadPokemons();
        console.log("list" , pokemon.types, PokimonListState);    
    }, []);

    return [pokemon, PokimonListState];
}

export default usePokimonDetails;