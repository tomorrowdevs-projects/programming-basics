
def perfect_numbers(n):
    divs = []
    for num in range(1, n):
        if n % num == 0:
            divs.append(n)
    add = 0
    for num in divs:
        add += num
    if add == n:
        return True
    else:
        return False

def main():
    numbers = []
    input("Press Start to show all the perfect numbers between 1 and 10.000")
    for n in range(1, 10001):
        if perfect_numbers(n):
            numbers.append(n)
    print(numbers)

if __name__ == "__main__":
    main()
