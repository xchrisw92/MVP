import {useEffect, useState} from "react";
import axios from "axios";
import './ParkPlaces.css'

const ParkPlaces = ({parkId, api_key}) => {
    let [places, setPlaces] = useState([]);



    function checkImageArray() {
        if(places[0].images[0] !== null){
            return true;
        } else return false;
    }

    useEffect(() => {
        axios.get(`https://developer.nps.gov/api/v1/places?parkCode=${parkId}&api_key=${api_key}`)
            .then(result => {
                setPlaces(result.data.data);
            })
    }, [parkId, api_key])


    return (
        places.map(place => {
            return (
                <div key={place.id} className='places-holder'>
                    <img
                        className='image'
                        src={checkImageArray() ?
                            place.images[0].url:
                            'https://placekitten.com/640/360'
                        }
                        alt='placeholder'
                    />
                    <h3 className='caption'>{place.title}</h3>
                </div>

            )
        })
    )
}
export default ParkPlaces;