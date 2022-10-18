def display_10_last_lines():
    try:
        file1 = open('text.txt', 'r')
        for line in file1[-10:]:
            print(file1.readline(), end='')
    except Exception as e:
        print('No file found. ', e)

display_10_last_lines()