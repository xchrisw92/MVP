import Park from "../Park/Park";
import './Parks.css'

const Parks = ({parks}) =>{
    return(
        <div className='container'>
            {
                parks.map(park => {
                    return (
                        <Park
                            key={park.id}
                            park={park}/>
                    )
                })
            }

        </div>

    )
}
export default Parks;