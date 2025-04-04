import React from 'react';
import { useApp, Wrapper } from '@hygraph/app-sdk-react';

function Setup() {
  const { installation } = useApp();
  if (installation.status === 'COMPLETED') {
    return <Configure />;
  }
  return <Install />;
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
  return <div>Configure</div>;
}

export default function Page() {
  return (
    <Wrapper>
      <Setup />
    </Wrapper>
  );
}