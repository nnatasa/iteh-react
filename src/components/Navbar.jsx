const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Biblioteka Visnjica</h1>
            <div className="links">
                <a href='/'>Home</a>
                <a href='/create'>Nova knjiga</a>
            </div>
        </nav>
     );
}
 
export default Navbar;