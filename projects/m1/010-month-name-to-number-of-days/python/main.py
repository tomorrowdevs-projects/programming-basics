def MonthsReader(months):  #i created a function that accept a variable named letter 
    months = months.lower() #lower() function helps me to take as an input also capitalize letters
    
    if months in ['january', 'may', 'march', 'july', 'august', 'october','december']: 
        print("This month has 31 days.")
        
    elif letterin ['april', 'june', 'september', 'november']:
        print("This month has 30 days.")
    else:
        print("This month has 28 days.")
    months = input('Enter a letter of the alphabet: ')
    MonthsReader(months)   #this steps here helps me to make recoursion, I don't know how to do witouth this step
    
    

months = input("Enter the name of one month: ")
MonthsReader(months) #I call the function after the input