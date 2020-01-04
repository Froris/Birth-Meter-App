import React from 'react'
import { connect } from 'react-redux';
import { PeoplesListItem } from './PeoplesListItem'

// class PeoplesList extends React.Component {

//   render(){
//     return (
//       <React.Fragment>
//         <h3>Peoples</h3>
//         <ul>
//           {
//             this.props.filteredData.length === 0 ? (
//               <p>No data</p>
//             ) : (
//               this.props.filteredData.map((el) => {
//                 return <PeoplesListItem key={el.id} {...el} />
//               })
//             )
//           }          
//         </ul>
//       </React.Fragment>
//     )
//   }
// }

const PeoplesList = (props) => (
  <div className='peoples-list-wrapper'>
    <h3>Peoples</h3>
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
