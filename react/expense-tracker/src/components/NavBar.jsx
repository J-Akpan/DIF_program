import "../styles/navbar.scss";

const NavBar = () => {
    return (
       <nav className="navbar">
            <h1>Expense Tracker</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Expense</a>
            </div>

       </nav> 

    );
}
 
export default NavBar;