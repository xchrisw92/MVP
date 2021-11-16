
import './Weather.css'

const Weather = ({weather}) =>{
    let date=new Date(weather.location.localtime);
    const month=[];
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";

    console.log(date);

    let monthText = month[date.getMonth()];
    let day = date.getDate();
    console.log(day);
    let dateText = '';
    if(day === 1 || day === 21 || day === 31){
        dateText = 'st';
    } else if (day === 2 || day === 22){
        dateText = 'nd';
    }else if (day === 3) {
        dateText = 'rd';
    } else dateText = 'th';

    return (
        <article className="widget">
            <div className="weatherIcon">
                <img className='weatherImage'
                    src={weather.current.condition.icon} alt='placeholder' />
            </div>
            <div className='weatherWidgetBottom'>
                <div className="weatherInfo">
                    <div className="temperature"><span>{weather.current.temp_f}&deg;F</span></div>
                    <div className="description">
                        <div className="weatherCondition">{weather.current.condition.text}</div>
                        <div className="place">{weather.location.name}, {weather.location.region}</div>
                    </div>
                </div>
                <div className="date">{day}<sup>{dateText}</sup>{monthText}</div>

            </div>
        </article>
    )
}
export default Weather;