def most_popoular_names(first_year, second_year):
    female_names = []
    male_names = []

    if second_year == '':
        with open(f'babynames/yob{first_year}.txt', 'r') as file:
            female_names = (file.readline()).split(',')[0]
            lines = file.readlines()
            for line in lines:
                line_list = line.split(',')
                if line_list[1] == 'M':
                    male_names = line_list[0]
                    break
    else:
        for year in range(int(first_year), int(second_year)):
            with open(f'babynames/yob{year}.txt', 'r') as file:
                female = (file.readline()).split(',')[0]
                if female not in female_names:
                    female_names.append(female)
                lines = file.readlines()
                for line in lines:
                    line_list = line.split(',')
                    if line_list[1] == 'M':
                        male = line_list[0]
                        break
                if male not in male_names:
                    male_names.append(male)

    return female_names, male_names

def main():
    print('Find the most popoulars names between two years. \n If you want to search names of only one year, leave empty the second input.')
    first_year = input('Find names from year: ')
    second_year = input('...to year: ')

    print(most_popoular_names(first_year, second_year))

if __name__ == '__main__':
    main()

