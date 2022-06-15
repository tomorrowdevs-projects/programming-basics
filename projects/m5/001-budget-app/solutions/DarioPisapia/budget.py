class Category:
    def __init__(self, category):
        self.category = category
        self.ledger = []

    def deposit(self, amount, description = ""):
        dep = {"amount": amount, "description": description}
        self.ledger.append(dep)
    
    def withdraw(self, amount, description = ""):
        wdraw = {"amount": -amount, "description": description}
        if self.check_funds(amount):    
            self.ledger.append(wdraw)
            return True
        else:
            return False

    def get_balance(self):
        balance = 0
        for movement in self.ledger:
            balance += float(movement["amount"])
        return balance

    def transfer(self, amount, bgt_cat):      
        if self.check_funds(amount):
            wdrmsg = f"Transfer to {bgt_cat.category}"
            self.withdraw(amount, wdrmsg)
            trmsg = f"Transfer from {self.category}"
            bgt_cat.deposit(amount, trmsg)
            return True
        else:
            return False

    def check_funds(self, amount):
        if amount > self.get_balance():
            return False
        else:
            return True

    def __str__(self):
        l = (30-len(self.category))//2
        r = 30-len(self.category)-l
        mov = ""
        for movement in self.ledger:
            num = "{:.2f}".format(movement["amount"]).rjust(7)
            if len(movement["description"]) > 23:
                mov += movement["description"][:23] + num[:7] + "\n"
            else:
                mov += movement["description"].ljust(23) + num[:7] + "\n"

        return l*"*"+self.category+r*"*" + "\n" + mov + f"Total: {self.get_balance()}"


def create_spend_chart(categories):
    #creating dict in format {category_name: amount_spent} and the total spent
    totals = {}
    tot = 0
    for cat in categories:
        cat_total = 0
        movements = cat.ledger
        for mov in movements:
            if mov["amount"] < 0:
                cat_total -= mov["amount"]
        totals[cat] = cat_total
        tot += cat_total

    #list with number of "o" for category but in horizontal, like "     ooo" 
    cat_o = []
    for key in totals.keys():
        n_o = int((totals[key] / tot * 100) // 10)
        o = (10 - n_o) * " " + (1 + n_o) * "o"
        cat_o.append(o)

    #list of "o" aligned correctly. One "o" or space for every category, like " o  o  o"
    o_aligned = []
    for n in range(11):
        align_str = ""
        for cat in range(len(totals)):
            s = cat_o[cat][n]+"  "
            align_str += s
        o_aligned.append(align_str)

    #print the chart's upper part 
    table = "Percentage spent by category\n"
    num = 100
    for n in range(11):
        table += f"{num:>3}| {o_aligned[n]}\n"
        num -= 10

    table += "    -" + len(totals) * "---"
    table += "\n"
    #transform Category to category names
    okeys = []
    for key in totals.keys():
        oke = key.category
        okeys.append(oke)

    #find the max len of category names
    l_max = 0
    for key in okeys:
        if len(key) > l_max:
            l_max = len(key)

    #adding whitespaces to have the equal word's lenght and not going out of range with loops
    new_keys = []
    for key in okeys:
        nk = key + (l_max-len(key))*" "
        new_keys.append(nk)

    #aligning words and print them in their right position
    for n in range(l_max):
        align_w = "     "
        for key in new_keys:
            nw = key[n]+"  "
            align_w += nw
        table += f"{align_w}"
        if n != l_max-1:
            table += "\n"
    return table
