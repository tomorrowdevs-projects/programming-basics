import typing


class BetType:
    """
    A class representing the type of bet which user can choose.
    Choices : ambata, ambo, terno, quaterna, cinquina.
    """

    bet_types: typing.Dict[str, int] = {'Ambata': 1, 'Ambo': 2, 'Terno': 3,
                                        'Quaterna': 4, 'Cinquina': 5}

    @staticmethod
    def print_bet_types() -> None:
        for bet_type in BetType.bet_types.keys():
            print('-' + bet_type)

    @staticmethod
    def validate_bet(bet: str) -> bool:
        if bet.capitalize() in BetType.bet_types.keys():
            return True
        return False
