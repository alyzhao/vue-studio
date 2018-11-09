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
generateQ()
