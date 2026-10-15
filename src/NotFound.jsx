import { Link } from 'react-router-dom';
function NotFound() {
   return (
<section>
<h2>Erreur 404</h2>
<p>Page introuvable !</p>
<Link to="/">
               Retour à l'accueil
</Link>
</section>
   );
}
export default NotFound;