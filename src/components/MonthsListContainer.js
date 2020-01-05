import React from 'react';
import { connect } from 'react-redux';
import getFilteredData from '../actions/getFilteredData';
import MonthsListItems from './MonthsListItemsComponent';

const MonthsListContainer = (props) => {

  return (
    <div className='months-list-wrapper'>
      <h2 className='total'>Общее количество: {props.amount}</h2>
      
      <ul className='months-list' onPointerOver={(e) => {
        e.target.className.includes('item') ? 
          (props.getFilteredData(e.target.id, props.peoples)) : (props.getFilteredData('MOUSE_LEAVE'))
        }}>
        <MonthsListItems months={props.months} amount={props.amount} />  
      </ul>

    </div> 
  );
};

const mapDispatchToProps = (dispatch) => ({
  getFilteredData: (month, data) => {dispatch(getFilteredData(month, data))},
}) ;

export default connect(undefined, mapDispatchToProps)(MonthsListContainer)