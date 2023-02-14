def inverso_lookup(dictionary, value):
    for key in dictionary:
        if dictionary[key] == value:
            return key

def most_used_female_name(first_year, second_year):
    count_female_names = {}

    for year in range(int(first_year), int(second_year) + 1):
        with open(f'babynames/yob{year}.txt', 'r') as file:
            female_name_data = (file.readline()).split(',')
            female_name = female_name_data[0]
            if female_name not in count_female_names.keys():
                count_female_names[female_name] = int(female_name_data[2])
            else:
                count_female_names[female_name] += int(female_name_data[2])
    
    max_value = max(count_female_names.values())
    name_of_max_value = inverso_lookup(count_female_names, max_value)
    result = f'The female name {name_of_max_value} is the most used in the given period, it was used {max_value} times'

    return result

def most_used_male_name(first_year, second_year):
    count_male_names = {}

    for year in range(int(first_year), int(second_year) + 1):
        with open(f'babynames/yob{year}.txt', 'r') as file:
            lines = file.readlines()
            for line in lines:
                line_list = line.split(',')
                if line_list[1] == 'M':
                    male_name = line_list[0]
                    number_of_times_name_used = line_list[2]
                    break
            if male_name not in count_male_names.keys():
                count_male_names[male_name] = int(number_of_times_name_used)
            else:
                count_male_names[male_name] += int(number_of_times_name_used)

    max_value = max(count_male_names.values())
    name_of_max_value = inverso_lookup(count_male_names, max_value)
    result = f'The male name {name_of_max_value} is the most used in the given period, it was used {max_value} times'
    
    return result

def main():
    print('Find the male and female names most used in a given period!')
    first_year = input('Find names from year: ')
    second_year = input('...to year: ')
    print(f'\nFrom {first_year} to {second_year}...')
    print(most_used_female_name(first_year, second_year))
    print(most_used_male_name(first_year, second_year))
    
if __name__ == '__main__':
    main()

