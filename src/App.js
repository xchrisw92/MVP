import './App.css';
import Header from "./Components/Header/Header";
import Parks from "./Components/Parks/Parks";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    let [parks, setParks] = useState([]);

    const api_key = 'iniKRKvvMTdJxnoq7Akeftrbwxqpwx0LwhtPuFOF';

    useEffect(() =>{
        let indexStart = Math.floor(Math.random() * (460+1));
        axios.get(`https://developer.nps.gov/api/v1/parks?limit=5&start=${indexStart}&api_key=${api_key}`)
            .then(result =>{
                setParks(result.data.data);
            })
    }, [])

    const getSelectParks = (stateAbbreviation) =>{
        axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbreviation}&api_key=${api_key}`)
            .then(result =>{
                setParks(result.data.data);
            })
    }

    return (
        <div className='page'>
                <Header getSelectParks={getSelectParks}/>
                <Parks parks={parks}/>
        </div>
    );
}

export default App;
