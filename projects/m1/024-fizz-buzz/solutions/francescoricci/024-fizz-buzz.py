#excercise 024 by francesco ricci

def fizzBuzz(count,end):
    message = ''
    if count % 3 ==0 and count % 5 ==0:
        #divisible for three and for five
        message = 'FizzBuzz'
    elif count % 3 ==0:
        # divisible for three
        message = 'Fizz'
    elif count % 5 ==0:
        # divisible for five
        message = 'Buzz'
    else:
        message = count

    print(message)

    if count != end:
        count +=1
        fizzBuzz(count,end)

fizzBuzz(1,100)