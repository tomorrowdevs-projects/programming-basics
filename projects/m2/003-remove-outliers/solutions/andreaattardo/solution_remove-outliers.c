//remove-outliers.c
// ---------------
//When analysing data collected as part of a science experiment it may be desirable to remove the most extreme values before performing other calculations.
//Write a function that takes a list of values and an non - negative integer, n, as its parameters.The function should create a new copy of the list with the n largest
//elementsand the n smallest elements removed.Then it should return the new copy of the list as the function’s only result.


#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

//CONSTANTS
//----------
#define USRINPUT_LEN 50 //usr input stream length


//FUNCTIONS DECLARATIONS
// --------------------
int* sortIntArray(int* intArray, int arrayElements);
int getInt();
int* initDynamicArray(int arrayElements);
void printIntArray(int* intArray, int arrayElements);
int* removeOutliers(int* intArray, int arrayElements, int nOutliers);


//MAIN
int main() {
	int* sciData, *cuttedSciData;
	int sciDataElements = 0, cuttedSciDataElements = 0, nOutliers = 0;

	printf("This program remove an user defined numbers of extreme values from a list of integers.\n\n");
	printf("Creating a list of integers inserted one by one,\n");
	printf("how many elements do you want to add?: ");
	sciDataElements = getInt();

	printf("Insert elements:\n");
	sciData = initDynamicArray(sciDataElements);

	sortIntArray(sciData, sciDataElements);

	printf("How many extreme values do you want to remove from the above list?\n");
	nOutliers = getInt();

	cuttedSciDataElements = (sciDataElements - (nOutliers * 2));
	cuttedSciData = removeOutliers(sciData, sciDataElements, nOutliers);

	printf("The new list with %d values on each extreme removed:\n", nOutliers);
	printIntArray(cuttedSciData, cuttedSciDataElements);

	return 0;
}



//FUNCTIONS DEFINITIONS
//-----------------------

/// Function: getInt
/// 
/// return an integer from stdin
/// <returns></returns>
int getInt() {
	char* usrInput[USRINPUT_LEN * sizeof(char)];
	int usrInt = 0;

	fgets(usrInput, USRINPUT_LEN, stdin);
	sscanf_s(usrInput, "%d", &usrInt);

	return usrInt;
}

///Function: initDynamicArray
/// 
/// Initialize an Array of integers
/// manually allocated in memory
/// and add values entered by the usr
/// across the lenght of the array.
/// Return an allocated array of integers.
int* initDynamicArray(int arrayElements) {

	int usrNum = 0;
	int numCount = 0;

	int* intArray = malloc(arrayElements * sizeof(int));
	if (intArray == NULL) {
		printf("Memory not allocated.\n");
		exit(0);
	}

	while (numCount < arrayElements) {
		usrNum = getInt();
		intArray[numCount] = usrNum;
		numCount++;
	}

	return intArray;
}

/// Function: removeOutilers
/// 
/// Give an array, the size of it and
/// a numbers of integers remove
/// from both side of the extreme
/// the n times of parameter nOutliners.
/// Return a cutted from extremes allocated array of integers.
int* removeOutliers(int* intArray, int arrayElements, int nOutliers) {
	if (arrayElements <= (2 * nOutliers)) {
		return printf("Error: Elements of the array lower to the numbers of extreme values to removed.\n");
	}

	int* cuttedArray;
	int cuttedArrayElemnts = (arrayElements - (2 * nOutliers));
	cuttedArray = malloc((cuttedArrayElemnts) * sizeof(int));

	for (int i = 0 + nOutliers; i < arrayElements - nOutliers; i++) {
		cuttedArray[i - nOutliers] = intArray[i];
	}

	return cuttedArray;
}


//Function: sortIntArray
// 
//Sort in ascending order an array of integers 
//across a numbers of elements. 
//The parameter arrayElements  specify the numbers of elements to sort
int* sortIntArray(int* intArray, int arrayElements) {

	int temp = 0;

	for (int i = 0; i < arrayElements; i++) {
		for (int j = i + 1; j < arrayElements; j++) {
			if (intArray[i] > intArray[j]) {
				temp = intArray[i];
				intArray[i] = intArray[j];
				intArray[j] = temp;
			}
		}
	}
	return intArray;
}


//Function: printIntArray
// 
//Print a numbers of elements of an array of integers. 
//The parameter arrayElements  specify the numbers of elements to display.
void printIntArray(int* intArray, int arrayElements) {

	for (int i = 0; i < arrayElements; i++) {
		printf("%d\n", intArray[i]);
	}
}

