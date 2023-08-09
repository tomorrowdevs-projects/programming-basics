const {
  cleanForSortingNumbers,
  bubbleSortNumbers,
  selectionSortNumbers,
  insertionSortNumbers,
  quickSortNumbers,
  mergeSortNumbersArray,
  mergeSortNumbers,
  findParentIndex,
  findFirstChildIndex,
  buildMaxHeap,
  heapSortNumbers
} = require( './sort-modules.js' ); // For CommonJS environment

const numericList = [4,-10,3,5,1,7]; // Ordered: -10,1,3,4,5,7
const mixedList = [4,-10,'a','b','z',3,5,'d','hello','h',1,7];  // Ordered: -10,1,3,4,5,7
const listToClean1 = [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]; // Ordered: 0,3,5,5,2678
const listToClean2 = [7,1,'b',false,'a','a',undefined,[2],null]; // Ordered: 1,7
const list1Of2 = [2,3,0];
const list2Of2 = [2100,1,-20];

/** Test for cleanForSortingNumbers */
test("returns [4,-10,3,5,1,7] for [4,-10,3,5,1,7]", () => {
  expect( cleanForSortingNumbers( numericList ) ).toEqual( [4,-10,3,5,1,7] );
});
test("returns [4,-10,3,5,1,7] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( cleanForSortingNumbers( mixedList ) ).toEqual( [4,-10,3,5,1,7] );
});
test("returns [5,2678,0,5,3] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( cleanForSortingNumbers( listToClean1 ) ).toEqual( [5,2678,0,5,3] );
});
test("returns [7,1] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( cleanForSortingNumbers( listToClean2 ) ).toEqual( [7,1] );
});
test("returns 'hello' for 'hello'", () => {
  expect( cleanForSortingNumbers( 'hello' ) ).toEqual( 'hello' );
});
test("returns false for false", () => {
  expect( cleanForSortingNumbers( false ) ).toEqual( false );
});

