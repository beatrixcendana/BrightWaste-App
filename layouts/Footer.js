import styles from '../styles/Layout.module.css';
import FBIcon from '../public/images/Icon_Facebook.png';
import GMailIcon from '../public/images/Icon_Gmail.png';
import TWIcon from '../public/images/Icon_Twitter.png';

import Image from 'next/image';

const Footer = () => {
    return (<footer className='navbar navbar-expand-lg' style={{ backgroundColor: '#E3F0EE' }}>
        <div className='mx-auto'>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="" className="nav-link text-dark">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link text-dark">Join Us</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link text-dark">Be a seller</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link text-dark">My Account</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link text-dark">Privacy Policy</a>
                </li>
            </ul>
            
            <EmailSubs/>
            <Socials/>

            <p className="text-center mt-3">
                Made with ❤️
            </p>
        </div>
    </footer>)
}

const EmailSubs = () => {
    return (<div className="input-group mt-3">
        <input type="text" className="form-control" placeholder="Enter email here to get latest update"/>
        <button className="btn btn-md btn-outline-success" type="button">SUBSCRIBE</button>
    </div>)
}

const Socials = () => {
    return (<div className="text-center mt-4">
        <Image src={FBIcon} width={40} height={40} />
        <Image src={GMailIcon} width={40} height={40} />
        <Image src={TWIcon} width={40} height={40} />
    </div>)
}

export default Footer;