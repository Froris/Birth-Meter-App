import React from 'react';

export const PeoplesListItem = ({id, firstName, lastName, dob}) => (
  <li key={id}>
    <p><b>Name:</b> {`${firstName} ${lastName}`}</p>
    <p><b>Date of birth:</b> {`${dob}`}</p>
  </li>
)