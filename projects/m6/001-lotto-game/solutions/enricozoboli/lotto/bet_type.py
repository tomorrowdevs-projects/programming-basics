import typing


class BetType:

    bet_types: typing.List[str] = ['Ambata', 'Ambo', 'Terno',
                            'Quaterna', 'Cinquina']

    @staticmethod
    def print_bet_types() -> None:
        print("Chose your bet: ")
        for bet_type in BetType.bet_types:
            print(bet_type)

    @staticmethod
    def validate_bet(bet: str) -> bool:
        if bet.capitalize() in BetType.bet_types:
            return True
        return False

