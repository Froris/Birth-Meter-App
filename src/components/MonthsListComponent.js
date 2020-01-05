import React from 'react';
import { connect } from 'react-redux';
import getFilteredData from '../actions/getFilteredData';

class MonthItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      classes: ['low', 'little', 'medium', 'high'],
      months: [
        {name: 'Январь', id:'01'}, 
        {name: 'Февраль', id:'02'},
        {name: 'Март', id:'03'},
        {name: 'Апрель', id:'04'}, 
        {name: 'Май', id:'05'},
        {name: 'Июнь', id:'06'},
        {name: 'Июль', id:'07'}, 
        {name: 'Август', id:'08'}, 
        {name: 'Сентябрь', id:'09'}, 
        {name: 'Октябрь', id:'10'},
        {name: 'Ноябрь', id:'11'}, 
        {name: 'Декабрь', id:'12'}
      ]
    };
  }

  render(){
    const amount = this.props.filteredData.length;

    return (
      <div className='months-list-wrapper'>
        
        <h2 className='total'>Общее количество: {amount}</h2>
        <ul className='months-list' onPointerOver={(e) => {
            this.props.getFilteredData(e.target.id, this.props.peoples);
        }}>

        { 
          this.state.months.map((el) => {
            let classNameItem;
            if( amount <= 2 ){
              classNameItem = 'low';
            } else if ( amount <= 6 ){
              classNameItem = 'little';
            } else if( amount <= 10 ){
              classNameItem = 'medium';
            } else if( amount >= 11 ){
              classNameItem = 'high';
            };
            
            return (
              <li 
                key={ el.id }
                className={classNameItem} 
                id={el.id}> 
                {el.name}
              </li> 
            ) 
          })
        };
      </ul>  
    </div> 
    )
  };
};

const mapStateToProps  = (state) => ({
  peoples: state.peoples,
  filteredData: state.filteredData
});

const mapDispatchToProps = (dispatch) => ({
  getFilteredData: (month, data) => {dispatch(getFilteredData(month, data))},
}) ;

export default connect(mapStateToProps, mapDispatchToProps)(MonthItem);