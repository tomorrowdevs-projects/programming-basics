#exercise m1/019-average
count = 0
sum = 0
while True:
	user_input = int(input(f'Insert value number {count+1} [0 to exit] '))
	quit = True if user_input == 0 else False
	if quit:
		if user_input == 0 and count == 0:
			print('error insert at least one value')
			break
		else:
			print(f'The average is {int(sum / count)}')
			break
	else:
		count += 1
		sum += user_input



