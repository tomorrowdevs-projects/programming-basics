#!/usr/bin/env python3

#solution for the program display-the-head-of-a-file
 
import sys

if len(sys.argv) != 2:
    print("Usage: solution.py [FILE]")
    print("You have to pass ONE argument containing the file to read.")
else:
    fileName = sys.argv[1]
    try:
        with open(fileName) as f:
            lines = f.readlines()
    except FileNotFoundError:
        print("The file does not exist.")
    else:
        for l in lines[:10]:
            print(l, end='')