from random import randint

min_number = int(input('Please Enter the Minimum number: '))
max_number = int(input('Please Enter the Maximum number: '))


if(max_number <  min_number):
	print(f'{min_number} is not smaller than {max_number}')
else:
	rnd_number = randint(min_number, max_number)
	print(rnd_number)