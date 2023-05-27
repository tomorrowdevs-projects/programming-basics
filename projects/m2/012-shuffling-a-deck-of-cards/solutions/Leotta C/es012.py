from random import randint, choices


def createDeck():
  value = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]
  suit = ["h", "s", "d", "c"]
  deck = []
  for symbol in suit:
    for number in value:
      deck.append(number+symbol)
  return deck


def shuffle(deck):
  card = choices(deck, k=52)
  return card


if __name__ == '__main__':
    deck = createDeck()
    print(f"Original deck: {deck}")
    print(f"Shuffled deck: {shuffle(deck)}")