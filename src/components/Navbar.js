const Navbar = () => {
    return(
        <nav className="Navbar">
            <div>
                <a href="#">Lifeinvader</a>
            </div>
            <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="search" />
            </div>
            <div>
            <i class="fa-solid fa-bell"></i>
            </div>
            
        </nav>
    )

}

export default Navbar;