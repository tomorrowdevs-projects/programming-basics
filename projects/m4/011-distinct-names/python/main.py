def distinct_names():
    female_names = []
    male_names = []

    for year in range(1880, 2021):
        with open(f'babynames/yob{year}.txt', 'r') as file:
            lines = file.readlines()
            for line in lines:
                line_to_list = line.split(',')
                if line_to_list[1] == 'F':
                    female_name = line_to_list[0]
                    if female_name not in female_names:
                        female_names.append(female_name)
                if line_to_list[1] == 'M':
                    male_name = line_to_list[0]
                    if male_name not in male_names:
                        male_names.append(male_name)
                    
    return female_names, male_names

def main():
    print(distinct_names())

if __name__ == '__main__':
    main()
