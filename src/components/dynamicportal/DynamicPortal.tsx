'use client';

import { useEffect } from 'react';

const DynamicPortal = () => {
  useEffect(() => {
    const portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);

    return () => {
      document.body.removeChild(portalRoot);
    };
  }, []);

  return null;
};

export default DynamicPortal;
