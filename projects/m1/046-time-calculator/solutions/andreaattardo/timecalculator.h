#ifndef TIMECALCULATOR_H
#define TIMECALCULATOR_H

#include <string>
using namespace std;


void getTimes(string& startTime, string& durationTime, string& startingDay);

int timeToMin(string& time);

string minToTime(int& timeInMinutes);

string numToDayName(int& dayNum);

int dayNameToNum(string& dayName);

bool isLegalDayName(string& dayName);

#endif

