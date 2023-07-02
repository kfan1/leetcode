/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let prev = 1;
  let prev2 = 0;
  let curr = 1;
  yield 0;
  while (true) {
    yield curr;
    curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }
};
