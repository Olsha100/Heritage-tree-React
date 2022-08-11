import './App.css';
import { useState } from 'react';
import FamilyTree from './components/FamilyTree';
import InputBox from './components/InputBox';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const[heritage, setHeritage] = useState(null);

	
	const[familyMembers, setFamilyMembers] = 
	useState( [{ 
			id:uuidv4(), 
			parentId: 0,
			key:uuidv4(), 
			name:'Adam',
			childrenNumber:0,
			syblingsNumber:1,
			heritageStake:2
		}]);

	// The following functions operate on familyMembers' state so they have to be declared in App component.
	const addFamilyMember = (id, name, heritageStake, syblingsNumber) => {
			setFamilyMembers([...familyMembers, { id:uuidv4(), parentId:id, key:uuidv4() ,name, childrenNumber:0, heritageStake, syblingsNumber }]);
	}

	const removeFamilyMember = (id) => {
		setFamilyMembers(familyMembers.filter(member => {return member.id !== id}))
	}

	const incrementChildrenNumber = (id) => {
		setFamilyMembers(current => current.map(member => {if(member.id === id){return {...member, childrenNumber: member.childrenNumber++}} else {return member}}))
	}

	const decrementChildrenNumber = (id) => {
		setFamilyMembers(current => current.map(member => {if(member.id === id){return {...member, childrenNumber: member.childrenNumber--}} else {return member}}))
	}

	const incrementSyblingsNumber = (parentId) =>{
		setFamilyMembers(current => current.map(member => {if(member.parentId === parentId){return {...member, syblingsNumber: member.syblingsNumber++}} else {return member}}))
	}

	const decrementSyblingsNumber = (parentId) =>{
		setFamilyMembers(current => current.map(member => {if(member.parentId === parentId){return {...member, syblingsNumber: member.syblingsNumber--}} else {return member}}))
	}

	
	return (
		<div className="App">
			<InputBox heritage={heritage} setHeritage={setHeritage}/>
			<FamilyTree familyMembers={familyMembers} 
			addFamilyMember={addFamilyMember} 
			removeFamilyMember={removeFamilyMember} 
			incrementChildrenNumber={incrementChildrenNumber} 
			decrementChildrenNumber={decrementChildrenNumber}
			incrementSyblingsNumber={incrementSyblingsNumber} 
			decrementSyblingsNumber={decrementSyblingsNumber}
			/>
		</div>
	);
}

export default App;
