import random

draw_num = random.randint(0, 38)

print("```")

#Used the value 37 for printing the 00
if draw_num == 37:
    print("The spin resulted in 00...")
    print("Pay 00")
else:
    print(f"The spin resulted in {draw_num}...")
    print(f"Pay {draw_num}")

if (
   ((0 < draw_num <= 9 or 21 <= draw_num <= 27) and draw_num % 2 != 0)
    or ((12 <= draw_num <= 18 or 30 <= draw_num <= 36) and draw_num % 2 == 0)
):
    print("Pay Black")

if (
   ((2 <= draw_num <= 10 or 20 <= draw_num <= 28) and draw_num % 2 == 0)
    or ((11 <= draw_num <= 17 or 29 <= draw_num <= 35) and draw_num % 2 != 0)
):
    print("Pay Red")

if draw_num != 0 and draw_num != 37 and draw_num % 2 != 0:
    print("Pay Odd")

if draw_num != 0 and draw_num != 37 and draw_num % 2 == 0:
    print("Pay Even")

if 1 <= draw_num <= 18:
    print("Pay 1 to 18")

if 19 <= draw_num <= 36:
    print("Pay 19 to 36")

print("```")
