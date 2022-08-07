import './App.css';
import { useState } from 'react';
import FamilyTree from './components/FamilyTree';
import InputBox from './components/InputBox';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const[heritage, setHeritage] = useState();


	
	const[familyMembers, setFamilyMembers] = 
		useState( [{ 
			id:uuidv4(), 
			parentId: 0,
			key:uuidv4(), 
			name:'Adam',
			childrenNumber:0,
			heritageStake:heritage
		}]);

// addFamilyMember and removeFamilyMember operates on familyMembers' state so they have to be declared in App component.
	const addFamilyMember = (name,id) => {
		if(name){
			setFamilyMembers([...familyMembers, { id:uuidv4(), parentId:id, key:uuidv4() ,name, childrenNumber:0 }]);
		}
	}

	const removeFamilyMember = (id) => {
		setFamilyMembers(familyMembers.filter(member => {return member.id !== id}))
	}

	//TODO: Napisać funkcje increment i decrement
	const incrementChildrenNumber = (id) => {
	}
	const decrementChildrenNumber = (id) => {

	}

	return (
		<div className="App">
			<InputBox heritage={heritage} setHeritage={setHeritage}/>
			<FamilyTree familyMembers={familyMembers} addFamilyMember={addFamilyMember} removeFamilyMember={removeFamilyMember} incrementChildrenNumber={incrementChildrenNumber}/>
		</div>
	);
}

export default App;
