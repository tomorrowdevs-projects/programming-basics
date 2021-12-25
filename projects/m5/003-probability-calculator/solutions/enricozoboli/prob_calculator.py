import copy
import random
import typing


class Hat:

    def __init__(self, **kwargs: int) -> None:
        self.contents = self.unpack(**kwargs)

    @staticmethod
    def unpack(**kwargs: int) -> typing.List[str]:
        contents: typing.List[str] = []
        for key, values in kwargs.items():
            for i in range(values):
                contents.append(key)
        return contents

    def draw(self, draw_number: int) -> typing.List[str]:
        drawn_lst: typing.List[str] = []
        if len(self.contents) <= draw_number:
            drawn_lst = self.contents
            return drawn_lst
        else:
            for e in range(int(draw_number)):
                ball: str = random.choice(self.contents)
                self.contents.remove(ball)
                drawn_lst.append(ball)
            return drawn_lst


def experiment():
    pass


