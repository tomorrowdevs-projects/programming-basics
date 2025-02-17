import sys

try:
    file_name_1 = sys.argv[1]
    file_name_2 = sys.argv[2]

    file_1 = open(file_name_1)
    file_2 = open(file_name_2)

    data1 = file_1.read()
    data2 = file_2.read()

    print(f"{data1}\n{data2}")

    file_1.close()
    file_2.close()

except FileNotFoundError:
    print("ERROR! File not founded")
except IndexError:
    print("ERROR! Args omitted")
