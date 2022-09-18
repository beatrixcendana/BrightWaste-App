import Header from "./Header"
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (<div className="container-fluid">
        <Header/>
        <hr/>
        { children }
        <Footer/>
    </div>)
}

export default Layout;