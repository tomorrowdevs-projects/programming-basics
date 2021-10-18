from functools import lru_cache

@lru_cache
def edit_distance(first_str, second_str):
    """
    Returns the minimum edit distance between the two strings provided

    :param first_str: First string to compare
    :param second_str: Second string
    :return: type:int, minimum edit distance

    """
    # Base Case
    if len(first_str) == 0:
        return len(second_str)
    if len(second_str) == 0:
        return len(first_str)
    
    
    # Recursive Case
    if first_str[-1] == second_str[-1]:
        return edit_distance(first_str[:-1], second_str[:-1])
    else:
        d1 = edit_distance(first_str[:-1], second_str) + 1
        d2 = edit_distance(first_str, second_str[:-1]) + 1
        d3 = edit_distance(first_str[:-1], second_str[:-1]) + 1

        return min(d1, d2, d3)


def main():
    print("This script calculates the minimum edit distance between two strings.")
    string1 = input("Please enter the first string: \n")
    string2 = input("Please enter the second string: \n")
    result = edit_distance(string1, string2)
    print(f"The minium edit distance between {string1} and {string2} is: {result}")


if __name__ == "__main__":
    main()
