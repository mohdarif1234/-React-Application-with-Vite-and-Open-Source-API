import { Route, Routes } from "react-router-dom";
import Pokedex from "../Components/Pokedex/Pokedex";
import PokemonsDetails from "../Components/PokemonsDetails/PokemonsDetails";

function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:id" element={<PokemonsDetails />}/>
        </Routes>
    );
}

export default CustomRoutes;