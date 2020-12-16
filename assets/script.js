var treeHeight = +prompt('Enter a tree height');
var xmas = '';

if ((!treeHeight) || (treeHeight < 3) || (treeHeight > 10)) {
  alert('Please, enter a number between 3 and 10');
} else {
  for (i = 0; i < treeHeight; i++) {
    for (j = treeHeight - 1; j > i; j--) {
      xmas += ' ';
    }
  
    for (k = 0; k <= (i * 2); k++) {
      xmas += "*";
    }
    
    xmas += '\n';
  }
  
  alert(xmas);
}

