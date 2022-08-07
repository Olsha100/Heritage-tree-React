import '../styles/FamilyTree.scss'
import FamilyMemberCard from './FamilyMemberCard';

const FamilyTree = ({familyMembers, addFamilyMember, removeFamilyMember, incrementChildrenNumber}) => {
	

	const familyMembersList = familyMembers.map(member => 
			<FamilyMemberCard 
				key={member.key}
				id={member.id}
				name={member.name} 
				heritageStake={member.heritageStake}
				addFamilyMember={addFamilyMember}
				removeFamilyMember={removeFamilyMember}	
				incrementChildrenNumber={incrementChildrenNumber}
			/>) 

	return ( 
	<div className="container">
		{ familyMembersList }
	</div> 
	);
}
 
export default FamilyTree;