import {Link} from 'react-router-dom'


const Nav = () => {
    return ( 
        <nav className='d-flex justify-content-evenly align-item-center'>
            <h1>POGO</h1>

            <input class='border border-danger ' type="search" />
            <button className='btn btn-danger'>search</button>
            <Link to="/whishlist">wishlist</Link>

        </nav>
     );
}
 
export default Nav;