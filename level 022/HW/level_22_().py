def convert_to_str(equation):
    print(eval(equation))
convert_to_str(("2 + 23"))

#
#

def sort(the_list):
    return sorted(the_list)
print(sort(["banana", "apple", "cherry"]))

#
#

def list_of_letters (the_word):
    the_list = []
    for i in range (len(the_word)):
        the_list.append(the_word[i])
    return the_list
print (list_of_letters("niggeria"))

#
#

def add_lists(list_1,list_2):
    list_3 = list_1 + list_2
    return sorted(list_3)
print(add_lists([1,2,3,4,5],[6,7,8,9]))          

#
#

def convert (str1):
    str1 = str1.replace(" ", "").lower()
    if str1[::-1] != str1:
        print("not the same")
        return False
    else: 
        print("it is same")
        return True
convert("rar")

#
#

def longest (len_list):
    max_length = 0
    longest_string = ""
    for x in len_list:
        if len(x) > max_length:
            max_length = len(x)
            longest_string = x
    return longest_string
print(longest(["1234", "12345", "123", "1", "123456"]))

#
#

def factorial_of_n(fac,n):
    for i in range (1,n+1):
        fac *= i
        print(fac)
        
factorial_of_n(1, 10)

#
#

def max_plus_max (list1, list2):
    max1 = max(list1)
    max2 = max(list2)
    return max1 + max2
print(max_plus_max([1,5,2354,89,23456,41,5150,642,],[62354,5105,54148,8754]))

#
#

def max_plus_max (list1, list2):
    min1 = min(list1)
    min2 = min(list2)
    return min1 - min2
print(max_plus_max([1,5,2354,89,23456,41,5150,642,],[62354,5105,54148,8754]))

#
#

def max_plus_max (list1, list2):
    max1 = max(list1)
    max2 = min(list2)
    return max1 - max2
print(max_plus_max([1,5,2354,89,23456,41,5150,642,],[62354,5105,54148,8754]))

#
#

def all_sum (sum,listsum):
    for i in range(len(listsum)):
        sum =+ sum + listsum[i] 
        #print(i)
        print (sum)
all_sum(0,[5,5,9])

#
#

def letters (string_to_see):
    list_of_letters = []
    for i in range(len(string_to_see)):
        if string_to_see[i] == "a":
            list_of_letters.append(string_to_see[i])
        elif string_to_see[i] == "e":
            list_of_letters.append(string_to_see[i])
        elif string_to_see[i] == "i":
            list_of_letters.append(string_to_see[i])
        elif string_to_see[i] == "o":
            list_of_letters.append(string_to_see[i])
        elif string_to_see[i] == "u":
            list_of_letters.append(string_to_see[i])
    return len(list_of_letters)
print(letters("adfgusdfiasdugsvogifdsa"))

#
#

def squars (intslist):
    squared = []
    for i in range (len(intslist)):
        squared.append(intslist[i]**2)
    return squared
print(squars([2,3,4]))

#
#

def reversed (rs):
    return rs[::-1]
print(reversed("gobroni"))
    
#
#

import math

def greatest (a,b):
    return math.gcd(a,b)
print(greatest(124,456))

#
#

def ma (s,intlist1):
    for i in (intlist1):
        s += i
    return s / len(intlist1)
print(ma(0,[2,5,7]))