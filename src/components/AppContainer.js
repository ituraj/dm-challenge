import React from "react";

const AppContainer = (props) => {
  const { children } = props;
  return (
    <div data-testid="test-app-container" className="app-container">
      {children}
    </div>
  );
};

export default AppContainer;
