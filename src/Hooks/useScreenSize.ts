import React from 'react';

export const useScreenSize = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {

    // Size is defined by the component : https://ant.design/components/grid/#Col
    setIsDesktop(window.innerWidth > 992);
  }, []);
  return isDesktop;
}
