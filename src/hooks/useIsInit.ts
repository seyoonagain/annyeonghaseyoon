import { useEffect, useState } from 'react';

const useIsInit = (): { isInit: boolean } => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    setIsInit(true);
  }, []);

  return { isInit };
};

export default useIsInit;
