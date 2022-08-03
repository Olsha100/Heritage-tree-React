import  '../styles/InputBox.scss'

const InputBox = () => {
	return ( 
	<div>
		<label htmlFor="heritage">Wpisz wysokość spadku</label>
  		<input type="text" id="heritage" name="heritage" className="input"/>
		<button className="button">Oblicz</button>
	</div>
	);
}
 
export default InputBox;