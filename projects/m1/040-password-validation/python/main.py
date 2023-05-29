def ok_password(psw):
    """
    This is a function that checks if a password is strong enough.

    Args:
        psw (str): A password string

    Returns:
        str: A message indicating if the password is good or not
    """
    if len(psw) >= 8 and any(c.isupper() for c in psw) and any(c.islower() for c in psw) and any(c.isdigit() for c in psw):
        return f"{psw} is a good password"
    else:
        return f"{psw} isn't a good password"

if __name__ == '__main__':
    psw = input("Insert a password: ")
    print(ok_password(psw))