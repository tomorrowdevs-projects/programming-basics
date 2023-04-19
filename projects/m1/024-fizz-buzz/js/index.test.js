const { playFizzBuzz } = require( './index.js' ); // For CommonJS environment

test('returns "fizz" for 3', () => {
  expect( playFizzBuzz( 3 ) ).toEqual( 'fizz' );
});

test('returns "buzz" for 20', () => {
  expect( playFizzBuzz( 20 ) ).toEqual( 'buzz' );
});

test('returns "fizz and buzz" for 15', () => {
  expect( playFizzBuzz( 15 ) ).toEqual( 'fizz and buzz' );
});