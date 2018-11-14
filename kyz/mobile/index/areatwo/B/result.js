const fs = require('fs')
const path = require('path')
const { generateCell } = require('./areaData')

function writeFile (fileName, content) {
  fs.writeFile(path.join(__dirname, './result/', fileName + '.js'), content, err => {
    if (err) throw err
    console.log('save successed!')
  })
}

function generateJ () {
  let cellList = generateCell([1223,190], 8, 14, [2, 5, 8], [2, 5, 8, 11, 14, 15, 18], [[4, 6], [4, 13], [7, 16], [7, 17]])
  let Jcontent = 'let JCellList = ' + JSON.stringify(cellList, null, 2) + '\n'
  writeFile('JCell', Jcontent)
}

// generateJ()

function generateCellK (coor, xMax, yMax, emptyX, emptyY, emptyCell) {
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
      areaNo = 'K' + (x + 1) + (y + 8 >= 10 ? y + 8 : '0' + (y + 8))
      let reserve = false
      result1.push({
        coor, areaNo, reserve
      })
    }
  }
  return result1
}

function generatek () {
  let cellList = generateCellK([2402, 1281], 9, 5, [3, 7], [1, 2, 5], [[6, 0]])
  let Kcontent = 'let KCellList = ' + JSON.stringify(cellList, null, 2) + '\n'
  writeFile('KCell', Kcontent)
}
// generatek()

function generateCellQ (coor, xMax, yMax, emptyX, emptyY, emptyCell) {
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
        areaNo = 'Q' + (x + 2) + (y + 1 >= 10 ? y + 1 : '0' + (y + 1))
      } else {
        areaNo = 'Q' + (x + 1) + (y + 1 >= 10 ? y + 1 : '0' + (y + 1))
      }
      let reserve = false
      result1.push({
        coor, areaNo, reserve
      })
    }
  }
  return result1
}

function generateQ () {
  let cellList = generateCellQ([1222,2182], 8, 14, [2, 5, 8], [2, 5, 8, 11, 14, 15, 18], [[4, 6], [4, 13], [7, 16], [7, 17]])
  let Qcontent = 'let QCellList = ' + JSON.stringify(cellList, null, 2) + '\n'
  writeFile('QCell', Qcontent)
}
// generateQ()

// 105 105 107 107

function generateBCell (coor, letter, x1, y1, xMax, yMax) {
  let result = []
  let coor1 = coor[0]
  let coor2 = coor[1]
  for (let i = 0, x = x1; x < xMax; x ++, i ++) {
    console.log("x: ", x)
    for (let j = 0, y = y1; y < yMax; y ++, j ++) {
      console.log("y: ", y)
      let coor = [coor1 + i * 107, coor2 + j * 107]
      let areaNo = letter + x + (y >= 10 ? y : '0' + y)
      result.push({coor, areaNo, reserve: false})
    }
  }
  return result
}

function generateA () {
  let cellList = generateBCell([1007,1300], 'A', 1, 6, 3, 9)
  console.log(cellList)
  let content = JSON.stringify(cellList, null, 2) + '\n'
  writeFile('ACell4', content)
}
// generateA()

function generateH () {
  let cellList = generateBCell([2950,3888], 'G', 2, 10, 3, 13)
  console.log(cellList)
  let content = JSON.stringify(cellList, null, 2) + '\n'
  writeFile('GCell4', content)
}
// generateH()

function generateGcell (coor, letter, x1, y1, xMax, yMax) {
  let result = []
  let coor1 = coor[0]
  let coor2 = coor[1]
  for (let i = 0, x = x1; x < xMax; x ++, i ++) {
    console.log("x: ", x)
    if ([7].indexOf(i) !== -1) {
      x --
      continue
    }
    for (let j = 0, y = y1; y < yMax; y ++, j ++) {
      if ([2].indexOf(j) !== -1) {
        y --
        continue
      }
      console.log("y: ", y)
      let coor = [coor1 + i * 107, coor2 + j * 107]
      // let areaNo = letter + x + (y >= 10 ? y : '0' + y)
      let areaNo = letter + y + (x >= 10 ? x : '0' + x)
      // if (y >= 9) {
      //   areaNo = letter + x + ((y + 2) >= 10 ? (y + 2) : '0' + (y + 2))
      // }
      // if (y >= 11) {
      //   areaNo = letter + x + ((y + 3) >= 10 ? (y + 3) : '0' + (y + 3))
      // }
      result.push({coor, areaNo, reserve: false})
    }
  }
  return result
}
function generateG () {
  let cellList = generateGcell([3486,1955], 'G', 5, 1, 7, 16)
  console.log(cellList)
  let content = JSON.stringify(cellList, null, 2) + '\n'
  writeFile('GCell2', content)
}

// let result = []
// for (let i = 1; i <= 6; i ++) {
//   let coor = [2412, 1955 + (i - 1) * 322]
//   let areaNo = 'G10' + i
//   let item = {
//     coor,
//     areaNo,
//     width: 321,
//     height: 213,
//     textPosition: [63, 130, 8],
//     "reserve": false
//   }
//   result.push(item)
// }
// let content = JSON.stringify(result, null, 2) + '\n'
// console.log(content)
// writeFile('GCell5', content)

