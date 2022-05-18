//array.c
//
//This file implements the header "array.h"
//

#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>
#include "array.h"

//CONSTANTS
//----------
//USRINPUT_LEN: usr input stream length
//e.g. is used in function getInt() in "array.h" to read integer from the strig from stdin 
#define USRINPUT_LEN 100 


//FUNCTIONS DEFINITIONS
//---------------------

//Function: getInt
 int getInt() {
	char* usrInput[USRINPUT_LEN * sizeof(char)];
	int usrInt = 0;

	fgets(usrInput, USRINPUT_LEN, stdin);
	sscanf_s(usrInput, "%d", &usrInt);

	return usrInt;
}


///Function: initDynamicArray
int* initDynamicArray(int arrayElements) {

	int usrNum = 0;
	int numCount = 0;

	int* intArray = malloc(arrayElements * sizeof(*intArray));
	if (intArray == NULL) printf("Memory not allocated.\n");


	while (numCount < arrayElements) {
		usrNum = getInt();
		intArray[numCount] = usrNum;
		numCount++;
	}

	return intArray;
}


//Function: sortIntArray
void sortIntArray(int* intArray, int arrayElements) {


	for (int i = 0; i < arrayElements; i++) {
		for (int j = i + 1; j < arrayElements; j++) {
			if (intArray[i] > intArray[j]) {
				intArray[i] += intArray[j];
				intArray[j] = intArray[i] - intArray[j];
				intArray[i] -= intArray[j];
			}
		}
	}
}


//Function: printIntArray
void printIntArray(int* intArray, int arrayElements) {

	for (int i = 0; i < arrayElements; i++) {
		printf("%d\n", intArray[i]);
	}
}
