import random

lottery = random.sample(range(1, 50), 6)
print(f"Called numbers: {lottery}")
ordered_lottery = sorted(lottery)
print(f"Ordered called numbers: {ordered_lottery}")
