import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MonthsListContainer from './MonthsListContainer';
import PeoplesListComponent from './PeoplesListComponent';
import startDataReciving from '../actions/getPeoplesData';
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
          peoples={props.peoples}
        />
        <PeoplesListComponent />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  peoples: state.peoples,
  filteredData: state.filteredData,
  months: state.months
})

const mapDispatchToProps = (dispatch) => ({
  startDataReciving: (url) => {dispatch(startDataReciving(url))}
}) 

export default connect(mapStateToProps , mapDispatchToProps)(MainPage);