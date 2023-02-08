import random

class Bill():
    """Represents a lottery bill.
    
    :param max_gen_per_bill: the maximum amount of random numbers that can be generated for each bill, defaults to 10
    :type max_gen_per_bill: int
    :param min_num: the smallest random number that can be generated, defaults to 1
    :type min_num: int
    :param max_num: the largest random number that can be generated, defaults to 90
    :type max_num: int
    """
    max_gen_per_bill = 10
    min_num = 1
    max_num = 90
    
    def __init__(self, bet_type: "str", numbers_to_generate: "int", city: "str") -> "None":
        """Constructor method.
        
        :param bet_type: the type of bet chosen
        :type bet_type: str
        :param numbers_to_generate: the amount of numbers to generate in a bill
        :type numbers_to_generate: int
        :param city: city on you have bet
        :type city: str
        :param generated_numbers: list containing randomly generated numbers
        :type generated_numbers: list
        """
        self.bet_type = bet_type
        self.numbers_to_generate = numbers_to_generate
        self.city = city
        self.generated_numbers = Bill.generate_numbers(self)
            
    def generate_numbers(self) -> "list":
        """Returns a list of randomly generated numbers.
        
        :return: list of random numbers
        :rtype: list
        """
        gen_num = []
        while len(gen_num) < self.numbers_to_generate:
            num = random.randint(Bill.min_num, Bill.max_num)
            if num not in gen_num:
                gen_num.append(num)
        gen_num.sort()
        return gen_num

    def __str__(self) -> "str":
        """Returns the graphical representation of a lottery bill.
        
        :returns: a string containing a representation of a bill
        :rtype: str
        """
        dashed_line = "+{:-^30}+\n".format("")
        title_line = "|{:^30}|\n".format("Lotto Ticket")
        city_line = "|{:14}{:^16}|\n".format("  CITY       |", self.city)
        bet_line = "|{:14}{:^16}|\n".format("  BET TYPE   |", self.bet_type)
        max_num_per_row = 5
        numbers_line = "|"
        for n in range(Bill.max_gen_per_bill):
            if n == max_num_per_row:
                numbers_line += "|\n|"
            if n < len(self.generated_numbers):
                numbers_line += "{:^6}".format(self.generated_numbers[n])
            else:
                numbers_line += "      "
        numbers_line += "|\n"
        representation = "{}{}{}{}{}{}{}{}".format(dashed_line, title_line, dashed_line, city_line, bet_line, dashed_line, numbers_line, dashed_line)
        return representation
