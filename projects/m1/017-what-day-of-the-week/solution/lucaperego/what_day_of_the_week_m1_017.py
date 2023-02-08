

year = int(input("Insert a year: "))

day_of_the_week_as_number = (year + round((year - 1) / 4) - round((year - 1) / 100) + round((year - 1) / 400)) % 7


code = {1 :"Monday",  2: "Tuesday",  3: "Wednesday",  4: "Thursday",  5: "Friday", 6: "Saturday", 0: "Sunday"}


print(f"In the year taken into consideration - {year} - January 1 falls on the following day of the week: {code[day_of_the_week_as_number]}")
    
    