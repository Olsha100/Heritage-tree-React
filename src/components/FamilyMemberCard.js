import { useState } from 'react';
import  '../styles/FamilyMemberCard.scss'

const FamilyMemberCard = ({ id, name, heritageStake, addFamilyMember, removeFamilyMember, incrementChildrenNumber }) => {

	let [ childName, setChildName ] = useState('');

	const clearInput = () => {
		setChildName('');
	}

	return ( 
	<div className="container"  id={id}>
		{name}
		<label>
			Imię dziecka
			<input type="text" name="name" value={ childName } onChange={e => setChildName(e.target.value)}/>
		</label>
		<button 
			onClick={()=>{
				addFamilyMember(childName, id); 
				incrementChildrenNumber();
				clearInput();
				incrementChildrenNumber(id);
			}}
			>+ Dziecko</button>
		<button onClick={(e)=>removeFamilyMember(e.target.parentElement.id)}>Usuń osobę</button>
	</div> 
	);
}
 
export default FamilyMemberCard;