import React, { useState } from "react";


const UserInput = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value); 
    }
    const formSubmitHandler = (event) => {
        event.preventDefualt();
        
        const userData = {
            name: enteredName,
            age: enteredAge
        };
    }

    return (
        <form inSubmit={formSubmitHandler}>
            <div>
                <label>Name</label>
                <input type="text" onChange={nameChangeHandler}/>
            </div>
            <div>
                <label>Age</label>
                <input type="text" onChange={ageChangeHandler}/>
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    );
}

export default UserImport;