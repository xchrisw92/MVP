
import Accordion from "./Accordion/Accordion";
import './Information.css'

const Information = ({park}) =>{


    const accordionData = [
        {
            title: 'Address',
            content: `${park.addresses[0].line1}
         ${park.addresses[0].city}, ${park.addresses[0].stateCode}
         ${park.addresses[0].postalCode}`
        },
        {
            title: 'Directions',
            content: `${park.directionsInfo}`
        },
        {
            title: 'Fees & Passes',
            content: `Entrance Fees: $${park.entranceFees[0].cost} 
            Description: ${park.entranceFees[0].description}`
        },
        {
            title: 'Contacts',
            content: `Email: ${park.contacts.emailAddresses[0].emailAddress}  
            Phone Number: ${park.contacts.phoneNumbers[0].phoneNumber}`
        },
        {
            title: 'Operating Hours',
            content: `${park.operatingHours[0].description} 
            Standard Hours of Operation 
            Monday: ${park.operatingHours[0].standardHours.monday}
            Tuesday: ${park.operatingHours[0].standardHours.tuesday}
            Wednesday: ${park.operatingHours[0].standardHours.wednesday}
            Thursday: ${park.operatingHours[0].standardHours.thursday}
            Friday: ${park.operatingHours[0].standardHours.friday} `
        }
    ]

    return (
        <div className='information-page'>

        <div className='information-container'>
            <h1 className='information-header'>
                Information for {park.fullName}
            </h1>
            {
                accordionData.map(({title, content}) =>(
                    <Accordion key={title} title={title} content={content} />
                ))
            }
        </div>
        </div>




    )
}
export default Information;