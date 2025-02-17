def formatting_list(str):
    li = str.split()
    sec = []
    sec.append(li[len(li) - 1])
    sec.append("and")
    li.pop(len(li) - 1)
    n_list = ", ".join(li)
    new = " ".join(sec)
    return n_list + " " + new

def main():
    q = input("Enter your list: ")
    print(formatting_list(q))