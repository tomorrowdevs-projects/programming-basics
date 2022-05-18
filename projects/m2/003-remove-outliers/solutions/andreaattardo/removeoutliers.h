//remove-outliers.h
//
//Header interface of the main program.
//

#ifndef removeoutliers_h
#define removeoutliers_h

/// Function: removeOutilers
/// 
/// Give an array, the size of it and
/// a numbers of integers remove
/// from both side of the extreme
/// the n times of parameter nOutliners.
/// Return a cutted from extremes allocated array of integers.
int* removeOutliers(int* intArray, int arrayElements, int nOutliers);


#endif // !_remove-outliers.h