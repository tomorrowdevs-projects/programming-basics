/*
The distance between 2 points can be calculated using the following formula:
Distance = Square root of the absolute value of ( (Abscissa of the 2nd point - Abscissa of the 1st point)² - (Ordinate of the 2nd point - Ordinate of the 1st point)² )
In JavaScript:
const distance = Math.sqrt( Math.pow( point2X - point1X, 2) - Math.pow( point2Y - point1Y, 2) );

Simple formulas can be used in the following cases:

1) If the points are aligned on the axis of ordinate
Distance = Absolute value of ( Abscissa of the 2nd point - Abscissa of the 1st point )
In JavaScript:
const distance = Math.abs( point2X - point1X );

2) If the points are aligned on the axis of abscissae
Distance = Absolute value of (Ordinate of the 2nd point - Ordinate of the 1st point)
In JavaScript:
const distance = Math.abs( point2Y - point1Y );

3) If one point is the origin of the axis
Distance = Square root of the absolute value of ( (Abscissa of the non-origin of the axis point)² - (Ordinate of the non origin of the axis point)² )
In JavaScript:
const distance = Math.sqrt( Math.pow( nonOriginPointX, 2) + Math.pow( nonOriginPointY, 2) );

4) If the absolute value of the difference between ascissas of the two points are equal to the difference between ordinatas of the two points
Distance = Absolute value of (Difference between ascissas of the two points multiplied by square of 2)
In JavaScript:
const distance = Math.abs( ( point2.x - point1.x ) * Math.sqrt(2) );
*/

// const prompt = require("prompt-sync")({ sigint: true});
function askPointCoordinates( requestSession = 'next' ){

    if( requestSession === 'first' || requestSession === 'next' ){
        const sentinel = '';
        const messages = {
            x: {
                first: 'Enter the first x-coordinate:',
                next: 'Enter the next x-coordinate (blank to quit):',
            },
            y: {
                first: 'Enter the first y-coordinate:',
                next: 'Enter the next y-coordinate (blank to quit):',
            },
        };

        let pointX = prompt( messages['x'][requestSession], 'Example: 3');

        if( requestSession === 'next' ) {
            if( pointX.trim() === sentinel ){
                return false;
            }
        }

        pointX = Number( pointX );
        const pointY = Number( prompt( messages['y'][requestSession], 'Example: 3') );

        if( ! isNaN ( pointX ) && ! isNaN ( pointY ) ){
            return {x: pointX, y: pointY};
        } else {
            console.log( 'Please enter a number.' );
        }
        
        return askPointCoordinates( requestSession );
    }

    console.log( 'Wrong data type. Closing the program...');
    return;
}

function calculateDistanceBetween2Points( point1, point2 ){
    // The points have same same Ordinate value
    if (point1.y === point2.y && point1.x !== point2.x){
        return Math.abs( point2.x - point1.x );
    }
    // The points have same same Ordinate value
    if (point1.x === point2.x && point1.y !== point2.y){
        return Math.abs( point2.y - point1.y );
    }
    // The first point is in the axes' origin position
    if ( ( point1.x === 0 && point1.y === 0 && point2.x !== 0 && point2.y !== 0 ) ){
        return  Math.sqrt( Math.abs( Math.pow( point2.y, 2) - Math.pow( point2.x, 2) ) );
    }
    // The second point is in the axes' origin position
    if ( ( point2.x === 0 && point2.y === 0 && point1.x !== 0 && point1.y !== 0 ) ){
        return  Math.sqrt( Math.abs( Math.pow( point1.y, 2) - Math.pow( point1.x, 2) ) );
    }
    // The distance between two points is a square diagonal
    if ( Math.abs( point1.x - point1.y ) === Math.abs( point2.x - point2.y ) ){
        return Math.abs( ( point2.x - point1.x ) * Math.sqrt(2) );
    } 

    return Math.sqrt( Math.abs( Math.pow( point2.x - point1.x, 2) + Math.pow( point2.y - point1.y, 2) ) );
}

