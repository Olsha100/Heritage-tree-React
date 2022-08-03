import  '../styles/FamilyMemberCard.scss'

const FamilyMemberCard = (props) => {
	return ( 
	<div className="container">
		{props.name}
	</div> 
	);
}
 
export default FamilyMemberCard;