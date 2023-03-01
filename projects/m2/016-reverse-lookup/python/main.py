def reverse_lookup(dictionary: dict, value) -> list:
    '''
    Do the reverse lookup in dictionary, found all keys of value 'value.
    Return a list of these keys.
    Return an empty list if value is not in dict
    '''

    key_list = []

    for item in dictionary:
        if dictionary[item] == value:
            key_list.append(item)
    
    return  key_list

if __name__== "__main__":

    x = {
        "nome":"Raffaella",
        "età":"30",
        "indirizzo":"Via Rossini",
        "civico":"30",
        "comune_residenza":"Salerno",
        "comune_nascita":"Salerno",
        "CAP_residenza":"84080",
        "CAP_nascita":"84080",
        "comune_domicilio":"Salerno"
    }

    print(x)

    #should return ['età', 'civico']
    print(reverse_lookup(x,"30"))

    #should return [] - empty list
    print(reverse_lookup(x,"Mario"))

    #should return ['indirizzo']
    print(reverse_lookup(x,"Via Rossini"))

    #should return ['comune_residenza','comune_nascita','comune_domicilio']
    print(reverse_lookup(x,"Salerno"))

    #should return ['CAP_residenza','CAP_nascita']
    print(reverse_lookup(x,"84080"))
