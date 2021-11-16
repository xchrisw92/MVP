
import './Park.css'

const Park = ({park, detailView}) =>{

    function checkImageArray() {
        if(park.images[0] !== null){
            return true;
        } else return false;
    }

    const handleDetailClick = (park) => {
        detailView(park.parkCode);
    }

    return (
        <div  onClick={(e) => {handleDetailClick(park)}} className='imageHolder shrink-on-hover'>
            <img className='image'
                 src={
                     checkImageArray() ?
                         park.images[0].url :
                         'https://placekitten.com/640/360'
                 }
                 alt='https://placekitten.com/640/360'
                 />
            <div className='caption'>
                <p className='park-text'>{park.fullName}</p>
                <p className='park-text'>{park.addresses[0].city}, {park.addresses[0].stateCode}</p>
            </div>
        </div>
    )
}
export default Park;