import './Header.css';
import {HiMap, HiSearch} from "react-icons/hi";
import {IconContext} from "react-icons";
import {useState} from "react";
import {Hint} from "react-autocomplete-hint";


const Header = ({getSelectParks}) => {
    let [explore, setExplore] = useState(false);
    let [input, setInput] = useState('');

    const states = ["Alabama", "Alaska",  "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia",
        "Delaware", "Florida", "Georgia", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas",
        "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi",
        "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada",
        "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin",
        "West Virginia", "Wyoming"];

    const stateCodes = {
        "Alabama": "AL", "Alaska": "AK", "American Samoa": "AS", "Arizona": "AZ", "Arkansas": "AR", "California": "CA",
        "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE", "District Of Columbia": "DC", "Florida": "FL",
        "Georgia": "GA", "Guam": "GU", "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA",
        "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD", "Massachusetts": "MA",
        "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO", "Montana": "MT", "Nebraska": "NE",
        "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
        "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK", "Oregon": "OR",
        "Pennsylvania": "PA", "Puerto Rico": "PR", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD",
        "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT", "Virgin Islands": "VI", "Virginia": "VA",
        "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"
    }


    const handleSignUp = () =>{

    }
    const handleLogin = () =>{

    }

    function handleSubmit(e) {
        e.preventDefault();
        let stateAbbreviation;
        if(stateCodes.hasOwnProperty(input)){
            stateAbbreviation = stateCodes[input];
        }
        getSelectParks(stateAbbreviation);

        setExplore(false);
        setInput('');
    }


    return (
        <nav className='nav-bar shadow'>
            <div onClick={() => window.location.reload(false)} className='header-title-group title-grow'>
                <IconContext.Provider value={{className: 'logo-image'}}>
                    <HiMap/>
                </IconContext.Provider>
                <h1 className='logo'>Plan My Adventure</h1>
            </div>
            {
                explore ?
                    <div className='header-explore-input'>
                        <label className='input-label' htmlFor='searchBox'>Search
                            Parks By State</label>
                        <form onSubmit={(e) => handleSubmit(e)}
                              className='input-box'>
                            <Hint options={states} allowTabFill>
                                <input
                                    className=''
                                    id='searchBox'
                                    type='text'
                                    placeholder='State...'
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </Hint>
                            <button className='button' onSubmit={(e) =>handleSubmit(e)}>
                                <HiSearch />
                            </button>
                        </form>
                    </div> :
                    <div className='header-buttons-group'>
                        <button className='button grow'
                                onClick={() => setExplore(!explore)}>Explore Parks
                        </button>
                        <button className='button grow'
                                onClick={handleLogin}>Login
                        </button>
                        <button className='button grow'
                                onClick={handleSignUp}>Sign Up
                        </button>
                    </div>
            }

        </nav>
    )
}
export default Header;