

def possiblechange(total, coins):
    penny = 0.01
    nickel = 0.05
    dime = 0.1
    quarter = 0.25

    if total < 0 or coins == 0:
        return False
    if coins * penny == total:
        return True
    elif nickel * coins == total:
        return True
    elif dime * coins == total:
        return True
    elif quarter * coins == total:
        return True
    else:
        return (
    possiblechange(total-penny, coins-1) or
    possiblechange(total-nickel, coins-1) or
    possiblechange(total-dime, coins-1) or
    possiblechange(total-quarter, coins-1)
       )
print(possiblechange(1.25, 5))
    