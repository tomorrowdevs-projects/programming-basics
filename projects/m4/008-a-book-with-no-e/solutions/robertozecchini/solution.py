#!/usr/bin/env python3

import sys
import re

if len(sys.argv) != 2:
    print("Usage: solution.py [FILE]")
    print("You have to pass ONE argument containing the file to read.")
else:
    fileName = sys.argv[1]
    try:
        with open(fileName) as f:
            content = f.read()
    except FileNotFoundError:
        print("The file does not exist.")
    else:
        words = re.findall(r'[a-zA-Z]+', content)
        totalWords = len(words)
        count = {}
        for letter in "abcdefghijklmnopqrstuvwxyz":
            count.setdefault(letter, 0)
            for w in words:
                if letter in w.lower():
                    count[letter] = count[letter] + 1
        for k,v in count.items():
            print(f"Letter {k} is used in {v} words on {totalWords}")
        lessUsedValue = min(count.values())
        lessUsedKeys = [key for key in count if count[key] == lessUsedValue]
        print(f"Letters used in smallest proportion of words are {lessUsedKeys} ({lessUsedValue} on {totalWords} words).")