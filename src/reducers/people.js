export default (state = [], action) => {
  switch (action.type) {
    case 'PEOPLE_FETCH_DATA_SUCCES':
      return action.people;
    default:
      return state;
  }
};