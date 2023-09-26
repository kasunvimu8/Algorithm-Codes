const towerOfHanoi = (n, from, to, via) => {
  //some comment
  if (n === 1) {
    console.log('move disk ' + n + ' from -> ' + from + ' to -> ', to);
    return 1;
  }

  towerOfHanoi(n - 1, from, via, to);
  console.log('move disk  ' + n + ' from -> ' + from + ' to -> ', to);
  towerOfHanoi(n - 1, via, to, from);
}

towerOfHanoi(3, 'A', ' C', ' B');