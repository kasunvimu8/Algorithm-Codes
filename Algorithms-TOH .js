// rods A,B,C
// Plates 1 (Smallest) ,2 ,3
// number of plats 3

const towerOfHanoi = (n, from, to, via) => {
  if (n === 1) {
    console.log('move disk ' + n + ' from -> ' + from + ' to -> ', to);
    return 1;
  }

  towerOfHanoi(n - 1, from, via, to);
  console.log('move disk  ' + n + ' from -> ' + from + ' to -> ', to);
  towerOfHanoi(n - 1, via, to, from);
}

towerOfHanoi(3, 'A', ' C', ' B');