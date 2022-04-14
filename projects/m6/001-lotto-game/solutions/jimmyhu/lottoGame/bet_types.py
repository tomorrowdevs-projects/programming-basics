
class bet_types:
    play = ['ambata','ambo','terno','quaterna','cinquina']

    @classmethod
    def check_bet_type(cls , bet:str):
        return bet.lower() in cls.play