def ordinalDate(day, month, year):
    passed_days = 0
    months_days = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
    if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0):
        months_days[2] = 29
    i = 1
    while i < month:
        passed_days += months_days[i]
        i += 1
    total_days = day + passed_days
    return total_days



if __name__ == '__main__':
    day = int(input("Enter a day: "))
    month = int(input("Enter a month: "))
    year = int(input("Enter a year: "))
    print(ordinalDate(day, month, year))
