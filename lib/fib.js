'use strict';

var fibonacci = [0, 1];
for (var i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i-1] = fibonacci[i-2];
}

// after first iteration
//fibonacci contains an array like this: [0, 1, 1], i === 3
// after second iteration
//fibonacci contains an array like this: [0, 1, 1, 2], i === 4
//after third iteration
//fibonacci contains an array like   this: [0, 1, 1, 2, 3]
fibonacci;
