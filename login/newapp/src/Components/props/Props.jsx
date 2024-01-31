import React from 'react';

function Welcome(props1) {
  return <h1>Hello, {props1.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="child1" />
      <Welcome name="child12" />
      <Welcome name="child123" />
    </div>
  );
}

export default App;
