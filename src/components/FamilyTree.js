import '../styles/FamilyTree.scss'
import { useState } from 'react';
import FamilyMemberCard from './FamilyMemberCard';

const FamilyTree = () => {
	
	const[familyMembers, setFamilyMembers] = useState( [{ name:'Adam',age:30, key:1 }])

	const familyMembersList = familyMembers.map(member => <FamilyMemberCard name={member.name} age={member.age} key={member.key}/>) 

	const addFamilyMember = () => {setFamilyMembers([...familyMembers, { name:'Jola', age:20, key:2 }])}
	return ( 
	<div className="container">
		{ familyMembersList }
		<button onClick={()=>addFamilyMember()}> Add family member </button>
	</div> 
	);
}
 
export default FamilyTree;