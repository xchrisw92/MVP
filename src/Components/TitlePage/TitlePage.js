import './TitlePage.css'
import wallpaper from '../../Images/wallpaper.png'

const TitlePage = ({explore, setExplore}) =>{

    return (
        <div className='background'>
            <div>

            </div>
            <h3>Explore America's National Parks</h3>
            <button onClick={(e) => setExplore(false)}>Explore Parks</button>
        </div>
    )
}
export default TitlePage;