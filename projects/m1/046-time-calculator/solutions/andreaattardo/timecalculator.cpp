/*
Time Calculator
Write a function named add_time that takes in two required parameters and one optional parameter:
-a start time in the 12-hour clock format (ending in AM or PM)
-a duration time that indicates the number of hours and minutes
-(optional) a starting day of the week, case insensitive

The function should add the duration time to the start time and return the result.
If the result will be the next day, it should show (next day) after the time. If the result will be more than one day 
later, it should show (n days later) after the time, where "n" is the number of days later.
If the function is given the optional starting day of the week parameter, then the output should display the day of the 
week of the result. The day of the week in the output should appear after the time and before the number of days later.
Below are some examples of different cases the function should handle. Pay close attention to the spacing and punctuation
of the results.

add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
*/


#include <iostream>
#include <string>
#include "timecalculator.h"

using namespace std;


//MAIN
int main(){

	cout << "TIME CALCULATOR." << endl;

	//init times value from usr
	string startTime, durationTime, startingDay, endTime, e;
	getTimes(startTime, durationTime, startingDay);
	
	//time conversion in minutes
	int startTMin = timeToMin(startTime); 
	int durTMin = timeToMin(durationTime); 
	int endTMin = startTMin + durTMin;
	//conversion starting day name in number
	int startDayNum = dayNameToNum(startingDay);

	//check if ending day has surpassed one or more day (1440 min = 24h)
	while ( (endTMin - 1440) >= 0 ) {
		endTMin -= 1440;
		startDayNum++;
	}
	//e.g. write 12:05 instead of 00:05
	if (endTMin < 60) endTMin += 720;

	startingDay = numToDayName(startDayNum);

	endTime = minToTime(endTMin);
	cout << endTime << " " << startingDay << endl;

	return 0;
}



//FUNCTIONS DEFINITIONS

void getTimes(string& startTime, string& durationTime, string& startingDay) {

	cout << "Insert a start time in 12 hour format (e.g. 7:00 PM): " << endl;
	getline(cin, startTime);

	cout << "Insert a duration time in hours:minutes format (e.g. 16:45): " << endl;
	getline(cin, durationTime);

	cout << "Do you like to insert a starting day (y/n)?" << endl;
	cin >> startingDay;
	if (startingDay == "y")
	{
		do {
			cout << "Insert starting day (e.g. Monday):" << endl;
			cin >> startingDay;
		} while (!isLegalDayName(startingDay));

	}
	else startingDay = " ";
}


int timeToMin(string& time) {
	int timeInMinutes = 0;
	time.erase(time.find(':'), 1);
	timeInMinutes = stoi(time);
	timeInMinutes = (timeInMinutes / 100 * 60) + (timeInMinutes % 100);

	if (time.find('P') != string::npos && timeInMinutes <= 720)
	{
		timeInMinutes += 720;
	}

	return timeInMinutes;
}


string minToTime(int& timeInMinutes) {
	string time;
	string xM = "AM";

	if (timeInMinutes >= 720) xM = "PM";
	if (timeInMinutes >= 780) timeInMinutes -= 720;

	time = to_string(timeInMinutes / 60) + ":";
	if ((timeInMinutes % 60) < 10) time += "0";
	time += to_string(timeInMinutes % 60) + " " + xM;

	return time;
}


string numToDayName(int& dayNum) {
	if ( dayNum < 0 ) return " ";
	//compute if dayNum is more then one week in which day is
	if (dayNum > 6) dayNum %= 7;

	string weekday[7] = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

	return weekday[dayNum];
}


int dayNameToNum(string& dayName) {
	
	string weekday[7] = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

	for (int i = 0; i < size(weekday); i++) {
		if (weekday[i] == dayName) return i;
	}

	return -1;
}

bool isLegalDayName(string& dayName) {
	string weekday[7] = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

	for (int i = 0; i < size(weekday); i++) {
		if (weekday[i] == dayName) return true;
	}

	return false;
}
