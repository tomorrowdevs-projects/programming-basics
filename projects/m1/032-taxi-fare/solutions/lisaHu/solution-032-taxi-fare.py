def fare(distance):

    #floor division of total distance and surplus distance converted in km. the result is multiplied with the charging amount
    #it's floor division and not normal division as the surplus is charged only after every 140m and not after every single meter
    surplus = (distance // 0.14) * 0.25
    total_fare = 4 + surplus
    print('Total fare of taxi is: ' + str("{:.2f}".format(total_fare)) + '$')

#input from user of total distance in km + call of function
distance = float(input('Enter total distance in km travelled:  '))
fare(distance)