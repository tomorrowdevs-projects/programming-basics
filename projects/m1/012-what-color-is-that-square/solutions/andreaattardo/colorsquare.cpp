/*
What Color Is That Square ?
Positions on a chess board are identified by a letter and a number.The letter identifies the column, while the number 
identifies the row, as shown below :

8 |_|#|_|#|_|#|_|#|
7 |#|_|#|_|#|_|#|_|
6 |_|#|_|#|_|#|_|#|
5 |#|_|#|_|#|_|#|_|
4 |_|#|_|#|_|#|_|#|
3 |#|_|#|_|#|_|#|_|
2 |_|#|_|#|_|#|_|#|
1 |#|_|#|_|#|_|#|_|
   a b c d e f g h

Write a program that reads a position from the user.Use an if statement to determine if the column begins with a black 
square or a white square.Then use modular arithmetic to report the color of the square in that row.For example, if the user
enters a1 then your program should report that the square is black.If the user enters d5 then your program should report 
that the square is white.Your program may assume that a valid position will always be entered.It does not need to perform 
any error checking.

*/

#include <iostream>
#include <string>
using namespace std;

//convert every black square code to an even number 
//e.g. a1 => 1 + 1 = 2; 
//     c3 => 1 + 3 = 4; 
//     e5 => 1 + 5 = 6 
static void numerizeCode(const string &squareLet, int &numSquareCode) {

	char squareLetter = squareLet[0];
	numSquareCode = squareLet[1];

	switch(squareLetter) {
		case('a'): 
		case('c'): 
		case('e'): 
		case('g'): numSquareCode += 1; 
		default: ;
	}

}


int main() {
	string squareCode, squareColor;
	int numSquareCode = 0;

	cout << "Insert chessboard square code" << endl;
	cin >> squareCode;

	numerizeCode(squareCode, numSquareCode);

	if (numSquareCode % 2 == 0) squareColor = "black";
	else squareColor = "white";

	cout << "The color of the chessboard square " << squareCode 
		 << " is " << squareColor << endl;

	return 0;
}