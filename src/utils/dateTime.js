export const nowHoursMinutes = () => {
  let hour = new Date().getHours()
  let min = Math.ceil(new Date().getMinutes() / 15) * 15
  
  if (min === 60) {
    min = 0
    hour++
  }
  
  if (hour === 24) hour = 0
  hour = hour >= 10 ? `${hour}` : `0${hour}`
  min = min >= 10 ? `${min}` : `0${min}`

  return `${hour}:${min}`
}
