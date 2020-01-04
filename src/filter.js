export default (peoples, filter) => {
  const filtered = peoples.filter((el) => {
    return el.firstName === filter
  })

  return filtered
}