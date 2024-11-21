# refactoring nomi variabili e messaggi output

mounth_28_29 = 'is 28 or 29 days'
mounth_30 = 'is 30 days'
mounth_31 = ' is 31 days'

#hard code by remove user input and run test
mount_user_input = 'march'.upper()
#mount_user_input = input('Enter mounth ').upper()

if mount_user_input == 'JANUARY':
    print('January ' + mounth_31)
elif mount_user_input == 'FEBRUARY':
    print('February ' + mounth_28_29)
elif mount_user_input == 'MARCH':
    print('March ' + mounth_31)
elif mount_user_input == 'APRIL':
    print('April ' + mounth_30)
elif mount_user_input == 'MAY':
    print('May ' + mounth_31)
elif mount_user_input == 'JUNE':
    print('June ' + mounth_30)
elif mount_user_input == 'JULY':
    print('July ' + mounth_31)
elif mount_user_input == 'AUGUST':
    print('August ' + mounth_31)
elif mount_user_input == 'SEPTEMBER':
    print('September ' + mounth_30)
elif mount_user_input == 'OCTOBER':
    print('October ' + mounth_31)
elif mount_user_input == 'NOVEMBER':
    print('November ' + mounth_30)
elif mount_user_input == 'DECEMBER':
    print('December ' + mounth_31)
else:
    print('mounth not valid!')
