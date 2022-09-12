import { Link } from 'react-router-dom'


const Nav = () => {
    return ( 
     <nav className="navbar navbar-expand-lg bg-light justify-content-space-between">
       <h1>POGO</h1>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">HOME</button>
      </form> 
      <br />
      <br />
      <br />
      <br />

        <Link to="/wishlist">
          <a className="btn btn-primary" aria-current="page" href="#">Wishlist</a>
        </Link>
   
      
    </nav>

     
    );
}
 
export default Nav;
