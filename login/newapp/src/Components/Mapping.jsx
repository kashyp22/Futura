import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Mapping() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default Mapping;
