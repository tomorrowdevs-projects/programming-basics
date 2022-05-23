//array.c
//
//This file implements the header "array.h"
//

#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>
#include "array.h"



//Function: getInt
 int getInt(char *str) {
	int usrInt = 0;

	fgets(str, strlen(str), stdin);
	sscanf_s(str, "%d", &usrInt);

	return usrInt;
}

//Function: usrInitStr
 void *usrInitStr(char *str, int strSize) {

	 fgets(str, strSize, stdin);
	 //replace newline character stored by fgets() to null character
	 str[strlen(str) - 1] = '\0';
 }

///Function: allocIntArray
int *allocIntArray(int intArrayElemnts) {

	int *intArray = malloc(intArrayElemnts * sizeof(*intArray)); //sizeof(*intArray) a quello che fa rifermimento
	if (intArray == NULL) {
		printf("Memory not allocated.\n");
		return NULL;
	}

	return intArray;
}

///Function: deallocIntArray
void deallocIntArray(int* intArray) {
	free(intArray);
	intArray = NULL;
}

//Function: sortIntArray
void sortIntArray(int* intArray, int intArraySize) {


	for (int i = 0; i < intArraySize; i++) {
		for (int j = i + 1; j < intArraySize; j++) {
			if (intArray[i] > intArray[j]) {
				intArray[i] += intArray[j];
				intArray[j] = intArray[i] - intArray[j];
				intArray[i] -= intArray[j];
			}
		}
	}
}


//Function: printIntArray
void printIntArray(int* intArray, int intArraySize) {

	for (int i = 0; i < intArraySize; i++) {
		printf("%d\n", intArray[i]);
	}
}


//STRING FUNCTIONS

//fare allocString e dealloc function ; 
// dynamic allocation per sceglirere la dimensione at runtime
char* allocStr(int strLen) {
	char *str = malloc((strLen * sizeof(*str)) + sizeof(*str));
	if (str == NULL) return NULL;
	str[strLen] = '\0';
	return str;
}


void deallocStr(char *str) {
	free(str);
	str = NULL;
}


//Function: subStrExtract
char *subStrCpy(char *subStr, char *str, const int startPos, const int endPos) {
	int strLen = strlen(str);
	int subStrLen = endPos - startPos + 1;

	for (int i = startPos; i <= endPos; i++) {
		subStr[i - startPos] = str[i];
	}
	subStr[subStrLen] = '\0';

	return subStr;
}

