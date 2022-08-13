import '../styles/FamilyTree.scss'
import FamilyMemberCard from './FamilyMemberCard';

const FamilyTree = ({familyMembers, heritage, addFamilyMember, removeFamilyMember, incrementChildrenNumber, decrementChildrenNumber, incrementSyblingsNumber, decrementSyblingsNumber, calculateHeritageStake}) => {
	

	const familyMembersList = familyMembers.map(member => 
			<FamilyMemberCard 
				key={member.key}
				id={member.id}
				parentId={member.parentId}
				name={member.name} 
				syblingsNumber={member.childrenNumber}
				heritage={heritage}
				heritageStake={member.heritageStake}
				addFamilyMember={addFamilyMember}
				removeFamilyMember={removeFamilyMember}	
				incrementChildrenNumber={incrementChildrenNumber}
				decrementChildrenNumber={decrementChildrenNumber}
				incrementSyblingsNumber={incrementSyblingsNumber} 
				decrementSyblingsNumber={decrementSyblingsNumber}
				calculateHeritageStake={calculateHeritageStake}
			/>) 

	return ( 
	<div className="container">
		{ familyMembersList }
	</div> 
	);
}
 
export default FamilyTree;