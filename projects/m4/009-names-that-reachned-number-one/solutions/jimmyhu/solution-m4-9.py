import os

def names_stat(directory_path,boy_dict,girl_dict,start_year,end_year):
    #lettura di tutti i file nella directory indicata con list dir
    for file in os.listdir(directory_path):
        #composizione del percorso del file
        file = os.path.join(directory_path, file)
        #rendere una stringa il nome del file con le extentions senza tutto il percorso
        file_name = os.path.basename(file)
        #controllo se è un file e il la data è all'interno del range indicato
        if os.path.isfile(file) and end_year >= int(file_name.split('_')[0]) >= start_year:
            with open(file, 'r', encoding='UTF-8') as data:
                for line in data:
                    info = line.strip().split(' ')
                    #controllo se è un nome per maschi o femmine
                    if 'Girls' in file_name:
                        if info[0].lower() not in girl_dict:
                            girl_dict[info[0].lower()] = int(info[1])
                        else:
                            girl_dict[info[0].lower()] += int(info[1])
                    elif 'Boys' in file_name:
                        if info[0].lower() not in boy_dict:
                            boy_dict[info[0].lower()] = int(info[1])
                        else:
                            boy_dict[info[0].lower()] += int(info[1])
    return [boy_dict,girl_dict]

def popular(dictionary):
    return max(dictionary, key=lambda x: dictionary[x])

def main():
    male = {}
    female = {}
    starting_year = int(input('Enter the start year for count names: '))
    ending_year = int(input('Enter the end year for count names: '))
    names_path = os.path.realpath(os.path.join(os.path.dirname(__file__),'baby_names'))
    resul_dict = names_stat(names_path,male,female,starting_year,ending_year)
    pop_boy = popular(resul_dict[0])
    pop_girl = popular(resul_dict[1])
    print(f"The most popular name for boys are: {pop_boy} with {resul_dict[0][pop_boy]}\nThe most popular name for girls are: {pop_girl} with {resul_dict[1][pop_girl]}")
if __name__ == '__main__':
    main()