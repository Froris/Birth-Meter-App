export default (state = [], action) => {
  switch (action.type) {
    case 'MOUSE_LEAVE':
      return [];
    case '01':
      return action.data.filter((el) => {
        return el.dob.includes('-01-')
      })
    case '02':
      return action.data.filter((el) => {
        return el.dob.includes('-02-')
      })
    case '03':
      return action.data.filter((el) => {
        return el.dob.includes('-03-')
      })
    case '04':
      return action.data.filter((el) => {
        return el.dob.includes('-04-')
      })
    case '05':
      return action.data.filter((el) => {
        return el.dob.includes('-05-')
      })
    case '06':
      return action.data.filter((el) => {
        return el.dob.includes('-06-')
      })
    case '07':
      return action.data.filter((el) => {
        return el.dob.includes('-07-')
      })
    case '08':
      return action.data.filter((el) => {
        return el.dob.includes('-08-')
      })
    case '09':
      return action.data.filter((el) => {
        return el.dob.includes('-09-')
      })
    case '10':
      return action.data.filter((el) => {
        return el.dob.includes('-10-')
      })
    case '11':
      return action.data.filter((el) => {
        return el.dob.includes('-11-')
      })
    case '12':
      return action.data.filter((el) => {
        return el.dob.includes('-12-')
      })
    default:
    return state;
  }
};