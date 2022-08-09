import { useState } from 'react';
import  '../styles/FamilyMemberCard.scss'

const FamilyMemberCard = ({ id, parentId, name, heritageStake, addFamilyMember, removeFamilyMember, incrementChildrenNumber, decrementChildrenNumber }) => {

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
				if(childName){
				addFamilyMember(childName, id); 
				clearInput();
				incrementChildrenNumber(id);
			}
			}}
			>+ Dziecko</button>
		<button onClick={()=>{removeFamilyMember(id);decrementChildrenNumber(parentId)}}>Usuń osobę</button>
	</div> 
	);
}
 
export default FamilyMemberCard;