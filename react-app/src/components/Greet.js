import React from 'react';

const Greet = ({name, superHeroName}) => {
  return (
    <div>
      <h1>Hello {name} a.k.a {superHeroName}</h1>
    </div>
  )
}

export default Greet;