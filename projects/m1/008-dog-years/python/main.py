human_years = int(input("Enter your dog's age: "))

if human_years < 0:
    print('Error. Age cannot be negative')
elif human_years > 2:
    other_human_years = human_years - 2
    first_two_years = 10.5 * 2
    other_dog_years = 4 * other_human_years
    total = first_two_years + other_dog_years
    print(f"Your dog's converted age (from human's age to dog's age) is: {total}")
else: 
    total = human_years * 10.5
    print(f"Your dog's converted age (from human's age to dog's age) is: {total}")