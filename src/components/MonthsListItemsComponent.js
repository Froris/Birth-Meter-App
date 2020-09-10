import React, { useEffect } from "react";

const MonthListItems = (props) => {
  return props.months.map((month) => {
    let classNameItem = "item";
    if (props.amount <= 2) {
      classNameItem = "item low";
    } else if (props.amount <= 4) {
      classNameItem = "item little";
    } else if (props.amount <= 7) {
      classNameItem = "item medium";
    } else if (props.amount >= 8) {
      classNameItem = "item high";
    }

    return (
      <li key={month.id} className={classNameItem} id={month.id}>
        {month.name}
      </li>
    );
  });
};

export default MonthListItems;
