print("enter the position, an letter for the column and a number for the row ")
column=int(input ("enter the letter for column"))
row=int(input( "enter the number for row"))

if ((column) % 2) ==1 and (row % 2)==1:
     print("square black ")
elif (column % 2)==1 and (row % 2)==0:
     print("square white")
elif (column % 2)==0 and (row % 2)==0:
     print("square black")
elif (column % 2)==0 and (row % 2)==1:
     print("square white")
