import { BrowserRouter as Rouster, Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Biblioteka Visnjica</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#c71f51',
                    borderRadius: '8px'
                }}>Nova knjiga</a>
            </div>
        </nav>
     );
}
 
export default Navbar;