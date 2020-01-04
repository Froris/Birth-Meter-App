export default (state = [], action) => {
  switch (action.type) {
    case 'PEOPLES_FETCH_DATA_SUCCES':
      return action.peoples;
    default:
      return state;
  }
};