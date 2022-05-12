f_names = []
m_names = []

def nameFinder(path):
    with open(path, "r") as file:
        lines = file.readlines()
        for line in lines:
            line = line.split(",")

            if line[1] == "F" and line[0] not in f_names:
                f_names.append(line[0])
            if line[1] == "M" and line[0] not in m_names:
                m_names.append(line[0])
                

if __name__ == "__main__":
    input("Press ENTER to display all the names...they are a lot...even more...")
    for n in range(1880, 2022):
        path = "./NameData/yob" +str(n) + ".txt"
        nameFinder(path)

    print(f"The distinct female's names are:\n{f_names}")
    print(f"The distinct male's names are:\n{m_names}")
 