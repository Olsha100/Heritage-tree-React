import  '../styles/InputBox.scss'

const InputBox = ({ setHeritage }) => {
	return ( 
	<div>
		<label>
			Wpisz wysokość spadku
  			<input type="text" name="heritage" className="input" onChange={(e)=>setHeritage(Number(e.target.value))}/>
		</label>
		<button className="button">Oblicz</button>
	</div>
	);
}
 
export default InputBox;