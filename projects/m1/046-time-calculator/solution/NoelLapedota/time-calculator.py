def add_time (time, dur,day=''):    
        a = time.split()
        a[0].split(':')
        v = (a[0])      
        b = (a[0]).split(':')
        d = dur.split(':')
        hour =  int(time.split(':')[0]) + int(dur.split(':')[0])
        summ =  int(b[1]) + int(d[1])
          
        
        
      
        if a[1] == 'AM':
          
          if summ > 59:
              summ == 00
              hour += 1
              print(f'{hour}:{summ} {day}AM')
          elif  hour > 12 and hour < 24:
                hour = hour - 12
                print(f'{hour}:{summ}{day}PM')
               
         
          
          if summ > 59:
              summ == 00
              hour += 1
              print(f'{hour}:{summ}{da}AM')
          elif  hour > 12 and hour < 24:
                hour - 12
                print(f'{hour}:{summ}{day} PM')


          elif   (hour - 12 ) < 12:
                    print(f'{hour}:{summ}{day} PM ')
               
          else: 
                   (hour - 12 ) > 12
                   x = (hour - 12 ) // 24 + 1
                   hour = hour - 24
                   if (hour + 12 ) > 12:
                       print(f'{hour}:{summ} PM{day} ({x}  day later)')
                   else:
                       print(f'{hour}:{summ} AM {day}({x}  day later)')

        else:  
               x = 0
              
               if   summ > 59:
                    summ == 00
                    hour += 1
                    print(f'{hour}:{summ} {day} PM')
               elif  hour < 24:
                     hour = hour % 12
                     x = hour // 24 + 1
                     print(f'{x}:{summ}{day}  PM')

               elif hour > 24:
                  s = hour % 24
                  x = hour // 24 + 1
                  hour = hour - 24
                  if s > 12:
                      s = hour % 12
                      print(f'{s}:{summ} PM {day} ({x}  days later)')
                  else:
                       print(f'{hour}:{summ} AM {day} ({x}  days later)')
add_time ('12:14 AM', '22:00'mercoledi)
