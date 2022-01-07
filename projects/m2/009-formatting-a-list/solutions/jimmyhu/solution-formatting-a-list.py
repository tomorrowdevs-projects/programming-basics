def lister(lst):
    return f"{', '.join(lst[:-1])} and {''.join(lst[-1:])}"
def main():
    data = ['apples', 'oranges', 'bananas', 'lemons','apples']
    print(lister(data))
if __name__ == '__main__':
    main()