/** Test for bubbleSortNumbers */
test("returns [4,-10,3,5,1,7] for [4,-10,3,5,1,7]", () => {
  expect( bubbleSortNumbers( numericList, 'TEST' ) ).toEqual( [4,-10,3,5,1,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,3,5,1,7]", () => {
  expect( bubbleSortNumbers( numericList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( bubbleSortNumbers( mixedList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [0,3,5,5,2678] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( bubbleSortNumbers( listToClean1 ) ).toEqual( [0,3,5,5,2678] );
});
test("returns [1,7] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( bubbleSortNumbers( listToClean2 ) ).toEqual( [1,7] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,3,5,1,7]", () => {
  expect( bubbleSortNumbers( numericList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( bubbleSortNumbers( mixedList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [2678,5,5,3,0] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( bubbleSortNumbers( listToClean1, 'DESC' ) ).toEqual( [2678,5,5,3,0] );
});
test("returns [7,1] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( bubbleSortNumbers( listToClean2, 'DESC' ) ).toEqual( [7,1] );
});
test("returns 'hello' for 'hello'", () => {
  expect( bubbleSortNumbers( 'hello' ) ).toEqual( 'hello' );
});
test("returns false for false", () => {
  expect( bubbleSortNumbers( false ) ).toEqual( false );
});

/** Test for selectionSortNumbers */
test("returns [4,-10,3,5,1,7] for [4,-10,3,5,1,7]", () => {
  expect( selectionSortNumbers( numericList, 'TEST' ) ).toEqual( [4,-10,3,5,1,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,3,5,1,7]", () => {
  expect( selectionSortNumbers( numericList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( selectionSortNumbers( mixedList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [0,3,5,5,2678] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( selectionSortNumbers( listToClean1 ) ).toEqual( [0,3,5,5,2678] );
});
test("returns [1,7] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( selectionSortNumbers( listToClean2 ) ).toEqual( [1,7] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,3,5,1,7]", () => {
  expect( selectionSortNumbers( numericList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( selectionSortNumbers( mixedList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [2678,5,5,3,0] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( selectionSortNumbers( listToClean1, 'DESC' ) ).toEqual( [2678,5,5,3,0] );
});
test("returns [7,1] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( selectionSortNumbers( listToClean2, 'DESC' ) ).toEqual( [7,1] );
});
test("returns 'hello' for 'hello'", () => {
  expect( selectionSortNumbers( 'hello' ) ).toEqual( 'hello' );
});
test("returns false for false", () => {
  expect( selectionSortNumbers( false ) ).toEqual( false );
});

/** Test for insertionSortNumbers */
test("returns [4,-10,3,5,1,7] for [4,-10,3,5,1,7]", () => {
  expect( insertionSortNumbers( numericList, 'TEST' ) ).toEqual( [4,-10,3,5,1,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,3,5,1,7]", () => {
  expect( insertionSortNumbers( numericList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( insertionSortNumbers( mixedList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [0,3,5,5,2678] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( insertionSortNumbers( listToClean1 ) ).toEqual( [0,3,5,5,2678] );
});
test("returns [1,7] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( insertionSortNumbers( listToClean2 ) ).toEqual( [1,7] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,3,5,1,7]", () => {
  expect( insertionSortNumbers( numericList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( insertionSortNumbers( mixedList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [2678,5,5,3,0] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( insertionSortNumbers( listToClean1, 'DESC' ) ).toEqual( [2678,5,5,3,0] );
});
test("returns [7,1] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( insertionSortNumbers( listToClean2, 'DESC' ) ).toEqual( [7,1] );
});
test("returns 'hello' for 'hello'", () => {
  expect( insertionSortNumbers( 'hello' ) ).toEqual( 'hello' );
});
test("returns false for false", () => {
  expect( insertionSortNumbers( false ) ).toEqual( false );
});

/** Test for quickSortNumbers */
test("returns [4,-10,3,5,1,7] for [4,-10,3,5,1,7]", () => {
  expect( quickSortNumbers( numericList, 'TEST' ) ).toEqual( [4,-10,3,5,1,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,3,5,1,7]", () => {
  expect( quickSortNumbers( numericList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( quickSortNumbers( mixedList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [0,3,5,5,2678] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( quickSortNumbers( listToClean1 ) ).toEqual( [0,3,5,5,2678] );
});
test("returns [1,7] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( quickSortNumbers( listToClean2 ) ).toEqual( [1,7] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,3,5,1,7]", () => {
  expect( quickSortNumbers( numericList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( quickSortNumbers( mixedList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [2678,5,5,3,0] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( quickSortNumbers( listToClean1, 'DESC' ) ).toEqual( [2678,5,5,3,0] );
});
test("returns [7,1] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( quickSortNumbers( listToClean2, 'DESC' ) ).toEqual( [7,1] );
});
test("returns 'hello' for 'hello'", () => {
  expect( quickSortNumbers( 'hello' ) ).toEqual( 'hello' );
});
test("returns false for false", () => {
  expect( quickSortNumbers( false ) ).toEqual( false );
});

/** Test for mergeSortNumbers */
test("returns [4,-10,3,5,1,7] for [4,-10,3,5,1,7]", () => {
  expect( mergeSortNumbers( numericList, 'TEST' ) ).toEqual( [4,-10,3,5,1,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,3,5,1,7]", () => {
  expect( mergeSortNumbers( numericList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( mergeSortNumbers( mixedList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [0,3,5,5,2678] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( mergeSortNumbers( listToClean1 ) ).toEqual( [0,3,5,5,2678] );
});
test("returns [1,7] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( mergeSortNumbers( listToClean2 ) ).toEqual( [1,7] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,3,5,1,7]", () => {
  expect( mergeSortNumbers( numericList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( mergeSortNumbers( mixedList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [2678,5,5,3,0] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( mergeSortNumbers( listToClean1, 'DESC' ) ).toEqual( [2678,5,5,3,0] );
});
test("returns [7,1] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( mergeSortNumbers( listToClean2, 'DESC' ) ).toEqual( [7,1] );
});
test("returns 'hello' for 'hello'", () => {
  expect( mergeSortNumbers( 'hello' ) ).toEqual( 'hello' );
});
test("returns false for false", () => {
  expect( mergeSortNumbers( false ) ).toEqual( false );
});

/** Test for heapSortNumbers */
test("returns [4,-10,3,5,1,7] for [4,-10,3,5,1,7]", () => {
  expect( heapSortNumbers( numericList, 'TEST' ) ).toEqual( [4,-10,3,5,1,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,3,5,1,7]", () => {
  expect( heapSortNumbers( numericList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [-10,1,3,4,5,7] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( heapSortNumbers( mixedList ) ).toEqual( [-10,1,3,4,5,7] );
});
test("returns [0,3,5,5,2678] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( heapSortNumbers( listToClean1 ) ).toEqual( [0,3,5,5,2678] );
});
test("returns [1,7] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( heapSortNumbers( listToClean2 ) ).toEqual( [1,7] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,3,5,1,7]", () => {
  expect( heapSortNumbers( numericList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [7,5,4,3,1,-10] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( heapSortNumbers( mixedList, 'DESC' ) ).toEqual( [7,5,4,3,1,-10] );
});
test("returns [2678,5,5,3,0] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( heapSortNumbers( listToClean1, 'DESC' ) ).toEqual( [2678,5,5,3,0] );
});
test("returns [7,1] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( heapSortNumbers( listToClean2, 'DESC' ) ).toEqual( [7,1] );
});
test("returns 'hello' for 'hello'", () => {
  expect( heapSortNumbers( 'hello' ) ).toEqual( 'hello' );
});
test("returns false for false", () => {
  expect( heapSortNumbers( false ) ).toEqual( false );
});

/** Test for mergeSortNumbersArray */
test("returns [2,3,0,2100,1,-20] for [2,3,0] and [2100,1,-20]", () => {
  expect( mergeSortNumbersArray( list1Of2, list2Of2 ) ).toEqual( [2,3,0,2100,1,-20] );
});
test("returns [2,3,0,2100,1,-20] for [2100,1,-20] and [2,3,0]", () => {
  expect( mergeSortNumbersArray( list2Of2, list1Of2 ) ).toEqual( [2,3,0,2100,1,-20] );
});
test("returns [1,2,3,4,5,6] for [1,3,5] and [2,4,6]", () => {
  expect( mergeSortNumbersArray( [1,3,5], [2,4,6] ) ).toEqual( [1,2,3,4,5,6] );
});
test("returns [6,5,4,3,2,1] for [1,3,5], [2,4,6] and 'DESC'", () => {
  expect( mergeSortNumbersArray( [1,3,5], [2,4,6], 'DESC' ) ).toEqual( [2,4,6,1,3,5] );
});
test("returns [2,3,0] for [2,3,0] and 'hello'", () => {
  expect( mergeSortNumbersArray( list1Of2, 'hello' ) ).toEqual( [[2,3,0],'hello'] );
});
test("returns [2100,1,-20] for 'hello' and [2100,1,-20]", () => {
  expect( mergeSortNumbersArray( 'hello', list2Of2 ) ).toEqual( ['hello',[2100,1,-20]] );
});

/** Test for findParentIndex */
test("returns 0 for 2", () => {
  expect( findParentIndex( 2 ) ).toEqual( 0 );
});
test("returns false for 'hello'", () => {
  expect( findParentIndex( 'hello' ) ).toEqual( false );
});
test("returns 2 for 5", () => {
  expect( findParentIndex( 5 ) ).toEqual( 2 );
});
test("returns 4 for 9", () => {
  expect( findParentIndex( 9 ) ).toEqual( 4 );
});
test("returns false for 0", () => {
  expect( findParentIndex( 0 ) ).toEqual( false );
});

/** Test for findFirstChildIndex */
test("returns 1 for 0", () => {
  expect( findFirstChildIndex( 0 ) ).toEqual( 1 );
});
test("returns false for 'hello", () => {
  expect( findFirstChildIndex( 'hello' ) ).toEqual( false );
});
test("returns 5 for 2", () => {
  expect( findFirstChildIndex( 2 ) ).toEqual( 5 );
});
test("returns 9 for 4", () => {
  expect( findFirstChildIndex( 4 ) ).toEqual( 9 );
});
test("returns 1 for 0", () => {
  expect( findFirstChildIndex( 0 ) ).toEqual( 1 );
});

/** Test for buildMaxHeap */
test("returns [7,5,4,-10,1,3] for [4,-10,3,5,1,7]", () => {
  expect( buildMaxHeap( numericList ) ).toEqual( [7,5,4,-10,1,3] );
});
test("returns [7,5,4,-10,1,3] for [4,-10,'a','b','z',3,5,'d','hello','h',1,7]", () => {
  expect( buildMaxHeap( mixedList ) ).toEqual( [7,5,4,-10,1,3] );
});
test("returns [2678,5,0,5,3] for [5,'hello',2678,false,true,'b',[7,9,0],0,5,3,{'id':68}]", () => {
  expect( buildMaxHeap( listToClean1 ) ).toEqual( [2678,5,0,5,3] );
});
test("returns [7,1] for [7,1,'b',false,'a','a',undefined,[2],null]", () => {
  expect( buildMaxHeap( listToClean2 ) ).toEqual( [7,1] );
});
test("returns [] for []", () => {
  expect( buildMaxHeap( [] ) ).toEqual( [] );
});
test("returns Infinity for Infinity", () => {
  expect( buildMaxHeap( Infinity ) ).toEqual( Infinity );
});