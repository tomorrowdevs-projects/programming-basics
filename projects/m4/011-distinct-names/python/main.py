import os

files_path = os.path.dirname(__file__)+"\\babynames\\"

female_name = set()
male_name = set()

for file in range(1880,2022,1):
    file_name = "yobXXXX.txt"
    file_name = file_name.replace("XXXX",str(file))
    
    f = open(files_path+file_name)
    
    for line in f:
        line = line.split(",")
        #to remove last \n character
        line[2] = line[2][:len(line[2])-1]

        if line[1] == "F":
            female_name.add(line[0])
        else:
            male_name.add(line[0])

    f.close()


output_file = open(os.path.dirname(__file__)+"\\female_name.txt","w")
for name in female_name:
    output_file.write(f"{name}\n")
output_file.close()
output_file = open(os.path.dirname(__file__)+"\\male_name.txt","w")
for name in male_name:
    output_file.write(f"{name}\n")
output_file.close()