function generateCenter () {
  // 212 321 / 1 4 6
  // 212 213 / 2 3 5
  // 105 间隔
  let result = []
  let x = 1974
  let h = 1956

  for (let i = 1; i <= 4; i ++) {
    if (i > 1) {
      if ([1, 4, 6].indexOf(i - 1) == -1) {
        h += 321 + 2
      } else {
        h += 213 + 2
      }
      if ([2, 4].indexOf(i - 1) !== -1) {
        h += 105 + 2
      }
    }
    let coor = [x, h]
    let areaNo = 'B20' + i
    let item = {
      coor,
      areaNo,
      width: 212,
      height: [1, 4, 6].indexOf(i) == -1 ? 321 : 213,
      textPosition: [1, 4, 6].indexOf(i) == -1 ? [17, 174, 8] : [17, 130, 8],
      "reserve": false
    }
    result.push(item)
  }
  let content = JSON.stringify(result, null, 2) + '\n'
  console.log(content)
  writeFile('BCell2', content)
}
// generateCenter()

function generateC () {
  let cellList = generateGcell([1438,1955], 'C', 4, 1, 5, 12)
  console.log(cellList)
  let content = JSON.stringify(cellList, null, 2) + '\n'
  writeFile('CCell3', content)
}
// generateC()

// let cellList = generateBCell([1651, 3888], 'C', 5, 3, 7, 6)
// console.log(cellList)
// let content = JSON.stringify(cellList, null, 2) + '\n'
// writeFile('CCell4', content)

function generateD () {
  let cellList = generateGcell([2413,4852], 'E', 2, 1, 5, 2)
  console.log(cellList)
  let content = JSON.stringify(cellList, null, 2) + '\n'
  writeFile('ECell3', content)
}
// generateD()
function generateK2 () {
  let result = []
  for (let x = 1, i = 0; x < 10; x ++, i ++ ) {
    if ([3, 7].indexOf(i) !== -1) {
      x --
      continue
    }
    for (let y = 14, j = 0; y > 9; y --, j ++) {
      if ([2, 5].indexOf(j) !== -1) {
        y ++
        continue
      }
      let coor = [2398 + i * 84, 2183 + j * 84]
      let areaNo = null
      areaNo = 'K' + x + y
      let reserve = false
      result.push({
        coor, areaNo, reserve
      })
    }
  }
  let content = JSON.stringify(result, null, 2) + '\n'
  writeFile('KCell02', content)  
}
// generateK2()

function generateB () {
  // 212 321 / 1 4 6
  // 212 213 / 2 3 5
  // 105 x间隔
  // 1
  let result = []
  let x1 = 1651
  let x2 = 1974

  for (let i = 1; i <= 2; i ++) {
    let h = 1955
    for (let j = 1; j <= 4; j ++) {
      let height = 321
      let textPosition = [17, 174, 8]
      if (j == 1) {
        height = 213
        textPosition = [17, 130, 8]
      }
      let width = 212
      let x = i == 1 ? 1651 : 1974
      let areaNo = 'B' + i + '0' + j
      if (j == 4) {
        areaNo = 'C' + (4 + i) + '02'
      }
      let y = h
      result.push({
        coor: [x, h],
        areaNo,
        width,
        height,
        textPosition,
        reserve: false
      })
      h += 105 + 2 + height
    }
  }  

  let content = JSON.stringify(result, null, 2) + '\n'
  console.log(content)
  writeFile('BCell3', content)
}
// generateB()

// const GCell1 = require('./result/GCell1.js')
// console.log(GCell1)

// GCell1.forEach(item => {
//   item.coor[0] = item.coor[0] + 107 * 2 
// })
// writeFile('GCell1(1)', JSON.stringify(GCell1, null, 2))
// let result = []
// let m = [['b', 'e', 'f'], ['a', 'b', 'c']]
// for (let i = 0; i < 2; i++) {
//   let x0 = 2931
//   let y0 = 3456
//   console.log('i', i)
//   for (let j = 0; j < 3; j ++) {
//     let x = x0 + i * 107
//     let y = y0 + j * 107
//     console.log("j", j)
//     result.push({
//       coor: [x, y],
//       areaNo: 'G206' + m[i][j],
//       reserve: false,
//       textPosition: [0, 65, 3.5]
//     })
//   }
// }
// console.log(result)
// writeFile('GCell7', JSON.stringify(result, null, 2))

// let result = []
// for (let i = 0; i < 6; i ++) {
//   let x = 2638 + i * 107
//   let y = 5276
//   result.push({
//     coor: [x, y],
//     areaNo: 'E10' + (i + 2),
//     reserves: false
//   })
// }
// writeFile('ECell4', JSON.stringify(result, null, 2))

const fcell = require('./result/ECell5.js')
console.log(fcell)

fcell.forEach(item => {
  item.coor[0] = item.coor[0] - 98
  item.coor[1] = item.coor[1] - 8
})
writeFile('ECell5(1)', JSON.stringify(fcell, null, 2))