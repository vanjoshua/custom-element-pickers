import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

type Props = {
  color: string;
};

function CustomElement(props: Props) {
  return (
    <div style={{ display: 'flex', height: '100%', backgroundColor: `${props.color}`, justifyContent: 'center', alignItems: 'center' }}>
        <h1>Custom Element</h1>
      </div>
  );
}

const customElement = reactToWebComponent(
  CustomElement,
  React,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactDOM as any,
  {
    props: {
      color: 'string',
    },
  }
);

export default customElement;
