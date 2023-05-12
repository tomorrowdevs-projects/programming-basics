#A string is a palindrome if it is identical forward and backward. For example “anna”, “civic”, “level” and “hannah” are all examples of palindromic words. 

#approach: given the nature of a palindrome I used a while loop to loop over the array(coming from the string) with 2 pointers. One pointer starts from the beginning and another starts from the end of the array. If the value of the first point is equal to the value of the second point the while loop can go ahead otherwise it breaks. If the loop can complete its cycle, the word is a palindrome

string=input("insert your string to check if it is a palindrome: ")

def isPalindrome(string):
  #string is converted to an array
  arr = list(string)
  #starting point for the first pointer
  left=0
  #starting point for the second pointer
  right=len(arr)-1
  result=""
  #I need this condition to avoid that the first pointer reaches the end and the second point reaches the beginning
  while left<right:
    if(arr[left]!=arr[right]):
      result="Not Palindrome"
      break
    else:
      left+=1
      right-=1
      result="Palindrome"

  return result

print(isPalindrome(string))