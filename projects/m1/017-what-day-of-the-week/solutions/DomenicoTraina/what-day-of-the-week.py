year= int(input("Enter Year: "))

day_of_the_week = ((year + ((year-1) // 4) - (year - 1) // 100) + ((year - 1) // 400 )) % 7

day_list=("sunday","monday","tuesday","wednesday","thursday","friday","saturday")

name_of_day=day_list[day_of_the_week]

print("1th Genuary of year {} was {}".format(year,name_of_day))