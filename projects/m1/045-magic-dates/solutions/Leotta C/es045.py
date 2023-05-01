def magic_date():
    for year in range(1901, 2001):
        for month in range(1,13):
            for day in range(1,32):
                if month == 2 and day in range(29,32):
                    continue
                if day*month == year % 100:
                    print(f"{day}/{month}/{year}")

if __name__ == '__main__':
    print("List of magic dates in the 20th century:")
    magic_date()