import React from 'react'
import { PeopleListItem } from './PeopleListItem'

const PeopleList = (props) => (
  <div className='people-list-wrapper'>
    <h2>Список:</h2>
    <ul className='people-list'>
      {
        props.peopleList.length === 0 ? (
          <p>No data</p>
        ) : (
          props.peopleList.map((el) => {
            return <PeopleListItem key={el.id} {...el} /> 
          })
        )
      }          
    </ul>
  </div>
)

export default PeopleList;
