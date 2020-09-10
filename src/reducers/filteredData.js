export default (state = [], action) => {
  switch (action.type) {
    case "MOUSE_LEAVE":
      return [];
    case "01":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-01-");
      });
    case "02":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-02-");
      });
    case "03":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-03-");
      });
    case "04":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-04-");
      });
    case "05":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-05-");
      });
    case "06":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-06-");
      });
    case "07":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-07-");
      });
    case "08":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-08-");
      });
    case "09":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-09-");
      });
    case "10":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-10-");
      });
    case "11":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-11-");
      });
    case "12":
      return action.data.filter((el) => {
        const elDob = el.dob.split(" ").join("");
        return elDob.includes("-12-");
      });
    default:
      return state;
  }
};
