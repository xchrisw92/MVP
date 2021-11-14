
import './Park.css'

const Park = ({park}) =>{
    return (
        <div className='park-container-group'>
            <img className='image' src={park.images[0].url} alt='placeholder' />
            <h3 className='park-name'>{park.fullName}</h3>
            <h3 className='park-location'>{park.addresses[0].city}, {park.addresses[0].stateCode}</h3>
        </div>
    )
}
export default Park;