const peopleFetchDataSucces = (people) => (
  {
    type: 'PEOPLE_FETCH_DATA_SUCCES',
    people
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
      .then( people => {
        dispatch(peopleFetchDataSucces(people))
      });
  };
};

export default startDataReciving;