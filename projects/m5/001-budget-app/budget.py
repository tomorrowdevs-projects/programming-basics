class Category:
    '''
    Represents a budget category

    attributes: name, ledger
    '''
    def __init__(self,category_name:str) -> None:
        self.name = category_name
        self.ledger = []

    def __str__(self) -> str:
        out_str =""
        out_str += "{:*^30}\n".format(self.name)
        operation_string = ""
        for operation in self.ledger:
            operation_string += "{:<23.23}".format(operation["description"]) + "{:7.2f}\n".format(operation["amount"])
        out_str += operation_string
        out_str += "Total: {}\n".format(self.get_balance())
        return out_str


    def get_balance(self):
        '''
        Returns the current balance of the budget category based on the deposits and withdrawals that have occurred
        '''
        total_deposits = 0
        total_withdraw = 0
        for amount_obj in self.ledger:
            if amount_obj["amount"] >= 0:
                total_deposits += amount_obj["amount"]
            else:
                total_withdraw += -amount_obj["amount"]

        return total_deposits - total_withdraw
    
    def check_funds(self, amount:float):
        '''
        Accepts an amount as an argument. It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. 
        This method should be used by both the `withdraw` method and `transfer` method.
        '''
        balance = self.get_balance()
        if amount > balance:
            return False
        else:
            return True

    def deposit(self,amount:float,description:str = "" ):
        '''
        Appends an object to the ledger list in the form of {"amount": amount, "description": description}

        '''
        ledger_obj = {
            "amount":amount,
            "description":description
        }
        self.ledger.append(ledger_obj)

    def withdraw(self,amount:float,description:str = ""):
        '''
        Appends an object to the ledger list in the form of {"amount": amount, "description": description}
        Amount has to store in ledger as a negative number.
        If there are not enough funds, nothing should be added to the ledger. 
        This method should return `True` if the withdrawal took place, and `False` otherwise
        '''
        if self.check_funds(amount):
            ledger_obj = {
                "amount":-amount,
                "description": description
            }
            self.ledger.append(ledger_obj)
            return True
        else:
            return False
        
    def transfer(self, amount: float, other):
        '''
        Accepts an amount and another budget category as arguments. 
        The method should add a withdrawal with the amount and the description "Transfer to [Destination Budget Category]". 
        The method should then add a deposit to the other budget category with the amount and the description "Transfer from [Source Budget Category]". 
        If there are not enough funds, nothing should be added to either ledgers. 
        This method should return `True` if the transfer took place, and `False` otherwise
        '''

        if self.withdraw(amount,f"Transfer to {other.name}"):
            other.deposit(amount,f"Transfer from {self.name}")
            return True
        else:
            return False
        
    
    def total_deposit(self):
        '''
        Return the amount of deposits in self
        '''
        total_deposits = 0
        for amount_obj in self.ledger:
            if amount_obj["amount"] >= 0:
                total_deposits += amount_obj["amount"]
        return total_deposits
    
    def total_withdraw(self):
        '''
        Return the amount of withdrawals in self
        '''
        total_withdrawals = 0
        for amount_obj in self.ledger:
            if amount_obj["amount"] < 0:
                total_withdrawals += -amount_obj["amount"]
        return total_withdrawals
    
def max_lenght_of_string_in_a_list(l:list) -> int:
    '''
    Returns the max lenght of all strings in list 'l'
    '''
    max = len(l[0])
    for s in l:
        if len(s)> max:
            max = len(s)
    return max


def create_spend_chart(*args):
    '''
    
    '''
    out_string = "Percentage spent by category\n"

    def total_withdraw(*args):
        '''
        Returns the amount of withdraws of all category passed
        '''
        amount_of_withdraws = 0
        for obj in args:
            for category in obj:
                amount_of_withdraws += category.total_withdraw()
        return amount_of_withdraws

    #category_name_processed is a dict with category.name as key and a list of dot (number of dot correspond to 
    # percentage spent in each category)
    category_name_processed = {}
    amount_of_withdraws = total_withdraw(*args)

    for obj in args:
        for category in obj:
           
            percentage = int(category.total_withdraw() / amount_of_withdraws * 100) // 10 * 10
            category_name_processed[category.name] = list()
            
            for i in range(0,110,10):
                if i <= percentage:
                    category_name_processed[category.name].append("o")
                else:
                    category_name_processed[category.name].append(" ")

    for i in range(100,-10,-10):
        out_string += "{:>3}| ".format(i)
        for cat in category_name_processed.keys():
            out_string += category_name_processed[cat][i//10]
            out_string += "  "
        out_string += "\n"
    out_string += "    ----------\n"
    
    
    max = max_lenght_of_string_in_a_list(list(category_name_processed.keys()))

    for i in range(0,max+1):
        out_string += "     "
        for category in category_name_processed.keys():
            try:
                out_string += category[i]
            except IndexError:
                out_string += " "
            out_string += "  "
        out_string += "\n" 
       

    return out_string


    


