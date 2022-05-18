//removeoutliers.c
// ---------------
//When analysing data collected as part of a science experiment it may be desirable to remove the most extreme values before performing other calculations.
//Write a function that takes a list of values and an non - negative integer, n, as its parameters.The function should create a new copy of the list with the n largest
//elementsand the n smallest elements removed.Then it should return the new copy of the list as the function’s only result.


#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>
#include "array.h"
#include "removeoutliers.h"


//MAIN
int main() {
	int *sciData, *cuttedSciData;
	int sciDataElements= 0, cuttedSciDataElements = 0, nOutliers = 0;


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




//Function: removeOutliers
int* removeOutliers(int* intArray, int arrayElements, int nOutliers) {
	if (arrayElements <= (2 * nOutliers)) {
		printf("Error: Elements of the array lower to the numbers of extreme values to removed.\n");
		return NULL;
	}

	int* cuttedArray;
	int cuttedArrayElemnts = (arrayElements - (2 * nOutliers));
	cuttedArray = malloc((cuttedArrayElemnts) * sizeof(*intArray));

	for (int i = 0 + nOutliers; i < arrayElements - nOutliers; i++) {
		cuttedArray[i - nOutliers] = intArray[i];
	}
	
	return cuttedArray;
}