function calculatePerimeter( perimeter = 0, parallelSegments = true, pointsCollection = [], segmentsCollection = [] ){

    const perimeterSession = pointsCollection.length === 0 ? 'first' : 'next';
    const point = askPointCoordinates( perimeterSession );

    for (let i = 0; i < pointsCollection.length; i++) {
        const existingPoint = pointsCollection[i];

        if( existingPoint.x === point.x && existingPoint.y === point.y ) {
            console.log( 'You have already entered this point, please enter a new one.' );
            return calculatePerimeter( perimeter, parallelSegments, pointsCollection, segmentsCollection );
        }
    }

    const segment = {
        point1: {},
        point2: {},
        pointIndex: 0,
        amount: 1,
    }

    if( point ){
        // CWH ADD
        drawPoint( point );
        // CWH END
        pointsCollection.push( point );
    } else {
        segment.pointIndex = 1;
        segment.amount = 2;
    }

    if( pointsCollection.length > 1 ){
        segment.point1 = pointsCollection[ pointsCollection.length + segment.pointIndex - 2 ];
        segment.point2 = pointsCollection[ ( pointsCollection.length + segment.pointIndex - 1 ) % pointsCollection.length ];
    }


    if ( Object.keys(segment.point1).length && Object.keys(segment.point2).length ) {

        perimeter += calculateDistanceBetween2Points( segment.point1, segment.point2 );

        segmentsCollection.push(
            {
                point1: segment.point1,
                point2: segment.point2
            }
        );
        // CWH ADD
        drawSegment( segment.point1, segment.point2 );
        // CWH END
    }

    if( segmentsCollection.length > 1 ){

        for (let i = 0; i < segment.amount; i++) {

            const segmentsAngle = findAngle(
                segmentsCollection[ segmentsCollection.length - 2 + i ],
                segmentsCollection[ ( segmentsCollection.length - 1 + i ) % segmentsCollection.length ]
            );

            console.log( 'Angle formed by the last two segments: ' + segmentsAngle + '.' );

            if ( segmentsAngle ){
                parallelSegments = false;
            } 
        }

        if ( isComplexPolygon( segmentsCollection ) ){
            console.log( 'These two segments intersect, then the resulting polygon will be a complex one.');
        }
    }

    if ( point ) {
        return calculatePerimeter( perimeter, parallelSegments, pointsCollection, segmentsCollection );
    }

    return perimeter;
}

function isComplexPolygon( segmentsCollection ){

    for (let i = 0; i < segmentsCollection.length - 1; i++) {
        if ( isIntersected( segmentsCollection[i], segmentsCollection[ segmentsCollection.length - 1 ] ) ) {
            return true;
        }
    }

    return false;
}
function isBetween( value, minValue, maxValue ){

    if ( minValue > maxValue ){
        const temp = maxValue;
        maxValue = minValue;
        minValue = temp;
    }

    if ( value > minValue && value < maxValue ) {
        return true;
    }

    return false;
}

