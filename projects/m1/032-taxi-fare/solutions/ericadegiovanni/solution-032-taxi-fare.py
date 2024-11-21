# Write a function that takes the distance travelled (in kilometers) 
# and returns the total fare as its only result.
# Write a main program that demonstrates the function.

base_fare = 4 
extra_fare = 0.25
extra_meters = 140 

def taxi_fare(km): 
  m = km * 1000 
  additional_fare = round(extra_fare * (m / extra_meters), 2 ) 
  total_fare = additional_fare + base_fare
  return total_fare  

def main():
    km_user = float(input('Insert the number of kilometers travelled: '))
    print(f'The total taxi fare is {taxi_fare(km_user)}€.')

main()