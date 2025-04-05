import React from 'react';
import { useState, useEffect } from 'react';

import { useApp, Wrapper, useFieldExtension } from '@hygraph/app-sdk-react';
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

function MyCustomField() {
  const { value, onChange } = useFieldExtension();
  const [localValue, setLocalValue] = useState(value || '');

  useEffect(() => {
    onChange(localValue);
  }, [localValue, onChange]);

  return (
    <>
      <label htmlFor="website">Website:</label>
      <input
        id="website"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />
    </>
  );
}

// Reading config data in Field Extension
function FieldElement() {
  const {
    extension: { fieldConfig },
  } = useFieldExtension();
  const colorsConfig = fieldConfig?.website;

  return <div>{colorsConfig}</div>;
}

function Configure() {
  return (
    <Wrapper>
      <MyCustomField />
      <HomePage />
    </Wrapper>
  );
  // return <HomePage/>;
}

export default function Page() {
  return (
    <Wrapper>
      <Setup />
    </Wrapper>
  );
}