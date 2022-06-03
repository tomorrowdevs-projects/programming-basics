/*
Password validation
	In this exercise you will write a function that determines whether or not a password is good.We will define a good 
	password to be a one that is at least 8 characters longand contains at least one uppercase letter, at least one 
	lowercase letter, and at least one number.Your function should return True if the password passed to it as its only 
	parameter is good.Otherwise it should return False.Include a main program that reads a password from the user and 
	reports whether or not it is good.Ensure that your main program only runs when your solution has not been imported into
	another file.
*/

#include <iostream>
#include <cctype>
#include <string>
using namespace std;

bool isGoodPsw(const string& psw) {

	//check psw lenght < 8
	int pswLen = psw.length();
	if (pswLen < 8) return false;

	//check at least 1 lowercase, 1 uppercase, 1 number
	int	 counter =	0b000; //binary number, 0b111 is all 3 conditions true

	for (int i = 0; counter != 0b111 && i < pswLen; i++) {

		if ( ( counter < 0b001 ) && islower( psw[i]) )	counter +=   0b1;
		if ( ( counter < 0b010 ) && isupper( psw[i]) )	counter +=  0b10;
		if ( ( counter < 0b100 ) && isdigit( psw[i]) )	counter += 0b100;

	}

	if (counter == 0b111) return true;
	else return false;
}


int main() {

	string	usrPsw;

	cout << "Insert a password that is at least " 
		 << "8 characters with 1 uppercase, " 
		 << "1 lowercase and 1 number." 
		 << endl;
	getline(cin, usrPsw);

	if (isGoodPsw(usrPsw)) cout << "It's a good password";
	else cout << "No good password";

	return 0;
}

