//tokenscanner.h
//This is interface provide functions
//to scan token in a line, if it's a legal word
//and keep internal state beetween functions call


#ifndef tokenscanner_h
#define tokenscanner_h

//Function: initTokenScan()
// 
//Set curretPosition private global varaible 
//on the line to first position
void initTokenScan();

//Function: initTokenScan()
// 
//Copy the next token in the given line 
//based on currentPosition variable
char* nextTokenCpy(char* token, char* line);

bool isLegalWord(char* token);

int frstVowelPos(char* word);

bool isVowel(char ch);

bool tkScanEndLine(char *line);

#endif