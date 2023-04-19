const {
  isBoolean,
  isLeapYear,
  parseOrdinalNumber,
  parseOrdinalNumberNew,
  isDayValue,
  isMonthValue,
  isYearValue,
  verifyDay,
  calculateFebruaryDays
} = require( './modules.js' ); // For CommonJS environment


/** Test for isBoolean */
test('returns true for true', () => {
  expect( isBoolean( true ) ).toEqual( true );
});

test('returns true for false', () => {
  expect( isBoolean( false ) ).toEqual( true );
});

test('returns false for 0', () => {
  expect( isBoolean( 0 ) ).toEqual( false );
});


/** Test for isLeapYear */
test('returns true for 1996', () => {
  expect( isLeapYear( 1996 ) ).toEqual( true );
});

test('returns false for 1995', () => {
  expect( isLeapYear( 1995 ) ).toEqual( false );
});

test('returns false for 2000', () => {
  expect( isLeapYear( 2000 ) ).toEqual( true );
});

test('returns true for 1700', () => {
  expect( isLeapYear( 1700 ) ).toEqual( false );
});


/** Test for parseOrdinalNumber */
test('returns first for 1', () => {
  expect( parseOrdinalNumber( 1 ) ).toEqual( 'first' );
});

test('returns tenth for 10', () => {
  expect( parseOrdinalNumber( 10 ) ).toEqual( 'tenth' );
});

test('returns twelfth for 12', () => {
  expect( parseOrdinalNumber( 12 ) ).toEqual( 'twelfth' );
});

test('returns false for 13', () => {
  expect( parseOrdinalNumber( 13 ) ).toEqual( '' );
});


/** Test for parseOrdinalNumberNew */
test('returns 1st for 1', () => {
  expect( parseOrdinalNumberNew( 1, 10 ) ).toEqual( '1st' );
});

test('returns 10th for 10', () => {
  expect( parseOrdinalNumberNew( 10, 15 ) ).toEqual( '10th' );
});

test('returns 32nd for 32', () => {
  expect( parseOrdinalNumberNew( 32, 100 ) ).toEqual( '32nd' );
});

test('returns 33rd for 33', () => {
  expect( parseOrdinalNumberNew( 33, 100 ) ).toEqual( '33rd' );
});


/** Test for isDayValue */
test('returns true for 3', () => {
  expect( isDayValue( 3 ) ).toEqual( true );
});

test('returns true for 31', () => {
  expect( isDayValue( 31 ) ).toEqual( true );
});

test('returns false for 32', () => {
  expect( isDayValue( 32 ) ).toEqual( false );
});

test('returns false for "test"', () => {
  expect( isDayValue( "test" ) ).toEqual( false );
});


/** Test for isMonthValue */
test('returns true for 1', () => {
  expect( isMonthValue( 1 ) ).toEqual( true );
});

test('returns true for 12', () => {
  expect( isMonthValue( 12 ) ).toEqual( true );
});

test('returns false for 13', () => {
  expect( isMonthValue( 13 ) ).toEqual( false );
});

test('returns false for "test"', () => {
  expect( isMonthValue( "test" ) ).toEqual( false );
});


/** Test for isYearValue */
test('returns true for 1', () => {
  expect( isYearValue( 1 ) ).toEqual( true );
});

test('returns true for 16', () => {
  expect( isYearValue( 16 ) ).toEqual( true );
});

test('returns false for -23', () => {
  expect( isYearValue( -23 ) ).toEqual( false );
});

test('returns false for "test"', () => {
  expect( isYearValue( "test" ) ).toEqual( false );
});


/** Test for verifyDay */
test('returns true for 24, 12, 992', () => {
  expect( verifyDay( 24, 12, 1996 ) ).toEqual( true );
});

test('returns true for 29, 2, 1996', () => {
  expect( verifyDay( 29, 2, 1996 ) ).toEqual( true );
});

test('returns false for 29, 2, 1997', () => {
  expect( verifyDay( 29, 2, 1997 ) ).toEqual( false );
});

test('returns false for 32, 13, -1000', () => {
  expect( verifyDay( 32, 13, -1000 ) ).toEqual( false );
});


/** Test for calculateFebruaryDays */
test('returns 29 for 1996', () => {
  expect( calculateFebruaryDays( 1996 ) ).toEqual( 29 );
});

test('returns 28 for 1997', () => {
  expect( calculateFebruaryDays( 1997 ) ).toEqual( 28 );
});

test('returns false for "test"', () => {
  expect( calculateFebruaryDays( "test" ) ).toEqual( false );
});