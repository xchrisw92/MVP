import Park from "../Park/Park";
import './Parks.css'

const Parks = ({parks, detailView}) =>{
    return(
        <div className='container'>
            {
                parks.map(park => {
                    return (
                        <Park
                            key={park.id}
                            park={park}
                            detailView={detailView}
                        />
                    )
                })
            }

        </div>

    )
}
export default Parks;