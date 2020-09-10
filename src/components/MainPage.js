import React, { useEffect } from "react";
import { connect } from "react-redux";
import MonthsListContainer from "./MonthsListContainer";
import PeopleListComponent from "./PeopleListComponent";
import startDataReciving from "../actions/getPeopleData";
import HeaderComponent from "./HeaderComponent";

const MainPage = (props) => {
  useEffect(() => {
    props.startDataReciving();
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <div className="main-wrapper">
        <MonthsListContainer amount={props.peopleList.length} months={props.months} people={props.people} />
        <PeopleListComponent peopleList={props.peopleList} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  people: state.people,
  peopleList: state.peopleList,
  months: state.months,
});

const mapDispatchToProps = (dispatch) => ({
  startDataReciving: () => {
    dispatch(startDataReciving());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
