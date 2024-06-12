product = int(input('Enter an integer (2 or greater): '))
print(f'The prime factor of {product} are:')
factor = 2

while product > 2:
    remainder = product % factor
    if remainder == 0:
        product = product // factor
        print(factor)
    else:
        factor += 1