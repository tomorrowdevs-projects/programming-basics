
class ruota:
    citys = ['bari', 'cagliari', 'firenze', 'genova', 'milano', 'napoli', 'palermo', 'roma', 'torino', 'venezia', 'tutte']

    @classmethod
    def check_ruota(cls , selected:str):
        return selected.lower() in cls.citys
            