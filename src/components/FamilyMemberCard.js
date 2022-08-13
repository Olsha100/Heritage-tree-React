import { useState } from 'react';
import  '../styles/FamilyMemberCard.scss'

const FamilyMemberCard = ({ id, parentId, name, heritage, heritageStake, syblingsNumber, addFamilyMember, removeFamilyMember, incrementChildrenNumber, decrementChildrenNumber, incrementSyblingsNumber, decrementSyblingsNumber, calculateHeritageStake }) => {

	let [ childName, setChildName ] = useState('');

	const clearInput = () => {
		setChildName('');
	}

	let heritageValue = heritage * heritageStake;

	return ( 
	<div className="container"  id={id}>
		<h2>{ name }</h2>
		<h2>{ heritageValue }</h2>
		<label>
			Imię dziecka
			<input type="text" name="name" value={ childName } onChange={e => setChildName(e.target.value)}/>
		</label>
		<button 
			onClick={()=>{
				if(childName){
				addFamilyMember(id, childName, heritageStake, syblingsNumber); 
				incrementChildrenNumber(id);
				incrementSyblingsNumber(id);
				calculateHeritageStake();
				clearInput();
			}
			}}
			>+ Dziecko</button>
		<button 
			onClick={()=>{
				removeFamilyMember(id); 
				decrementChildrenNumber(parentId); 
				decrementSyblingsNumber(parentId);
				calculateHeritageStake();
				}}
			>Usuń osobę</button>
	</div> 
	);
}
 
export default FamilyMemberCard;