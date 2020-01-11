import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MonthsListContainer from './MonthsListContainer';
import PeopleListComponent from './PeopleListComponent';
import startDataReciving from '../actions/getPeopleData';
import HeaderComponent from './HeaderComponent';

const MainPage = (props) => {

  useEffect(() => {
    props.startDataReciving('https://yalantis-react-school.herokuapp.com/api/task0/users');
  })
  
  return (
    <React.Fragment>
      <HeaderComponent />
      <div className='main-wrapper'>
        <MonthsListContainer 
          amount={props.filteredData.length}
          months={props.months}
          people={props.people}
        />
        <PeopleListComponent />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  people: state.people,
  filteredData: state.filteredData,
  months: state.months
})

const mapDispatchToProps = (dispatch) => ({
  startDataReciving: (url) => {dispatch(startDataReciving(url))}
}) 

export default connect(mapStateToProps , mapDispatchToProps)(MainPage);