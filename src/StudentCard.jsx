import { Link } from 'react-router-dom';
function StudentCard(props) {
   return (
<div className="student-card">
<h3>{props.nom}</h3>
<p>ID : {props.id}</p>
<p>Note : {props.note}/20</p>
<p>
               Statut :{' '}
               {props.note >= 10 ? (
<span className="admis">Admis</span>
               ) : (
<span className="redoublant">
                       Redoublant
</span>
               )}
</p>
<Link
               to={`/etudiants/${props.id}/${props.group}`}
>
               Voir les détails
</Link>
</div>
   );
}
export default StudentCard;