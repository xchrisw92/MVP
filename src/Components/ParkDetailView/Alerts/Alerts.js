import './Alert.css'
import {HiExclamation} from "react-icons/hi";
import {IconContext} from "react-icons";

const Alerts = ({alert}) => {
    let title = 'No Current Alerts Issued';
    let description = '';
    if (alert.length > 0) {
        title = alert[0].title;
        description = alert[0].description;
    }


    return (
        <div className='alert-container'>
            <div className='alert-title-group'>
                <IconContext.Provider value={{className: 'alert-logo'}}>
                <HiExclamation/>
                </IconContext.Provider>
                <div className='alert-title'>{title}</div>
                <IconContext.Provider value={{className: 'alert-logo'}}>
                <HiExclamation/>
                </IconContext.Provider>

            </div>
            <div className='alert-body'>{description}</div>
        </div>
    )
}
export default Alerts;