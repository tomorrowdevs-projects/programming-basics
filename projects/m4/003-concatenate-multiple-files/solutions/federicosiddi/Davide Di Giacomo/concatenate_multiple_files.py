#Create a Python program that performs the concatenation of one or more files. 
#It should generate an appropriate error message for any file that cannot be displayed, and then proceed to the next file.
#Display an appropriate error message if your program is started without any command line arguments.
import sys

#if command line doesn't have argument
if len(sys.argv)==1:
    print("the argument in your command line is omitted!")
else:
  try:
    #list of files
    filename=sys.argv[1:]
    for x in filename:
      #open each file and read the first line
      with open(x, "r") as f:
        content1 = f.readline()
        print(content1)
  #error if doesn't find the file
  except FileNotFoundError:
      print("File doesn't exist!")
    