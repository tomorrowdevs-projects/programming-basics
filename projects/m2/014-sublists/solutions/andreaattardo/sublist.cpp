/*
Does a List Contain a Sublist ?

A sublist is a list that is part of a larger list.A sublist may be a list containing a single element, multiple elements,
or even no elements at all.For example, [1], [2], [3] and [4] are all sublists of[1, 2, 3, 4].The list[2, 3] is also a
sublist of[1, 2, 3, 4], but[2, 4] is not a sublist[1, 2, 3, 4] because the elements 2 and 4 are not adjacent in the longer
list.The empty list is a sublist of any list.As a result, [] is a sublist of[1, 2, 3, 4].A list is a sublist of itself,
meaning that[1, 2, 3, 4] is also a sublist of[1, 2, 3, 4].

In this exercise you will create a function, isSublist, that determines whether or not one list is a sublist of
another.Your function should take two lists, largerand smaller, as its only parameters.It should return True ifand only if
smaller is a sublist of larger.Write a main program that demonstrates your function.
*/


#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;


//FUNCTIONS DECLARATIONS
bool isContiguous(vector<int>& list);
bool isInRange(vector<int>& smallList, vector<int>& largeList);
void printList(vector<int>& list);


//MAIN
int main() {
	vector<int> contLargeList = {1, 2, 3, 4, 5, 6, 7, 8, 9}; //a list of contiguous sequence of elementes 
	vector<int> smallList;

	//push back elements in the smallList inserted by user
	cout << "Insert elements in the list one by one, 0 to exit" << endl;
	int		element;
	while (true) {

		cin >> element;
		if (element == 0) break;
		smallList.push_back(element);

	}
	sort(smallList.begin(), smallList.end());

	//output
	//a subList has contiguous values and its extremes are within the largest list
	printList(smallList);
	if (isContiguous(smallList) && isInRange(smallList, contLargeList)) { 
		cout << " IS a sublist of ";
	}
	else {
		cout << " is NOT a sublist of ";
	}
	cout << "this list: ";
	printList(contLargeList);
	cout << endl;

	return 0;
}


//FUNCTIONS DEFINITIONS
bool isContiguous(vector<int>& list) {
	return (list.size() == ((list.back() + 1) - list.front()));
}


bool isInRange(vector<int>& smallList, vector<int>& largeList) {
	return (smallList.front() >= largeList.front() &&
			smallList.back()  <= largeList.back());
}


void printList(vector<int>& list) {

	cout << "{ ";
	for (auto i = list.begin(); i != list.end(); i++) {

		cout << *i << ", ";
	}
	cout << "}";
}