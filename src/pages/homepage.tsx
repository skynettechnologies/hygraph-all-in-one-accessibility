// this is the complete code

import { Wrapper, useApp } from '@hygraph/app-sdk-react';

function PageElement() {
  const { installation, showToast } = useApp();

  const handleClick = () => {
    showToast({
      title: 'Hello World!',
      description: 'This is a toast message',
      variantColor: 'success',
    });
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Wrapper>
      <PageElement />
    </Wrapper>
  );
}