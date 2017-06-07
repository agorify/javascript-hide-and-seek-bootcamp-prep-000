function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var elem = document.querySelector('#grand-node');
  while(elem.children[0] !== undefined) {
    elem = elem.children[0];
  }
  return elem;
}

function increaseRankBy(n) {
  const rankElem = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < rankElem.length; i++) {
    rankElem[i].innerHTML = parseInt(rankElem[i].innerHTML) + n ;
  }
}
