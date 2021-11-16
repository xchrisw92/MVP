import {useState} from "react";
import {HiChevronDown, HiChevronUp} from "react-icons/hi";
import './Accordion.css'
import {IconContext} from "react-icons";

const Accordion = ({title, content}) => {
    let [isActive, setIsActive] = useState(false);

    return (
        <div className='accordion'>
            <div className='accordion-title-group' onClick={(e) => setIsActive(!isActive)}>
                <div className='accordion-title'>{title}</div>
                <div className='accordion-title-arrow'>
                    {isActive ?
                        <IconContext.Provider value={{className: 'chevron'}}>
                            <HiChevronUp/>
                        </IconContext.Provider> :
                        <IconContext.Provider value={{className: 'chevron'}}>
                            <HiChevronDown/>
                        </IconContext.Provider>
                    }
                </div>
            </div>
            <div>
                {isActive && <div className='panel'>
                    {
                        content.split('\n').map(function (item, key) {
                            return (
                                <span key={key}>
                                    {item}
                                    <br/>
                                </span>
                            )
                        })}
                </div>}

            </div>

        </div>
    )

}
export default Accordion;