const riot = require("riot")

// require("./example-tag")
riot.tag2("example-tag", '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><svg xmlns="http://www.w3.org/2000/svg"><rect height="100" width="100"></rect></svg>', 'example-tag,[data-is="example-tag"]{ display: block; } example-tag p,[data-is="example-tag"] p{ width: 80em; }', "", function(opts) {
  var add = function(a, b) {
    return a + b;
  };
  console.log(add(5, 5));
})

riot.mount("*")
