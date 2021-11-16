import './App.css';
import Header from "./Components/Header/Header";
import Parks from "./Components/Parks/Parks";
import {useEffect, useState} from "react";
import axios from "axios";
import ParkDetailView from "./Components/ParkDetailView/ParkDetailView";
import Footer from "./Components/Footer/Footer";

function App() {
    let [parks, setParks] = useState([]);
    let [park, setPark] = useState({});
    let [parkDetailView, setParkDetailView] = useState(false);

    const api_key = 'iniKRKvvMTdJxnoq7Akeftrbwxqpwx0LwhtPuFOF';

    useEffect(() => {
        let indexStart = Math.floor(Math.random() * (460 + 1));
        axios.get(`https://developer.nps.gov/api/v1/parks?limit=5&start=${indexStart}&api_key=${api_key}`)
            .then(result => {
                setParks(result.data.data);
            })
    }, [])

    const getSelectParks = (stateAbbreviation) => {
        axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateAbbreviation}&api_key=${api_key}`)
            .then(result => {
                setParks(result.data.data);
            })
    }
    const setDetailView = (id) => {
        setParkDetailView(true);
        const result = parks.find((park) => park.parkCode === id)
        setPark(result);
    }

    return (
        <div className='background'>
            <Header getSelectParks={getSelectParks}/>
            {
                parkDetailView ?
                    <ParkDetailView park={park} api_key={api_key}/> :
                    <Parks parks={parks} detailView={setDetailView}/>
            }
            <Footer />
        </div>
    );
}

export default App;
