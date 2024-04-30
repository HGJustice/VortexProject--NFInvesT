import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

type StyledComponentsRegistryProps = {
  children: React.ReactNode;
};

export default function StyledComponentsRegistry({
  children,
}: StyledComponentsRegistryProps) {
  // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentStyleSheet.getStyleElement();
    styledComponentStyleSheet.instance.clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
