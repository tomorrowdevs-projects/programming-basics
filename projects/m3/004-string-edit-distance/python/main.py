def string_edit_distance(s, t):
    if len(s) == 0:
        return len(t)
    elif len(t) == 0:
        return len(s)
    else:
        cost = 0
        if s[-1] != t[-1]:
            cost = 1
        d1 = string_edit_distance(s[:-1], t) + 1
        d2 = string_edit_distance(s, t[:-1]) + 1
        d3 = string_edit_distance(s[:-1], t[:-1]) + cost
        return min(d1, d2, d3)

if __name__ == "__main__":
    first_string = input("Enter the first string: ")
    second_string = input("Enter the second string: ")
    print("The edit distance is", string_edit_distance(first_string, second_string))