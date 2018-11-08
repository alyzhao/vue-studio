// let item = {
//   coor: [1226,192],
//   areaNo: 'J101',
//   reserve: false
// }

// let result1 = []
// let x = 1223, y = 190
// for (let i = 0, j = 0; i < 14; i ++, j++) {
//   if ([2, 5, 8, 11, 14, 15, 18].indexOf(j) !== -1) {
//     i --
//     continue
//   }
//   let coor = [x, y + j * 84]
//   let areaNo = 'J1' + (i + 1 > 10 ? i + 1 : '0' + (i + 1))
//   let reserve = false
//   result1.push({
//     coor, areaNo, reserve
//   })
// }

let emptyCell = [[4, 6], [7, 16], [7, 17]]
for (let i = 0; i < 21; i ++) {
  if (i !== 16 || i !== 17) {
    emptyCell.push([8, i])    
  }
}


var zoneDataB1 = [{
  zonePoints: '1220,187 1220,1950 2160,1950 2160,187',
  zoneName: 'J区',
  zoneNameX: 1654,
  zoneNameY: 1055,
  zoneLetter: 'J',
  active: false,
  cellList: generateCell([1223,190], 8, 14, [2, 5, 8], [2, 5, 8, 11, 14, 15, 18], emptyCell)
}]



function generateCell (coor, xMax, yMax, emptyX, emptyY, emptyCell) {
  let coor1 = coor[0]
  let coor2 = coor[1]
  let result1 = []
  for (let x = 0, xCount = 0; x < xMax; x ++, xCount ++) {
    if (emptyX.indexOf(xCount) !== -1) {
      x --
      continue
    }
    for (let y = 0, yCount = 0; y < yMax; y ++, yCount ++) {
      if (emptyY.indexOf(yCount) !== -1) {
        y --
        continue
      }
      let emptyIndex = emptyCell.findIndex(item => item[0] == xCount && item[1] == yCount)
      if (emptyIndex !== -1) {
        continue
      }
      let coor = [coor1 + xCount * 84, coor2 + yCount * 84]
      let areaNo = null
      if (x >= 4) {
        areaNo = 'J' + (x + 2) + (y + 1 >= 10 ? y + 1 : '0' + (y + 1))
      } else {
        areaNo = 'J' + (x + 1) + (y + 1 >= 10 ? y + 1 : '0' + (y + 1))
      }
      let reserve = false
      result1.push({
        coor, areaNo, reserve
      })
    }
  }
  return result1
}

// let jCell = generateCell([])