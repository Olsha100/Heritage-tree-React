import '../styles/FamilyTree.scss'
import FamilyMemberCard from './FamilyMemberCard';

const FamilyTree = ({familyMembers, addFamilyMember, removeFamilyMember, incrementChildrenNumber, decrementChildrenNumber, incrementSyblingsNumber, decrementSyblingsNumber}) => {
	

	const familyMembersList = familyMembers.map(member => 
			<FamilyMemberCard 
				key={member.key}
				id={member.id}
				parentId={member.parentId}
				name={member.name} 
				syblingsNumber={member.syblingsNumber}
				heritageStake={member.heritageStake}
				addFamilyMember={addFamilyMember}
				removeFamilyMember={removeFamilyMember}	
				incrementChildrenNumber={incrementChildrenNumber}
				decrementChildrenNumber={decrementChildrenNumber}
				incrementSyblingsNumber={incrementSyblingsNumber} 
				decrementSyblingsNumber={decrementSyblingsNumber}
			/>) 

	return ( 
	<div className="container">
		{ familyMembersList }
	</div> 
	);
}
 
export default FamilyTree;