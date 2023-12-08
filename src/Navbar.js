import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/contact">Contact</Link>
        </div>
    )
}