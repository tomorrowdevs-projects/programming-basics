//solution-sorted-order.c
// 
//Assignment:
//Write a program that reads integers from the userand stores them in an array.
//Your program should continue reading values until the user enter 0. 
//Then it should display all of the values entered by the user(except for the 0) in ascending order, with one value appearing on each line.
//Use either the sort method or the sorted function to isort the array.


#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>


//CONSTANTS
//----------
#define MAX_ELEMENTS 20 //integer array's max elements 
#define USRINPUT_LEN 50 //usr input stream length
#define SENTINEL 0


//FUNCTIONS DECLARATIONS
// --------------------
void sortIntArray(int intArray[], int nElements);
void printIntArray(int intArray[], int nElements);


//MAIN
//-----
int main() {
	char usrInput[USRINPUT_LEN];
	int numsArray[MAX_ELEMENTS] = { 0 };
	int usrN = 0, nElements = 0;

	//program instructions
	printf("This program display a ordered set of integers entered by the user.\n");
	printf("Insert number 0 to stop to insert.\nEnter one by one a maximum of %d element(s) of integers:\n", MAX_ELEMENTS);

	while (true) {

		//read a value to add to the array  
		fgets(usrInput, USRINPUT_LEN, stdin);
		sscanf_s(usrInput, "%d", &usrN);

		//stop if usr entered sentinel value
		if (usrN == SENTINEL) break;

		//assign the value entered to ith position, matching the count of elements's entered
		//and increment elements's count
		numsArray[nElements] = usrN;
		nElements++;

		//stop if the usr reached the size of the array 
		if (nElements == MAX_ELEMENTS) {
			printf("Maximum of %d element(s) reached. Remind to enter 0 to stop to input.\n", MAX_ELEMENTS);
			break;
		}
	}

	sortIntArray(numsArray, nElements);

	printf("\nThe ordered set of the integers inserted is:\n");
	printIntArray(numsArray, nElements);

	return 0;
}



//FUNCTIONS DEFINITIONS
//---------------------

//Function: sortIntArray
//Sort in ascending order an array of integers 
//across a numbers of elements. 
//The parameter nElements  specify the numbers of elements to sort
void sortIntArray(int intArray[], int nElements) {
	int temp = 0;

	for (int i = 0; i < nElements; i++) {
		for (int j = i + 1; j < nElements; j++) {
			if (intArray[i] > intArray[j]) {
				temp = intArray[i];
				intArray[i] = intArray[j];
				intArray[j] = temp;
			}
		}
	}
}


//Function: printIntArray
//Print a numbers of elements of an array of integers. 
//The parameter nElements  specify the numbers of elements to display
void printIntArray(int intArray[], int nElements) {

	for (int i = 0; i < nElements; i++) {
		printf("%d\n", intArray[i]);
	}
}

