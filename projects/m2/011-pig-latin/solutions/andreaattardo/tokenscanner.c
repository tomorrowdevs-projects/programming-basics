#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>

#include "array.h"
#include "tokenscanner.h"

//Private variables for internal state
//to determine next token
static int currentPos;


//Functions definitions
void initTokenScan() {
	currentPos = 0;
}

char* nextTokenCpy(char* token, char* line) {

	int usrLineLen = strlen(line);

	if (currentPos >= usrLineLen) {
		printf("Error: No more tokens");
		return NULL;
	}

	int start = 0;
	char ch = line[currentPos];
	if (isalnum(ch)) {
		start = currentPos;
		while ((currentPos < usrLineLen) && (isalnum(line[currentPos]))) {
			currentPos++;
		}
		return subStrCpy(token, line, start, currentPos - 1);
	}
	else {
		currentPos++;
		return subStrCpy(token, line, currentPos - 1, currentPos - 1);
	}
}

bool isLegalWord(char* token) {

	int tokenLen = strlen(token);
	for (int i = 0; i < tokenLen; i++) {
		if (!isalpha(token[i])) return false;
	}

	return true;
}

int frstVowelPos(char* word) {
	int wordLen = strlen(word);

	for (int i = 0; i < wordLen; i++) {
		if (isVowel(word[i])) return i;
	}
	return -1;
}

bool isVowel(char ch) {
	switch (ch) {
	case('a'):
	case('e'):
	case('i'):
	case('o'):
	case('u'): return true;
	default: return false;
	}
}

bool tkScanEndLine(char *line) {
	int lineLen = (int)strlen(line);
	return (currentPos == lineLen);
}