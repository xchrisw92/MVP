
import './Weather.css'

const Weather = ({weather}) =>{


    return (
        <article className="widget">
            <div className="weatherIcon">
                <img src={weather.current.condition.icon} alt='placeholder' />
            </div>
            <div className="weatherInfo">
                <div className="temperature"><span>{weather.current.temp_f}&deg;</span></div>
                <div className="description">
                    <div className="weatherCondition">CLOUDY</div>
                    <div className="place">New York, New York</div>
                </div>
            </div>
            <div className="date">1st Jan</div>
        </article>


        //
        // <div className='widget' >
        //     <div className='title'>{weather.location.name}, {weather.location.region}</div>
        //     <img className='weatherIcon'src={weather.current.condition.icon} alt={'placeholder'} />
        //     <div>
        //         <h3>{weather.current.temp_f}</h3>
        //         <h3>Precip: {weather.current.precip}</h3>
        //     </div>
        //
        // </div>

    )
}
export default Weather;