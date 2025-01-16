#numbers 1 to 20
for i in range (1,21):
    print(i)
    
#input = / != odd
num = int(input("enter your number here: "))  
if num % 2 == 0:
    print("number is even")
else:
    print("number is odd") 
    
#1 to 20 odd
for i in range (1,21):
    if i % 2 == 0:
        print(i)

#50 to 100 += sum
sum = 0
for i in range (50,101):
    sum += i
print(sum)

# % 5 ==0
for i in range(1,51):
    if i % 5 == 0:
        print(i)
        
#num1 to num2 
num1 = int(input("enter your number here: ")) 
num2 = int(input("enter your number here: ")) 
for i in range(num1,num2+1):
    print(i)
    
#form 5 to 10 !
sum1 = 1
for i in range(5,11):
    sum1 += sum1 * i
print(sum1)

#revers word 
st = input("enter your string here: ")
print(st[::-1])