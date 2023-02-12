class Category:
    
    def __init__(self, name):
        self.ledger=[]
        self.name = name
        
        
    def display(self):
        title=""+self.name
        while len(title)<30:
            title="*"+title+"*"
        title+="\n"
        for x in self.ledger:
            for value in x.values():
                if len(str(value))>23:
                    title+= (str(value))[:23]
                else:
                   title+= (str(value).ljust(23, ' ')) 
            title+="\n"
        balance = self.get_balance()
        title += f"Total: {balance}"
        return title
                    
        
    def deposit(self, amount, description= ""):
        dict_deposit= {"amount": amount, "description": description}
        self.ledger.append(dict_deposit)
        return amount
        
    def withdraw(self, amount, description = ""):
        if self.check_funds(amount):
            item = {"amount": -amount, "description": description}
            self.ledger.append(item)
            return True
        return False
        
    def get_balance(self):
        balance = 0
        for x in self.ledger:
            balance += float(x["amount"])
        return balance
        
    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False
        
    def check_funds(self, amount):
            if amount > self.get_balance():
                return False
            return True
        
    def __repr__(self):
        return f"({self.name})"
    
def create_spend_chart(category1, category2, category3):
    print("Percentage spent by category")
    category_money_spend1= []
    category_money_spend2= []
    category_money_spend3= []
    #enter in categories to find dictionary
    for y in category1.ledger:
        for value in y.values():
            for character in str(value):
                if str(character).isdigit()==True and value not in category_money_spend1:
                    category_money_spend1.append(value)
    cost1= sum(category_money_spend1[1:])
    total1=-(category_money_spend1[0]//cost1)
    #enter in categories to find dictionary
    for y in category2.ledger:
        for value in y.values():
            for character in str(value):
                if str(character).isdigit()==True and value not in category_money_spend2:
                    category_money_spend2.append(value)
    cost2= sum(category_money_spend2[1:])
    total2=-(category_money_spend2[0]//cost2)
    #enter in categories to find dictionary
    for y in category3.ledger:
        for value in y.values():
            for character in str(value):
                if str(character).isdigit()==True and value not in category_money_spend3:
                    category_money_spend3.append(value)
    cost3= sum(category_money_spend3[1:])
    total3=-(category_money_spend3[0]//cost3)
    x=100
    while x>=0:
        if x==100:
            output=f"{x}| "
        elif x==0: output=f"  {x}| "
        else: output=f" {x}| "
        if total1>x:
            output+=" °"
        else: output+="  "
        if total2>x:
            output+=" °"
        else: output+="  "
        if total3>x:
            output+=" °"
        else: output+="  "
        x-=10
        print(output)
    print("    -------")
    

#test
if __name__ == "__main__":        
    food=Category("food")
    food.deposit(1000, "initial deposit")
    food.withdraw(10.15, "groceries")
    food.withdraw(15.89, "restaurant and more food for dessert")
    print(food.display())
    clothing = Category("Clothing")
    food.transfer(50, clothing)
    clothing.withdraw(25.55)
    clothing.withdraw(100)
    auto = Category("Auto")
    auto.deposit(1000, "initial deposit")
    auto.withdraw(15)
    print(clothing.display())
    print(auto.display())
    
    create_spend_chart(food, clothing, auto)