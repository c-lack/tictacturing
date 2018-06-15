export const getActiveBox = (prevMove) => {
  let box1 = [0,3,6,27,30,33,54,57,60]
  if (box1.includes(prevMove)) {
    return 1
  }
  let box2 = box1.map(x => x+1)
  if (box2.includes(prevMove)) {
    return 2
  }
  let box3 = box2.map(x => x+1)
  if (box3.includes(prevMove)) {
    return 3
  }
  let box4 = box1.map(x => x+9)
  if (box4.includes(prevMove)) {
    return 4
  }
  let box5 = box4.map(x => x+1)
  if (box5.includes(prevMove)) {
    return 5
  }
  let box6 = box5.map(x => x+1)
  if (box6.includes(prevMove)) {
    return 6
  }
  let box7 = box4.map(x => x+9)
  if (box7.includes(prevMove)) {
    return 7
  }
  let box8 = box7.map(x => x+1)
  if (box8.includes(prevMove)) {
    return 8
  }
  return 9
}
