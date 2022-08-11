import { useState } from 'react';
import  '../styles/FamilyMemberCard.scss'

const FamilyMemberCard = ({ id, parentId, name, heritageStake, syblingsNumber, addFamilyMember, removeFamilyMember, incrementChildrenNumber, decrementChildrenNumber, incrementSyblingsNumber, decrementSyblingsNumber }) => {

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
				addFamilyMember(id, childName, heritageStake, syblingsNumber); 
				incrementChildrenNumber(id);
				{/*incrementSyblingsNumber(id);*/}
				clearInput();
			}
			}}
			>+ Dziecko</button>
		<button onClick={()=>{removeFamilyMember(id); decrementChildrenNumber(parentId); decrementSyblingsNumber(parentId)}}>Usuń osobę</button>
	</div> 
	);
}
 
export default FamilyMemberCard;