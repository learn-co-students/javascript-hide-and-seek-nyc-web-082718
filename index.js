function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')

  for (let i = 0, i < rankedList.length; i++) {
    let children = rankedList[i].children

    for (let j = 0, j < children.length; j++) {
      children[j].innerText = parseIn(children[j].innerText) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let deeperNode = node.children[0]

  while (deeperNode) {
    node = deeperNode
    deeperNode = node.children[0]
  }
  return node
}
