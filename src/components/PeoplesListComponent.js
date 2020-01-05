import React from 'react'
import { connect } from 'react-redux';
import { PeoplesListItem } from './PeoplesListItem'

const PeoplesList = (props) => (
  <div className='peoples-list-wrapper'>
    <h2>Список:</h2>
    <ul className='peoples-list'>
      {
        props.filteredData.length === 0 ? (
          <p>No data</p>
        ) : (
          props.filteredData.map((el) => {
            return <PeoplesListItem key={el.id} {...el} />
          })
        )
      }          
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  peoples: state.peoples,
  filter: state.filter,
  filteredData: state.filteredData
})

export default connect(mapStateToProps)(PeoplesList);
