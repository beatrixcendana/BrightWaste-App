import Image from 'next/image';
import LogoUrl from '../public/images/logo.png';
import '../styles/Layout.module.css';

const Header = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-white">
        
        <Image src={LogoUrl} layout='fixed' width={200} height={50}/>

        <button className="navbar-toggler" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#menu-app"
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

            
        <div className='collapse navbar-collapse' id='menu-app'>
            
            <ul className="navbar-nav ms-auto mt-2">
                <li className="nav-item p-2 mt-2 mr-2">
                    <a href="#!" className="nav-link headmenu" style={{ fontSize: '24px', fontWeight: '500' }}>How it Works</a> {/* change font size and font weight */}
                </li>
                <li className="nav-item p-2 mt-2 mr-2">
                    <a href="#!" className="nav-link headmenu" style={{ fontSize: '24px', fontWeight: '500' }}>All Items</a> {/* change font size and font weight */}
                </li>
                <li className="nav-item p-2 mt-2 mr-2">
                    <a href="#!" className="nav-link headmenu" style={{ fontSize: '24px',fontWeight: '500' }}>DIY Blog</a> {/* change font size and font weight */}
                </li>
                <li className="nav-item p-2 mt-2 mr-2">
                    <a href="#!" className="nav-link headmenu" style={{ fontSize: '24px',fontWeight: '500' }}>Contact Us</a> {/* change font size and font weight */}
                </li>
                <li className="nav-item p-2 mt-2 mr-2">
                    <a href="#!" className="btn btn-md" 
                    style={{ backgroundColor: '#262261E5', color: '#fff', fontSize: '24px', width: '182px'}}>Join Us</a> {/* change button font size and button width */}
                </li>
            </ul>
        

        </div>
    </nav>)
}

export default Header;