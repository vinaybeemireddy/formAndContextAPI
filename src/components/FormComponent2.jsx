import React, { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "No",
  favColors: [
    { color: "Red", checked: false },
    { color: "Blue", checked: false },
    { color: "Green", checked: false },
  ],
};

const FormComponent2 = () => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (e,id) => {
    const { name, value,checked } = e.target;
   

    if(name==="favColors"){
        const newFavColors=[...formState.favColors];
        newFavColors[id].checked=checked;

        setFormState({
            ...formState,
            favColors:newFavColors
        })
    }
    else{

        setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="add username"
          onChange={(e)=>handleChange(e)}
        />
        <br />
        <select
          name="country"
          value={formState.country}
          onChange={(e)=>handleChange(e)}
        >
          <option value="">select country</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="nepal">Nepal</option>
        </select>
        <br />
        <label>
          <input
            type="radio"
            name="isMarried"
            value="Yes"
            onChange={(e)=>handleChange(e)}
            checked={formState.isMarried === "Yes"}
          />
          yes
        </label>
        <label>
          <input
            type="radio"
            name="isMarried"
            value="No"
            onChange={(e)=>handleChange(e)}
            checked={formState.isMarried === "No"}
          />
          no
        </label>
        <br />
        {formState.favColors.map((colorObj, id) => (
          <label key={id}>
            <input
              type="checkbox"
              name="favColors"
              checked={colorObj.checked}
              onChange={(e)=>handleChange(e, id)}
            />
            {colorObj.color}
          </label>
        ))}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormComponent2;
