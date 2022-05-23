//array.h
//
//This file is an interface for functions
//that manage useful common task for manage int array 
// and char array(string) as
//allocation, deallocation, initialization, sorting,
//and printing an array as well as string, and functions 
//to manipulate them.
//

#ifndef array_h
#define array_h


//Function: getInt
// 
//return an integer from stdin
int getInt(char* usrStrInput);


//Function usrInitStr
//
//initilaze a string
//
void *usrInitStr(char* usrStrInput, int strSize);

//INTEGER ARRAY FUNCTIONS

///Function: allocIntArray
/// 
///This funtion manually allocates an Array of integers
/// in memory of array size give as argument.
/// Return an allocated array of integers.
int* allocIntArray(int intArrayElements);

///Function: deallocIntArray
/// 
/// This funtion deallocated a passed by arguments 
/// Array of integers and assign NULL to pointer.
void deallocIntArray(int* intArray);

//Function: sortIntArray
// 
//Sort in ascending order an array of integers 
//across a numbers of elements. 
//The parameter intArrayElemts  specify the numbers of elements to sort
void sortIntArray(int* intArray, int intArraySize);


//Function: printIntArray
// 
//Print a numbers of elements of an array of integers. 
//The parameter intArraySize  specify the numbers of elements to display.
void printIntArray(int* intArray, int intArraySize);


//STRING FUNCTIONS

char* allocStr(int strLen);

void deallocStr(char *str);


//Function: subStrCpy
//
//Give a start character position and an end position,
//express in index of the character array (integer),
//this function return a new substring.
char *subStrCpy(char *subStr, char *str, const int startPos, const int endPos);


#endif