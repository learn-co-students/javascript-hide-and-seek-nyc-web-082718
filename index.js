const getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.querySelector('#nested .target')
}

const deepestChild = () => {
  let grandNodeId = document.getElementById('grand-node')
  let theElement = grandNodeId.querySelector('div div div div div')
  return theElement
}


const increaseRankBy = (n) => {
  const lis = document.getElementById('app')
  .querySelectorAll('.ranked-list')

  for (let i = 0; i <lis.length; i++) {
    let children = lis[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

// increaseRankBy(6)
