//Here we take care of UI component
import React from "react";
function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          type="text"
          name="firstName"
          value={props.data.firstName}
          placeholder="Input first name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.lastName}
          name="lastName"
          placeholder="Input last name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.age}
          name="age"
          placeholder="Input age"
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <select
          value={props.data.location}
          name="location"
          onChange={props.handleChange}
        >
          <option value="">select location</option>
          <option value="England">England</option>
          <option value="US">US</option>
          <option value="Asia">asia</option>
          <option value="Russia">Russ</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          />
        </label>
        Vegan?
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          />
        </label>
        Kosher?
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          />
        </label>
        Lactose free?
      </form>
      <hr />
      <h1>Entered info :</h1>
      <p>
        Your name:{props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age:{props.data.age}</p>
      <p>Gender: {props.data.gender}</p>
      <p>Location: {props.data.location}</p>
      <p>Vegan/{props.data.isVegan ? "yes" : "nay"}</p>
      <p>Lactose/{props.data.isLactoseFree ? "yes" : "nay"}</p>
      <p>Kosher/{props.data.isKosher ? "yes" : "nay"}</p>
    </main>
  );
}

export default FormComponent;
