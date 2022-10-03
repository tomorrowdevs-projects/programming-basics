def magicaldate(date):
    date = date.split('/')
    if int(date[0]) * int(date[1]) == int(date[2][2:]):
        return True
    else:
        return False
def main():
    date = input('Enter the date (format: dd/mm/yyyy): ')
    print(f"The date is a magical date" if magicaldate(date) else f"The date is NOT a magical date")
    longmonth = [1,3,5,7,8,10,12]
    midmonth = [4,6,9,11]
    magiclist = []
    for i in range(2000,2100):
        for k in range(1,12):
            days = 0
            if k in longmonth:
                days = 31
            elif k in midmonth:
                days = 30
            elif k == 2:
                if i % 400 == 0 or i % 400 != 0 and i %100 != 0 and i % 4 == 0:
                    days = 29
                else:
                    days = 28
            for x in range(1,days):
                magic = f"{x:02d}/{k:02d}/{i}"
                if magicaldate(magic):
                    magiclist.append(magic)
    for date in magiclist:
        print(date)

if __name__ == '__main__':
    main()