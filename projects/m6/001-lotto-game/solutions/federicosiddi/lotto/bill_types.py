class BillTypes:
    TYPES = ["Ambata", "Ambo", "Terno", "Quaterna", "Cinquina"]

    def print(self):
        print("Type the corresponding number to select the bill type:")
        for x in range(5):
            print(self.TYPES[x],end=" --> "+str(x+1)+" ")
        print("")

