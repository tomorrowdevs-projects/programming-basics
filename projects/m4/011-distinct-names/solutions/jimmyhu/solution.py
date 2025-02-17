import os

def names_stat(directory_path,boy_list,girl_list,start_year,end_year):
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
                        if info[0].lower() not in girl_list:
                            girl_list.append(info[0].lower())
                    elif 'Boys' in file_name:
                        if info[0].lower() not in boy_list:
                            boy_list.append(info[0].lower())
    return [boy_list,girl_list]

def main():
    male = []
    female = []
    starting_year = int(input('Enter the start year for count names: '))
    ending_year = int(input('Enter the end year for count names: '))
    names_path = os.path.realpath(os.path.join(os.path.dirname(__file__),'..','..','..','009-names-that-reachned-number-one\solutions\jimmyhu\\baby_names'))
    resul_list = names_stat(names_path,male,female,starting_year,ending_year)
    # test_dict = {}
    # for name in resul_list[0]:
    #     if name not in resul_list:
    #         test_dict[name] = 1
    #     else:
    #         test_dict[name] += 1
    # print(test_dict)
    print(f"Boys names:\n{[name.capitalize() for name in resul_list[0]]}\nGirls names:\n{[name.capitalize() for name in resul_list[0]]}")
if __name__ == '__main__':
    main() 