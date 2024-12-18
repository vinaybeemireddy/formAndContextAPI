import React, { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "No",
};

const FormComponent = () => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  

  const handleSubmit=(event)=>{
event.preventDefault();
    console.log(formState);
  }
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="add username"
          onChange={handleChange}
        />
        <select
          name="country"
          value={formState.country}
          onChange={handleChange}
        >
          <option value="">select country</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="nepal">Nepal</option>
        </select>
        <label>
          <input
            type="radio"
            name="isMarried"
            value="Yes"
            onChange={handleChange}
            checked={formState.isMarried==="Yes"}
          />
          yes
        </label>
        <label>
          <input type="radio"
          name="isMarried" 
          value="No"
          onChange={handleChange}
          checked={formState.isMarried==="No"}
          />

          
          no
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormComponent;
