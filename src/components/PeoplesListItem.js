import React from 'react';

export const PeoplesListItem = ({id, firstName, lastName, dob}) => (
  <li key={id}>
    <p>Name: {`${firstName} ${lastName}`}</p>
    <p>Date of birth: {`${dob}`}</p>
  </li>
)