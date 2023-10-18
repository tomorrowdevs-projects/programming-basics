
word_to_search = "pippo"
level = 0

print(f"\nThis program will help you to find in which level the word '{word_to_search}' will be in a given url string")

url_string = str.lower(input("\nPlease insert the url string: "))

def remove(url):
    protocols = ['http://', 'https://', 'ftp://', 'mqtt://']

    for protocol in protocols:
        if str.startswith(url, protocol):
            url = str.removeprefix(url, protocol)
    
    url =str.split(url, "/")

    return url

def search(url, word, level):
    
    level += 1
    
    if word in url:
        if word == url[level-1]:
            print(f"\n{word} is on {level}° level.\n")
        else:
            search(url, word, level)
    else:
        print(f"\nThere's no {word} in url given.\n")
    
    
search(remove(url_string), word_to_search, level)
