//array.h
//
//This file is an interface for functions
//that manage useful common task for manage array as
//inititialize dynamic array, sorting algorithm,
//and printing an array.
//

#ifndef array_h
#define array_h

/// Function: getInt
/// 
/// return an integer from stdin
int getInt();


///Function: initDynamicArray
/// 
/// Initialize an Array of integers
/// manually allocated in memory
/// and add values entered by the usr
/// across the lenght of the array.
/// Return an allocated array of integers.
int* initDynamicArray(int arrayElements);


//Function: sortIntArray
// 
//Sort in ascending order an array of integers 
//across a numbers of elements. 
//The parameter arrayElements  specify the numbers of elements to sort
void sortIntArray(int* intArray, int arrayElements);


//Function: printIntArray
// 
//Print a numbers of elements of an array of integers. 
//The parameter arrayElements  specify the numbers of elements to display.
void printIntArray(int* intArray, int arrayElements);


#endif