
import { useState } from 'react';
import './App.css';

const App = () =>{
  const [appUsers, setAppUsers] = useState([
    {id: '1', userName: 'Arash', userAge:'50'}
  ]);

const addUserHandler = (enteredUser, enteredUserAge) => {
  setAppUsers(prevUsers => {
    const updateUsers = [...prevUsers];
    updateUsers.unshift({id: Math.random().toString, userName: enteredUser, userAge: enteredUserAge})
    return updateUsers;
  })
}

let content = (
  <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
);

if(appUsers.length > 0) {
  content = (
    <UserList items={appUsers} />
  );
}
return (
  <div>
    <section>
      <UserInput onAddUser={addUserHandler}/>
    </section>
    <section>
      {content}
    </section>
  </div>
);

};

export default App;
