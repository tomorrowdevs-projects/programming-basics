import m4_009

"""
Use the baby names data set described in "Names that Reached Number One" Exercise.
Determine which names were used most often within a time period defined by the user.
Display the boy’s name and the girl’s name given to the most children during the indicated years.
"""

def main():
    start = int(input('Insert a starting year between 1900 and 2012 to determine a range: '))        
    stop = int(input(f'Insert a last year between {start} and 2012: '))

    if 1900 <= start <= 2012 and start <= stop and 1900 <= stop <= 2012:

        most_common_boys = m4_009.find_common_names(start, stop,'Boys')
        most_common_girls = m4_009.find_common_names(start, stop,'Girls')

        print()
        print(f'The most common names for boys between {start} and {stop} are:')
        print(*most_common_boys, sep='\n')
        print()
        print(f'The most common names for girls between {start} and {stop} are:')
        print(*most_common_girls, sep='\n')
    else:
        print('Please insert a correct time range (between 1900 and 2012).')

if __name__ == '__main__':
    main()