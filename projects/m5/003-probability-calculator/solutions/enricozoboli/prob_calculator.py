import copy
import random
import typing
from collections import Counter


class Hat:

    def __init__(self, **kwargs: int) -> None:
        self.contents = self.unpack(**kwargs)

    @staticmethod
    def unpack(**kwargs: int) -> typing.List[str]:
        contents: typing.List[str] = []
        for key, value in kwargs.items():
            for i in range(value):
                contents.append(key)
        return contents

    def draw(self, draw_number: int) -> typing.List[str]:
        drawn_lst: typing.List[str] = []
        for e in range(int(draw_number)):
            if len(self.contents) <= draw_number:
                drawn_lst = self.contents
                return drawn_lst
            else:
                ball: str = random.choice(self.contents)
                self.contents.remove(ball)
                drawn_lst.append(ball)
        return drawn_lst


def experiment(
        hat: Hat,
        expected_balls: dict,
        num_balls_drawn: int,
        num_experiments: int) -> float:
    count: int = 0
    flag: bool = False
    for exp in range(int(num_experiments)):
        hat_copy = copy.deepcopy(hat)
        drawn_lst = hat_copy.draw(num_balls_drawn)
        drawn_dct = Counter(drawn_lst)
        for key in expected_balls.keys():
            if key in drawn_dct and expected_balls[key] <= drawn_dct[key]:
                flag = True
                continue
            else:
                flag = False
                break
        if flag:
            count += 1
    return count/num_experiments

