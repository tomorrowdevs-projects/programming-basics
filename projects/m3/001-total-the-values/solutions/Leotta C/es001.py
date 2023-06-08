def sum_values():
  value = input("Enter a value: ")
  if value == "":
    return 0.0
  return sum_values() + float(value)

print(sum_values())

