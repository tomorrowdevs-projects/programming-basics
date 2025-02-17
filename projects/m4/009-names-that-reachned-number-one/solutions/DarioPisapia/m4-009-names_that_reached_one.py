def nameFinder(filepath):
    with open(filepath , "r") as file:
        lines = file.readlines()

        for line in lines:
            line = line.split(",")
            if line[1] == "F":
                if line[0] not in f_names:
                    f_names.append(line[0])  
                    break 
                else:
                    break

        for line in lines:
            line = line.split(",")  
            if line[1] == "M":  
                if line[0] not in m_names:      
                    m_names.append(line[0])
                    break
                else:
                    break

if __name__ ==  "__main__":
    file_path = "./NameData/"
    f_names = []
    m_names = []
    input("Press START to display the most used names ")
    for n in range(1880, 2022):
        nameFinder(file_path+"yob"+str(n)+".txt")
    most_f_names = ", ".join(f_names)  
    most_m_names = ", ".join(m_names)      
    print(f"The most used female names was: {most_f_names}")
    print(f"The most used male names was: {most_m_names} ")
