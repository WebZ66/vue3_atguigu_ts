export const getTime = (): string => {
  let hours = new Date().getHours()
  let min = new Date().getMinutes()
  let second = new Date().getSeconds()
  return `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${
    second < 10 ? `0${second}` : second
  }`
}