// This function verify if a segment intersect another segment
function isIntersected(segment1, segment2){
    /*
    The aim is to verify if the two straight lines on which the segments lie meet and, specifically, if these segments share a common point.
    To verify this we use the linear interpolation concept (find a value based on two known values), the two known values are the starting and the ending of a segment in the cartesian coordinate system.
    The formula for ipotetical segment defined by points P1 and P2 is the following: 
    x of P1 + (x of P2 - x of P1) * Tp1p2
    Tp1p2 is a value that must be in a range from 0 (starting point of segment) to 1 (ending point of segment)

    Same formula applied to ipotetical segment defined by points P3 and P4:
    x of P3 + (x of P4 - x of P3) * Tp3p4

    Then we build the following equation (when it is satisfied, the segments cross each other):
    x of P1 + (x of P2 - x of P1) * Tp1p2 = x of P3 + (x of P4 - x of P3) * Tp3p4

    Same thing must be done for the y, then unite them in the following system of function
    x of P1 + (x of P2 - x of P1) * Tp1p2 = x of P3 + (x of P4 - x of P3) * Tp3p4
    y of P1 + (y of P2 - y of P1) * Tp1p2 = y of P3 + (y of P4 - y of P3) * Tp3p4

    Knowing this we can use the following code resulting by the previous equations.
    */

	const divisorT1 = ( segment2.point2.x - segment2.point1.x ) * ( segment1.point1.y - segment2.point1.y ) - ( segment2.point2.y - segment2.point1.y ) * ( segment1.point1.x - segment2.point1.x );
	const divisorT2 = ( segment2.point1.y - segment1.point1.y ) * ( segment1.point1.x - segment1.point2.x ) - ( segment2.point1.x - segment1.point1.x ) * ( segment1.point1.y - segment1.point2.y );

	numeratorT1T2 = ( segment2.point2.y - segment2.point1.y ) * ( segment1.point2.x - segment1.point1.x ) - ( segment2.point2.x - segment2.point1.x ) * ( segment1.point2.y - segment1.point1.y );

    
	if ( numeratorT1T2 === 0 ){
        console.log('The last two segments are parallel and lay on the same line.');

        if ( divisorT1 === 0 && divisorT2 === 0 ){
            // The segments lay on the same line, then we can use only their y values (or their x values if the 3 points have the same ordinates) to find if they intersect each other.
            const rangeToVerify = {
                value1: segment1.point1.y,
                value2: segment1.point2.y,
                minValue: segment2.point1.y,
                maxValue: segment2.point2.y
            }
            
            if( segment1.point1.x !== segment2.point1.x || segment1.point1.x !== segment2.point2.x ) {
                rangeToVerify.value1 = segment1.point1.x;
                rangeToVerify.value2 = segment1.point2.x;
                rangeToVerify.minValue = segment2.point1.x;
                rangeToVerify.maxValue = segment2.point2.x;
            } 

            if ( isBetween( rangeToVerify.value1, rangeToVerify.minValue, rangeToVerify.maxValue ) || isBetween( rangeToVerify.value2, rangeToVerify.minValue, rangeToVerify.maxValue ) ) {
                console.log('The two segments intersects.');
            }
        } else {
            // if only the numerator is 0 the segments are parallels
            console.log('The two segments intersects.');
        }
        
        return false;
    } else {
		const t1 = divisorT1 / numeratorT1T2;
		const t2 = divisorT2 / numeratorT1T2;

		if ( t1 > 0 && t1 < 1 && t2 > 0 && t2 < 1 ){ // end-points excluded
			return {
            // If the meeting point exists, then I return its coordinates.
			x: linearInterpolation( segment1.point1.x, segment1.point2.x, t1), 
			y: linearInterpolation( segment1.point1.y, segment1.point2.y, t1), 
			}
		}

	}
}

function linearInterpolation( value1, value2, t){
	return value1 + (value2 - value1) * t;
}

function findAngle( segment1, segment2 ){
    const vector1 = findVector( segment1, 'first' );
    const vector2 = findVector( segment2 );

    const vectorsProduct = vector1.x * vector2.x + vector1.y * vector2.y;
    const magnitude = calculateMagnitude( vector1 ) * calculateMagnitude( vector2 );

    const radiansAngle = Math.acos( vectorsProduct / magnitude ) ;

    return ( radiansAngle * 180 / Math.PI ).toFixed(2) ;
}

function findVector( segment, startingPoint = 'standard' ){
    if ( startingPoint === 'first' ){
        return {
            x: segment.point1.x - segment.point2.x,
            y: segment.point1.y - segment.point2.y
        };
    }

    return {
        x: segment.point2.x - segment.point1.x,
        y: segment.point2.y - segment.point1.y
    };

}

function calculateMagnitude( vector ){
    return Math.sqrt( Math.pow( vector.x, 2 ) + Math.pow( vector.y, 2 ) );
}

function init(){
    console.log( 'Program started.' );

    const perimeter = calculatePerimeter();

    if ( perimeter > 0 ){
        console.log( 'The perimeter length is ' + perimeter );
        return;
    } 

    console.log( 'The perimeter is zero, to get a correct value remember that a polygon has at least 3 points in different positions.' )
    return init();
}
init();