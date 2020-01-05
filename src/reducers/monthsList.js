const defaultMonthsListState = [
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
];

export default (state = defaultMonthsListState, action) => state;