const findByClass = (className) => {
  const results = [];
  const root = document.body;
  const _findByClassNameHelper = (className, node) => {
    if (node.classList.contains(className)) {
      results.push(node);
    }
    for (const element of node.children) {
      _findByClassNameHelper(className, element);
    }
  };
  _findByClassNameHelper(className, root);
  return results;
};

const result = findByClass("a");
console.log(result);


