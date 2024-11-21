'''Write a program that reads integers from the user and stores them in an array. 
Use 0 as a sentinel value to mark the end of the input. Once all of the values have been read your program should display them (except for the 0) in reverse order, with one value appearing on each line.'''




#sorted list reverse with while method

#create list empty
new_lst=[]
while True:
      #input int digit
      num_input=int(input("digit a number: "))
      #if input == 0 exit loop
      if num_input==0:
           break
      else:   
          #insert in list empty
          new_lst.append(num_input)
          #reverse ord list
          new_lst.sort(reverse=True)
          print(new_lst)