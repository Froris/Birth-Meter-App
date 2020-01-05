import React from 'react';
import { connect } from 'react-redux';
import MonthsListComponent from './MonthsListComponent';
import PeoplesListComponent from './PeoplesListComponent';
import startDataReciving from '../actions/getPeoplesData';
import HeaderComponent from './HeaderComponent';

class MainPage extends React.Component {
  componentDidMount(){
    this.props.startDataReciving('https://yalantis-react-school.herokuapp.com/api/task0/users');
  }

  render(){
    return (
      <React.Fragment>
        <HeaderComponent />
        <div className='main-wrapper'>
          <MonthsListComponent />
          <PeoplesListComponent />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  peoples: state.peoples
})

const mapDispatchToProps = (dispatch) => ({
  startDataReciving: (url) => {dispatch(startDataReciving(url))}
}) 

export default connect(mapStateToProps , mapDispatchToProps)(MainPage);