f_names = {}
m_names = {}
path = "E:/School/programming-basics/NamesData/"

def sumName(file_path):
    with open(file_path, "r") as file:
        lines = file.readlines()
        for line in lines:
            line = line.strip().split(",")
            if line[1] == "F":
                if line[0] not in f_names:
                    f_names[line[0]] = int(line[2])
                else:
                    f_names[line[0]] += int(line[2])
            else:
                if line[0] not in m_names:
                    m_names[line[0]] = int(line[2])
                else:
                    m_names[line[0]] += int(line[2])

def max_from_dict(dct):
    max_d = ""
    n = 0
    for key in dct:
        if dct[key] > n:
            max_d = key
            n = dct[key]
    return max_d

def main():    
    print("With this program you can find the most used name in a certain period. Press ENTER to start.")
    start = input("From (not before 1880): ")
    end = input("To (not after 2021): ")
    if int(start) < 1880 or int(end) > 2021:
        print("Range not valid")
    else:
        for n in range(int(start), int(end) + 1):
            sumName(path + "yob"+ str(n) +".txt")
        
        max_f = max_from_dict(f_names)
        max_m = max_from_dict(m_names)               
        print(f"The most given female's name in that period was {max_f} with {f_names[max_f]} births")
        print(f"The most given male's name in that period was {max_m} with {m_names[max_m]} births")

if __name__ == "__main__":
    main()
