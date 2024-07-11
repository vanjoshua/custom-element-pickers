import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { Text, WixDesignSystemProvider } from '@wix/design-system';
import '@wix/design-system/styles.global.css';

type Props = {
  name: string;
};

function CustomElement(props: Props) {
  return (
    <WixDesignSystemProvider>
      <div>
        <Text>Hello {props.name ?? 'Wix CLI'}</Text>
      </div>
    </WixDesignSystemProvider>
  );
}

const customElement = reactToWebComponent(
  CustomElement,
  React,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactDOM as any,
  {
    props: {
      name: 'string',
    },
  }
);

export default customElement;
