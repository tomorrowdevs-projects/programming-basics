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
            operation_string += "{:<23}".format(operation["description"]) + "{:7.2f}\n".format(operation["amount"])
        out_str += operation_string
        out_str += "Total: {}".format(self.get_balance())
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
                total_withdraw += amount_obj["amount"]

        return total_deposits - total_withdraw
    
    def check_funds(self, amount:float):
        '''
        Accepts an amount as an argument. It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. 
        This method should be used by both the `withdraw` method and `transfer` method.
        '''
        balance = self.get_balance(self)
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

        #balance = self.get_balance(self)
        #if amount > balance:
         #   return False
        #else:

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

        if self.withdraw(amount,f"Transfer to [{other.name}]"):
            other.deposit(amount,f"Transfer from [{self.name}]")
            return True
        else:
            return False
        
    


def create_spend_chart(categories):
    pass