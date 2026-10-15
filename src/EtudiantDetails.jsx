import { useParams } from 'react-router-dom';
function EtudiantDetails() {
   const { id, group } = useParams();
   return (
<section>
<h2>Détails de l'étudiant</h2>
<p>Identifiant : {id}</p>
<p>Groupe : {group}</p>
<p>
               L'étudiant avec l'ID {id} appartient au groupe {group}.
</p>
</section>
   );
}
export default EtudiantDetails;