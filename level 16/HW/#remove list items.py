#List Comprehension
the_list = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

# list_1 = [x for x in the_list if "e" in x]
# print(list_1)


# list_2 = [x for x in the_list]
# print(list_2)

# list_3 = [x for x in range(3)]
# print(list_3)

# list_4 = [x for x in range (10) if x < 8 ] #number x is less than is not included while printing 
# print(list_4) 

# list_5 = [x.upper() for x in the_list ]
# print(list_5)

# list_6 = ['hello' for x in the_list]
# print(list_6)

# list_7 = [x if x != "four" else "orange" for x in the_list]
# print(list_7)


#
#

# so_list = ["orange", "mango", "kiwi", "pineapple", "banana"]
# so_list.sort()
# print(so_list)

# Sort Descending
# thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
# thislist.sort(reverse = True)
# print(thislist)

# def close_to_fif(n):
#   return abs(n - 50)

# cu_list = [100, 50, 65, 82, 23]
# cu_list.sort(key = close_to_fif)
# print(cu_list)

# list1 = ["a", "b" , "c"]
# list2 = [1, 2, 3]

# list1.extend(list2)
# print(list1)


car = "BMW"
name = "mate"
sir_name = "masuradze"

print("I am " + name + " and I like " + car )
