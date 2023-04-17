"""
CONTEXT: 
In many jurisdictions a small deposit is added to drink containers to 
encourage people to recycle them. In one particular jurisdiction, drink 
containers holding 
- one liter or less have a $0.10 deposit, and drink containers holding 
- more than one liter have a $0.25 deposit.

ASSIGNMENT:
Write a program that reads the number of containers of each size from the user.
Your program should continue by computing and displaying the refund that will 
be received for returning those containers. 
Format the output so that it includes a dollar sign and two digits to the right 
of the decimal point.
"""

def inserisci_int(prompt: str) -> int:

    while True:
        val =  input(prompt)
        try:
            int_val = float(val)
            return int_val
        except:
            print(f"inserito valore non numerico intero: {val}")


REFUND_UPTO_1L = 0.10
REFUND_MORE_1L = 0.25

def calc_deposit(nr_cont_upto_1l, nr_cont_more_1l) -> None:

    # no rounding as we will do it cosmetically in the print
    refund = nr_cont_upto_1l*REFUND_UPTO_1L+nr_cont_more_1l*REFUND_MORE_1L
    
    return refund
    

if __name__ == "__main__":

    def main():
        nr_cont_upto_1l = inserisci_int("numero di container di un litro o meno: ")
        nr_cont_more_1l = inserisci_int("numero di container di piu' di un litro: ")
        deposit = calc_deposit(nr_cont_upto_1l, nr_cont_more_1l)
        print(f"refund is ${deposit:,.2f}")

    
    main()