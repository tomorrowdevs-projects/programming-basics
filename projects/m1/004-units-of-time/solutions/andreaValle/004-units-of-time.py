

#I would use only a function, that call itself, until the user want to exit 
#the following is that funcion
def time_convertion():
    print("\nInsert the durations of time you want. If you insert all zero values, you will exit.")
    
    #four times the function will ask for an input:
    days=input("\nInsert the number of days:\n")
    if days.isnumeric():
        days=int(days)
    else:
        print("You have insert not a valid number. The program will terminate.")
        return

    hours=input("\nInsert the number of hours:\n")
    if hours.isnumeric():
        hours=int(hours)
    else:
        print("You have insert not a valid number. The program will terminate.")
        return

    minutes=input("\nInsert the number of minutes:\n")
    if minutes.isnumeric():
        minutes=int(minutes)
    else:
        print("You have insert not a valid number. The program will terminate.")
        return

    seconds=input("\nInsert the number of seconds:\n")
    if seconds.isnumeric():
        seconds=int(seconds)
    else:
        print("You have insert not a valid number. The program will terminate.")
        return

    #if all the input are valid (positive integers), i do the calculations. And call again the funcion
    if days==0 and hours==0 and minutes==0 and seconds==0:
        print("You have choose to exit the program. Goodbye.")
        return
    else:
        print("\nThe total duration in second(s) is: ", days*24*3600+hours*3600+minutes*60+seconds)
        time_convertion()


#this is the "main" function

#I ask the user to input the duration of time he/she wants
print("Welcome, you can convert various durations of time into seconds.")
time_convertion()