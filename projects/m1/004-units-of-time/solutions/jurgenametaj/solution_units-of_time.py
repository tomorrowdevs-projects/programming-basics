# Displays the conversion from dd,hh,mm,ss to only ss

def input_time(name):
    while True:
        try:
            x = int(input('How many '+name+'?: '))
            if x>=0:
                return x
            else:
                print('I need a positive number, try again')
        except:
            print('I need a natural number, try again')


print('Hi, I can convert days, hours, minutes and seconds in seconds')
TotSeconds = ((input_time('days')*24+input_time('hours'))*60+input_time('minutes'))*60+input_time('seconds')
print('The total number of seconds that you gave me is: '+str(TotSeconds))