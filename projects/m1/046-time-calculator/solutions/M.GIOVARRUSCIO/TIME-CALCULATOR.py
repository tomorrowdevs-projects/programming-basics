"""
Write a function named `add_time` that takes in two required parameters
and one optional parameter:
* a start time in the 12-hour clock format (ending in AM or PM)
* a duration time that indicates the number of hours and minutes
* (optional) a starting day of the week, case insensitive

The function should add the duration time to the start time and return the result.

If the result will be the next day, it should show `(next day)` after the time.
If the result will be more than one day later, it should show `(n days later)`
after the time, where "n" is the number of days later.

If the function is given the optional starting day of the week parameter,
then the output should display the day of the week of the result.
The day of the week in the output should appear after the time and before
the number of days later.

Below are some examples of different cases the function should handle.
Pay close attention to the spacing and punctuation of the results.
```py
add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
```

Do not import any Python libraries. Assume that the start times are valid times. The minutes in the duration time will be a whole number less than 60, but the hour can be any whole number.

"""
def add_time(start,duration,day=""):
    result="" #variabile che conterrà il risultato da stampare: inizialmente vuota
    days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    lista1=start.split() #splitto DURATION in HH:MM e AM|PM
    lista2=lista1[0].split(":") #splitto HH:MM in HH e MM
    #Assegnazione dei valori HH e MM a due variabili hour e minutes
    hour=int(lista2[0])
    minutes=int(lista2[1])
    #A questo punto procedo con il calcolo:
    if lista1[1]=="PM":
        hour+=12 #se l'orario di partenza inserito è con PM, aggiungo 12 ore alla variabile hour
    lista3=duration.split(":") #splitto il valore di duration in una lista
    hour+=int(lista3[0]) #alla variabile hour precedente aggiungo le ore di duration inserite
    minutes+=int(lista3[1]) #alla variabile minutes aggiungo i minuti di duration inserite
    # potrebbe erroneamente essere inserito un numero di ore e di minuti superiori a 12 e 60:
    min=minutes%60
    hour += (minutes // 60)
    o=hour%24
    numdays=hour//24
    #A questo punto in base ai valori inseriti opportunamente corretti si procede con la preparazione
    #della variabile result
    #se il numero di ore è maggiore di 12 ( e minore di 24)
    if o>12:
        result+=f"{o-12}:{min:0>2} PM"
    #se il numero di ore è proprio 12
    elif o==12:
        result+=f"{o}:{min:0>2} PM"
    #se il numero di ore è minore è 0
    elif o==0:
        result += f"{o+12}:{min:0>2} AM"
    #se il numero di ore è compreso tra 0 e 12
    else:
        result += f"{o}:{min:0>2} AM"
    #se è stato inserito il giorno di partenza
    if day!="":
        #si determina il valore in base al giorno della settimana
        index1 = days.index(day.lower())
        #e poi in base al valore di numdays si determina quanti giorni dopo ...
        if numdays==0:
            result+=f" {day.lower().capitalize()}"
        elif numdays==1:
            result += f" {days[index1+1] } (next day)"
        #aritmetica orologio per i giorni della settimana
        else:
            result += f" {days[(index1+numdays)//7]} ({numdays} days later)"
    else:
        if numdays==0:
            return result
        if numdays==1:
            result += f"  (next day)"
        else:
            result += f" ({numdays}  days later)"
    return result

if __name__=='__main__':
    start=input("Please insert a start time in the 12-hour clock format (ending in AM or PM):")
    duration = input("Please insert a duration time that indicates the number of hours and minutes: ")
    day=input("(optional) Please a starting day of the week or press ENTER: ")
    print(add_time(start,duration,day)) #Chiamata funzione add_time()