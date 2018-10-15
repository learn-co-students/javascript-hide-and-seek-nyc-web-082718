const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.querySelector(`#nested .target`)
}

const deepestChild = () =>{
  let parent = document.querySelector(`#grand-node`)
  let child = parent.children[0]

  while (child) {
  parent = child
  child = parent.children[0]
}

  return parent
}

const increaseRankBy = (n) =>{
  let firstList = document.getElementsByClassName(`ranked-list`)[0].children
  let secondList = document.getElementsByClassName(`ranked-list`)[1].children
  // return firstList.map(ele => parseInt(ele.innerText) + 1)
  // firstList.children[0].innerText = parseInt(firstList.children[0].innerText) + 1

  for (let i = 0; i < firstList.length; i++) {
    firstList[i].innerText = parseInt(firstList[i].innerText) + n
  }
  for (let j = 0; j < secondList.length; j++) {
    secondList[j].innerText = parseInt(secondList[j].innerText) + n
  }

}
