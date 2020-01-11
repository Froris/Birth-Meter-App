import React from 'react'
import { connect } from 'react-redux';
import { PeopleListItem } from './PeopleListItem'

const PeopleList = (props) => (
  <div className='people-list-wrapper'>
    <h2>Список:</h2>
    <ul className='people-list'>
      {
        props.filteredData.length === 0 ? (
          <p>No data</p>
        ) : (
          props.filteredData.map((el) => {
            return <PeopleListItem key={el.id} {...el} /> 
          })
        )
      }          
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  people: state.people,
  filter: state.filter,
  filteredData: state.filteredData
})

export default connect(mapStateToProps)(PeopleList);
