#asking for name and sir name
name = input("what is your name sir?: ")
sir_name = input("hat is your last name sir?: ")

print ("hello " + name + " today is the day you become a chad! is your last name " + sir_name + "? we need it for formality" )

#
#

my_number = 123
get_num = int(input ("we need your number sir, can you provide it here ?: "))

print (my_number + get_num)

#
#

#storing three numbers in a list
num_list = [2,64,14]
#geting number of items in the list and converting it to int s owe can use it in calculations 
amout = int(len(num_list))
#calculating 
print ((num_list[0] + num_list[1] + num_list[2]) / amout )

#
#

str = input ("we can't devide on strs but here we are: ")
random = 3
print (str / 3) #we can not divide strs by int !

num1 = 9
print (num1 / random) # we can devide ints by ints  

#
#

num1 = int(input("What is your first number: "))
num2 = int(input("What is your second number: "))
to_do = input("What do you want to do: ")

text = "something went wrong" + " number is zero or less"

if to_do == "*":
    result = num1 * num2
    print(result)
    if result <= 1:
        print (text)
elif to_do == "/":
    result = num1 / num2
    print(result)
    if result <= 1:
        print (text)
elif to_do == "+":
    result = num1 + num2
    print(result)
    if result <= 1:
        print (text)
elif to_do == "-":
    result = num1 - num2
    print(result)
    if result <= 1:
        print (text)
