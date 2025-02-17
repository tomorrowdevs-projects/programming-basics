#Write a function that determines whether or not a date is a magic
#create a main program that finds and displays all of the magic dates in the 20th century.
def main():
    print("Your magic date in 20th century are: ")
    days_30=[4, 6, 9 ,11]
    days_31=[1, 3, 5, 7, 8, 10, 12]
    for years in range(99):
            for month in range (1, 13):
                if month == 2:
                    for day in range (1, 29):
                        if day*month==years:
                            print(f"{str(day).zfill(2)}-{str(month).zfill(2)}-{str(years).zfill(2)}")
                elif month in days_30:
                    for day in range (1, 31):
                        if day*month==years:
                            print(f"{str(day).zfill(2)}-{str(month).zfill(2)}-{str(years).zfill(2)}")
                else:
                    for day in range (1, 32):
                        if day*month==years:
                            print(f"{str(day).zfill(2)}-{str(month).zfill(2)}-{str(years).zfill(2)}")
if __name__ == "__main__":
    main()