const peoplesFetchDataSucces = (peoples) => (
  {
    type: 'PEOPLES_FETCH_DATA_SUCCES',
    peoples
  }
)

const startDataReciving = (url) => {
  return (dispatch) => {
    fetch(url)
      .then( res => {
        if(!res.ok){
          throw new Error(res.statusText);
        }
        return res;
      })
      .then( res => res.json())
      .then( peoples => {
        dispatch(peoplesFetchDataSucces(peoples))
      });
  };
};

export default startDataReciving;