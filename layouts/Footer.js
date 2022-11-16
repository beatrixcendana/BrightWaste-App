import FBIcon from '../public/images/Icon_Facebook.png';
import GMailIcon from '../public/images/Icon_Gmail.png';
import TWIcon from '../public/images/Icon_Twitter.png';

import Image from 'next/image';

const Footer = () => {
    return (
    <footer>

        <nav className='navbar navbar-expand-md'>

            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
                
                <div className="container">
                    <div className='collapse navbar-collapse collapse navbar-collapse text-center align-items-center justify-content-center'
                    >
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="" className="nav-link text-dark">About Us</a>
                            </li>
                            <li>
                                <a href="" className="nav-link text-dark">Join Us</a>
                            </li>
                            <li>
                                <a href="" className="nav-link text-dark">Be a seller</a>
                            </li>
                            <li>
                                <a href="" className="nav-link text-dark">My Account</a>
                            </li>
                            <li>
                                <a href="" className="nav-link text-dark">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

             
                <EmailSubs/>
                <Socials/>

                <p className="text-center mt-3">
                    Made with ❤️
                </p>
            </div>

         
        </nav>

    </footer>
)
}

const EmailSubs = () => {
    return (
    <div className='container'>
        <div className="input-group mt-3">
            <input type="text" className="form-control" placeholder="Enter email here to get latest update"/>
            <button className="btn btn-md btn-outline-success" type="button">SUBSCRIBE</button>
        </div>
    </div>
    )
}

const Socials = () => {
    return (<div className="text-center mt-4">
        <Image src={FBIcon} width={40} height={40} />
        <Image src={GMailIcon} width={40} height={40} />
        <Image src={TWIcon} width={40} height={40} />
    </div>)
}


export default Footer;