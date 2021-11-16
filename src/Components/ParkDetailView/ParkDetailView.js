import './ParkDetailView.css'
import {useEffect, useState} from "react";
import Information from "./Information/Information";
import ParkPlaces from "./ParkPlaces/ParkPlaces";
import Weather from "./Weather/Weather";
import DetailHeader from "./DetailHeader/DetailHeader";
import axios from "axios";

const ParkDetailView = ({park, api_key}) => {
    let [information, setInformation] = useState(false);
    let [weather, setWeather] = useState(false);
    let [alert, setAlert] = useState(false);
    let [weatherData, setWeatherData] = useState([]);

    const weatherApiKey = '6d39fcf6fbcb4fa9afc213955211011';
    useEffect(()=>{
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${park.addresses[0].postalCode}`)
            .then(result =>{
                setWeatherData(result.data);
            })
    }, [park, api_key])

    return (
        <div className='page'>
            <div className='header-container'>
                <DetailHeader
                    park={park}
                    alert={alert}
                    setAlert={setAlert}
                    information={information}
                    setInformation={setInformation}
                    weather={weather}
                    setWeather={setWeather}
                />
            </div>
            {
                information ?
                    <Information park={park}/>:
                    <div className='detail-container'>
                        <section className='detail-title'>
                            <h1 className='detail-title'>{park.fullName}</h1>
                            <p className='detail-description'>{park.description}</p>
                        </section>
                        <section className='places-container'>
                            <ParkPlaces parkId={park.parkCode} api_key={api_key}/>
                        </section>
                    </div>
            }
            {
                weather ?
                    <Weather weather = {weatherData}/> :
                    null
            }
        </div>
    )
}
export default ParkDetailView;