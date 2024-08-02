import React from 'react';
import './App.css';
const name = 'Miguel Carhuas';
const element = <h1>Hello, {name}</h1>;
const formatName = (user: any) => {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Miguel',
  lastName: 'Carhuas'
}

const elementAhref=<a href="https://www.google.com">Google</a>;

function App() {
  return (
    <div className="App">
    {name}
    {element}
    <h1>
      Hello, {formatName(user)}!
    </h1>
    {elementAhref}
    </div>
  );
}

export default App;
