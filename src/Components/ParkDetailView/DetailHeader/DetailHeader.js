import {HiCloud, HiExclamation, HiInformationCircle} from "react-icons/hi";
import './DetailHeader.css';

const DetailHeader = ({park, information, alert, weather, setInformation, setAlert, setWeather}) =>{

    const states = {
        AL: 'Alabama', AK: 'Alaska', AS: 'American Samoa', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
        CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia', FL: 'Florida', GA: 'Georgia',
        GU: 'Guam', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky',
        LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota',
        MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire',
        NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
        OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', PR: 'Puerto Rico', RI: 'Rhode Island', SC: 'South Carolina',
        SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VI: 'Virgin Islands',
        VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
    }

    const stateFullName = (state) => {
        let stateFullName = state;
        if (states.hasOwnProperty(state)) {
            stateFullName = states[state];
        }
        return stateFullName;
    }

    return (
        <header className='detailHeader'>
            <div className='detailHeader-title-group'>
                <h1 className='detailHeader-title-name'>{park.name}</h1>
                <div className='detailHeader-minor-text-group'>
                    <p className='detailHeader-minor-text-items'>{park.designation}</p>
                    <p className='detailHeader-minor-text-items'>{stateFullName(park.addresses[0].stateCode)}</p>
                </div>
            </div>
            <div className='detailHeader-buttons-group'>
                    <span onClick={(e) => setAlert(!alert)}
                          className='detailHeader-button-pair grow'>
                        <HiExclamation/>
                        <p>Alerts</p>
                    </span>
                <span  onClick={(e) => setInformation(!information)}
                       className='detailHeader-button-pair grow'>
                        <HiInformationCircle/>
                        <p>Information</p>
                    </span>
                <span onClick={(e) => setWeather(!weather)}
                      className='detailHeader-button-pair grow'>
                        <HiCloud/>
                        <p>Weather</p>
                    </span>
            </div>
        </header>
    )
}
export default DetailHeader;