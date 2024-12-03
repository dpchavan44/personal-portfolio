import React from 'react';
import Home from './Home';

function Body() {
  return (
    <div className="flex flex-1">
      {/*<Sidebar className="hidden md:block w-1/4 lg:w-1/5" />*/}
      <Home />
    </div>
  );
}

export default Body;