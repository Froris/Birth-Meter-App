import React from "react";

export const PeopleListItem = ({ id, name, dob }) => (
  <li key={id}>
    <p>
      <b>Name:</b> {`${name}`}
    </p>
    <p>
      <b>Date of birth:</b> {`${dob}`}
    </p>
  </li>
);
