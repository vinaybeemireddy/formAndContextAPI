import React, { useState } from 'react'

const intialValue ={
    userName : "",
    country : "",
    isMarried : "No",
};
const FormComponentsDemo = () => {

    const [formState, setFormState] = useState(intialValue);

    const handleChange =(event)=>{
        const{name,value}=event.target;
        setFormState({...formState,[name]:value});
    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formState);
    }

  return (
    <div>
        <h2>FormComponentsDemo</h2>
        <form onClick={handleSubmit}>
        userName:<input type='text' name='userName' onChange={handleChange}/> 
        <select name='country' value={formState.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="india">india</option>
            <option value="pakistan">pakistan</option>
            <option value="china">china</option>
            <option value="nepal">nepal</option>

        </select>
        <label>
            <input type='radio' name='isMarried' value="yes" onChange={handleChange} checked={formState.isMarried==="yes"}/> Yes
        </label>
        <label>
            <input type='radio' name='isMarried' value="No" onChange={handleChange} checked={formState.isMarried==="No"}/>No
        </label>
        <input type='submit'/>

        </form>
        
    </div>
  )
}

export default FormComponentsDemo