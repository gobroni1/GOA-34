#print number 0 - 20

for i in range(20):
    print (i+1)
    
#check if number is even or odd

x = int(input("number pls: "))

if x % 2 == 0:
    print ("even")
else:
    print ("odd or error")
    
#print even numbers up to 20 

for n in range(20):
    if n % 2 == 0:
        print (n)

#add up numbers from 50 to a 100
num = 0
for x in range(50, 100):
    num += x 
print(num)

#algorithem to print numbers devisable by 5 in ranmge of (1,50)

for i in range (50):
    if i % 5 ==0:
        print(i)
        
#input number manipulation 

numq = int(input("number pls: "))
numw = int(input("number pls: "))
if numq < numw:
    p = numw
    l = numq
else:
    p = numq
    l = numw

for i in range(l,p):
    print (i)
    print (i+1)
    
#number multiplycation from 5 to 10 

num = 1  
for i in range(5, 10):
    num *= i  
print(num)  
#15120

#word backwords

list = []
word = str(input("put a word in here: "))
char_long = len(word)

for i in range(char_long+1):
    if i  > 0:
        list.append(word[char_long-i])
print(''.join(list))
print (list)
print (i)

