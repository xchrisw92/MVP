import './Footer.css'
const Footer = () =>{
    return (
        <div className='footer-container'>
            <div className='footer-text'>
                Made Possible by the <a
                href ={'https://www.nps.gov/subjects/developer/index.htm'}
                className='footer-link'
            >National Park Service API </a>
            </div>
            <div className='footer-text'>
                For more information about national parks,
                visit the <a className='footer-link'
                href={'https://www.nps.gov/index.htm'}
            >National Parks Website</a>
            </div>
        </div>
    )
}
export default Footer;