import sys

try:
    with open(sys.argv[1]) as file:
        last_ten_lines = list()

        for line in file:
            if len(last_ten_lines) < 10:
                last_ten_lines.append(line.strip())
            else:
                del last_ten_lines[0]
                last_ten_lines.append(line.strip())
    
        for stored_line in last_ten_lines:
            print(stored_line)  
      
except FileNotFoundError:
    print("File '{}' not found.".format(sys.argv[1]))
except IndexError:
    print("The argument is omitted.")