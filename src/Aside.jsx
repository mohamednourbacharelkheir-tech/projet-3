import { Link } from 'react-router-dom';

function Aside() {

    return (
<aside className="sidebar">
<h2>Menu</h2>
<nav>
<Link to="/">Home</Link>
<Link to="/etudiants">Students</Link>
<Link to="/contact">Contact</Link>
<Link to="/etudiants/1/DD201">

                    EtudiantDetails
</Link>
</nav>
</aside>

    );

}

export default Aside;
 