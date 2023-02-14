#user enter an input 
column, row = input("Enter corresponding column and row. Take a space from one value to another: ").split()
print("Column: ", column)
print("Number of row: ", row)

#if the column is in a c e or g and in 1 3 5 7 is white
if column in ['a', 'c', 'e', 'g'] and row in ['1', '3', '5', '7']:
    print(f"the corrisponding case is white")

    #otherwise is black
else:
    print(f"the color of the case is black")