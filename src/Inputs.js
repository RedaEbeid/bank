import Popup from './Popup.js'
import Validation from './Validation.js';
import {useState} from 'react'

export default function Inputs () {

    const [inputValue, setInputValue] = useState({name: '', phoneNumber: '', age: '', areYouEmployed: false, salary: 'less than 500 $'});

    const [errors, setErrors] = useState({});

    function handleValidation (event) {
        event.preventDefault();
        setErrors(Validation(inputValue));
        console.log(inputValue);
    }


    return (
        <>
            <form onSubmit={handleValidation}>
                <div className="inputs">
                    <input placeholder='Name' value={inputValue.name}  onChange={(e) => setInputValue({...inputValue, name: e.target.value})}  type="text"  maxlength="14"/>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>

                <div className="inputs">
                    <input placeholder='PhoneNumber'  value={inputValue.phoneNumber} onChange={(e) => setInputValue({...inputValue, phoneNumber: e.target.value})} type="text"  maxlength="11"/>
                    {errors.phoneNumber && <p style={{ color: 'red'}}>{errors.phoneNumber}</p>}
                </div>

                <div className="inputs">
                    <input placeholder='Age' value={inputValue.age} onChange={(e) => setInputValue({...inputValue, age: e.target.value})} type="text" maxlength="3"/>
                    {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
                </div>

                <div className="inputs">
                    <h3> are you Employed ?</h3>
                    <input  checked={inputValue.areYouEmployed} onChange={(e) => setInputValue({...inputValue, areYouEmployed: e.target.checked})} type="checkbox"/>
                    {errors.areYouEmployed && <p style={{ color: 'red' }}>{errors.areYouEmployed}</p>}
                </div>
                
                <select id="salary" value={inputValue.salary} onChange={(e) => setInputValue({...inputValue, salary: e.target.value})} >
                    <option value="less than 500 $">less than 500 $</option>
                    <option value="less than 2000 $">less than 2000 $</option>
                    <option value="less than 5000 $">less than 5000 $</option>
                </select>
                
                <button onclick={handleValidation}>Submit</button>
            </form>
        </>
    )
    
}



/*
 onChange={(e) => setInputValue({...inputValue, name: e.target.value})} 

 onChange={(e) => setInputValue({...inputValue, phoneNumber: e.target.value})} 

 onChange={(e) => setInputValue({...inputValue, areYouEmployed: e.target.checked})} 

 onChange={(e) => setInputValue({...inputValue, salary: e.target.value})} 

*/



    //     function handleAddDivice () {
    //     return diviceInput !== "" ? setDivices([...divices, diviceInput]) : alert('Input not Found');
// }
    
    
    // const DivicesList = divices.map((divice) => {
    //   return (
    //     <div>
    //       <li>{divice}</li>
    //       <button onClick={(e) => e.target.parentNode.remove()}>Delete</button>
    //     </div>
    //   );
// });
    
