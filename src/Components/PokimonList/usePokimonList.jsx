import {useEffect, useState} from 'react';
import axios from 'axios';

function usePokimonList(url, type){
    const [PokimonListState, setPokimonListState] = useState({
        pokimonList : [],
        isLoading : true,
        pokedexurl : 'https://pokeapi.co/api/v2/pokemon', 
        nextUrl : '',
        prevUrl : '',
        type : ''
    })

    async function downloadPokemons(){
       
        // console.log(PokimonListState);
        

        //Then pass data to Map and extrect data from url from pokimonResults and save in pokimonResultsPromise
        if (PokimonListState.type) { 
            const response = await axios.get(`https://pokeapi.co/api/v2/type/${PokimonListState.type}`);

            setPokimonListState((state) => 
                ({
                ...state, 
                pokimonList : response.data.pokemon
            }));
            
        }else{
            setPokimonListState({...PokimonListState, isLoading: true}); // setIsLoading(true);
            //Feching data from url
            const response = await axios.get(PokimonListState.pokedexurl);
            // console.log("response data",response.data.pokemon);
            
            //feching result from data 
            const pokimonResults = response.data.results;
            // console.log(pokimonResults);
    
            
            setPokimonListState((state) => 
                ({
                ...state, 
                nextUrl: response.data.next,
                prevUrl: response.data.previous
            }));
            const pokimonResultsPromise = pokimonResults.map((pokemon) => axios.get(pokemon.url));
            // console.log(pokimonResultsPromise);
     
            //passes the promise araay to exios all
            const pokemonData =await axios.all(pokimonResultsPromise);
            // console.log(pokemonData);
    
            const pokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other.dream_world.front_default,
                    types: pokemon.types
                }
            });

        
    
            // setPokimonList(res);
            setPokimonListState((state) => ({
                ...state,
                pokimonList: pokeListResult,
                isLoading: false
            }));
        }
        
        // console.log(pokeListResult)
        
        
      // setIsLoading(false)
    }

    useEffect(() => {
        downloadPokemons();
    },[PokimonListState.pokedexurl]);

    return [PokimonListState, setPokimonListState]

}

export default usePokimonList;