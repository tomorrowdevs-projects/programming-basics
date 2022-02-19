class Hat:
    def __init__(self, **kwargs):
        self.hat_list = []
        for i in kwargs:
            for j in range(kwargs[i]):
                self.hat_list.append(i)
