import Park from "../Park/Park";
import './Parks.css'

const Parks = ({parks, detailView, explore, setExplore}) =>{



    return(
        <div className='mainPage'>
            <div className='title-page-group'>
                <div className='title'>
                    Find Your Next Adventure
                </div>
                {
                    explore ?
                      null:
                <button  onClick={()=>setExplore(!explore)} className='title-button grow'>Explore Parks</button>

                }

            </div>
            <div className='container'>
                <div>
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
            </div>

        </div>

    )
}
export default Parks;