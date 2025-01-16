def math (a,b):
    return (a / b), (a * b), (a - b), (a + b)
print(math(12,7))

#
#

def add_up_to_100 (a,b,sum):
    while sum < 100:
        sum += a+b
        if sum > 100:
            return sum
    return sum 
print(add_up_to_100(2,3,0))

#
#

def odd_or_not (a):
    if a % 2 != 0:
        return "number is odd"
    else:
        return "number is even"
print(odd_or_not(5))

#
#


    