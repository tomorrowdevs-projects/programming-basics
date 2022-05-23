#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>

#include "array.h"
#include "tokenscanner.h"


#define BUFFER 100

//translate a word to pig latin
void pigLatinTrans(char* word);

int main() {

	printf("Enter a line to change it to Pig Latin.\n");
	char usrLine[BUFFER + 1];
	usrInitStr(usrLine, sizeof(usrLine));

	printf("\nInserted line: %s\n", usrLine);
	printf("Translated line: ");

	int usrLineLen = strlen(usrLine);
	int tokenMaxLen = usrLineLen + 4; 
	initTokenScan();

	char* token = allocStr(tokenMaxLen);
	while (!tkScanEndLine(usrLine)) {
		nextTokenCpy(token, usrLine);
		if (isLegalWord(token)) {
			pigLatinTrans(token);
		}
		printf("%s", token);
	}
	printf("\n");
	deallocStr(token);

	return 0;
}



//FUNCTIONS DEFINITIONS

void pigLatinTrans(char* word) {

	int wordLen = strlen(word);
	int wordMaxLen = wordLen + 4;
	int frstVowPWord = frstVowelPos(word);

	char *head = allocStr(wordMaxLen);
	char *tail = allocStr(wordMaxLen);
	if (frstVowelPos(word) == -1) {
		return NULL;
	}
	else if (frstVowPWord == 0) {
		strcat_s(word, wordMaxLen, "way");
	}
	else {
		subStrCpy(head, word, 0, frstVowPWord - 1);
		subStrCpy(tail, word, frstVowPWord, wordLen - 1);
		strcat_s(head, wordMaxLen, "ay");
		strcat_s(tail, wordMaxLen, head);
		strcpy_s(word, wordMaxLen, tail);
	}
	deallocStr(head);
	deallocStr(tail);
}








