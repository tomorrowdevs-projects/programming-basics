def histogram(s):
    d = dict()
    for c in s:
        if c not in d:
            d[c] = 1
        else:
            d[c] += 1
    return d

def main():
    user = input("Enter a sentence: ")

    if len(histogram(user)) > 1:
        print(f"Your sentence has {len(histogram(user))} unique characters")
    else:
        print("You sentence has 1 unique character")

if __name__ == "__main__":
    main()