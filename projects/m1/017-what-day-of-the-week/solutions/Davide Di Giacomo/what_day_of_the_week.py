from math import floor

#variables
s_0 = "sunday"
m_1 = "monday"
t_2 = "tuesday"
w_3 = "wednesday"
t_4 = "thursday"
f_5 = "friday"
s_6 = "saturday"

#input a year
year = int(input("Insert a year to find what day was the 1st january: "))


day_of_the_week = (year + floor((year - 1) / 4) - floor((year - 1) / 100) + floor((year - 1) / 400)) % 7
print (f"the 1st January of {year} was:")

#define the day
if day_of_the_week == 0:
    print (s_0)
    
elif day_of_the_week == 1:
    print (m_1)
    
elif day_of_the_week == 2:
    print (t_2)
    
elif day_of_the_week == 3:
    print (w_3)
    
elif day_of_the_week == 4:
    print (t_4)
    
elif day_of_the_week == 5:
    print (f_5)
    
elif day_of_the_week == 6:
    print (s_6)
    


