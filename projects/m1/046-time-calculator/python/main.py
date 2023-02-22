def formatting_time(hour:int,min:int,meridian:str,days_later:int,days_of_week):
     output_day =""
     if hour == 0:
         hour = 12
     if days_of_week != "":
           week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
           days_of_week = days_of_week.lower()
           days_of_week = days_of_week.capitalize()
           index = 0
           while (index < len(week)) and week[index]!=days_of_week:
                index += 1
           if index == len(week):
                  days_of_week=""
           else:
            index = index + days_later % 7
            output_day = week[index]
     output_string = "{}:{:02} {}".format(hour,min,meridian)
     if days_of_week != "":
         output_string += ", {}".format(output_day)
     if days_later == 1:
         output_string += " (next day)"
     if days_later > 1:
         output_string += " ({} days later)".format(days_later)
     return output_string   
                
                
def add_time(start_time:str,duration:str,days_of_week=""):
   '''
   Return new time adding 'duration' at 'start_time'

   Arg:
   start_time: str in format: HH:MM AM or HH:MM PM
   duration: str in format: HH:MM. The minutes in the duration time will be a whole number less than 60, but the hour can be any whole number
   day_of_week: str optional
   '''

   index = 0
   start_hour = ""
   while start_time[index] != ":":
        start_hour += start_time[index]
        index+=1
   start_hour = int(start_hour)  

   start_min = ""
   index += 1
   while start_time[index] != " ":
        start_min += start_time[index]
        index+=1
   start_min = int(start_min)

   meridiem = start_time[index+1:len(start_time)+1]

   index = 0
   add_hour = ""
   while duration[index] != ":":
            add_hour += duration[index]
            index+=1

   add_hour = int(add_hour)    
   add_min = int(duration[index+1:len(duration)+1])

   result_hour = 0
   result_min = 0
   days_later = 0
   meridiem_result = meridiem

   result_min = start_min + add_min
   result_hour += result_min // 60
   result_min = result_min % 60
    
   result_hour += start_hour + add_hour
   days_later = result_hour // 24
   result_hour = result_hour % 24

   if (result_hour // 12) == 1:
         
         if meridiem =="AM":
               meridiem_result="PM"
         else:
               meridiem_result="AM"
               days_later+=1
        
         result_hour = result_hour % 12
   print(formatting_time(result_hour,result_min,meridiem_result,days_later,days_of_week))                
               
          
add_time("3:00 PM", "3:10")

add_time("11:30 AM", "2:32", "Monday")

add_time("11:43 AM", "00:20")

add_time("10:10 PM", "3:30")

add_time("11:43 PM", "24:20", "tueSday")

add_time("6:30 PM", "205:12")
