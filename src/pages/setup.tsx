import React from 'react';
import { useApp, Wrapper } from '@hygraph/app-sdk-react';
import HomePage from './homepage';

function Setup() {
  const { installation } = useApp();
  const { updateInstallation } = useApp();

  if (installation.status === 'COMPLETED') {
    return <Configure />;
  }
  updateInstallation({ status: 'COMPLETED', config: {} });
  return <Configure />;
}

function Install() {
  const { updateInstallation } = useApp();

  return (
    <button
      onClick={() => {
        updateInstallation({ status: 'COMPLETED', config: {} });
      }}
    >
      Install App
    </button>
  );
}

function Configure() {
  return <HomePage/>;
}

export default function Page() {
  return (
    <Wrapper>
      <Setup />
    </Wrapper>
  );
}