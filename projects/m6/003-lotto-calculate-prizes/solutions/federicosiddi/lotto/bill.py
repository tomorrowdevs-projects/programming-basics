class Bill:
    """
    Class that defines a Bill object
    """
    def __init__(self, city, b_type, nums, bill_num):
        """
        Constructor function of the bill object

        :param city: type str, a valid city name, see Cities class
        :param b_type: type int, a valid bet type, see BetTypes class
        :param nums: type list, a list of random generated integer numbers from 1 to 90
        :param bill_num: type int, the actual number of the bill object
        """
        self.city = city
        self.type = b_type
        self.numbers = nums
        self.bill_num = bill_num
