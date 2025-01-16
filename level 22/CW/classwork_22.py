def Calculate_average ():
    numbers = [1,5,1234,8,354,1,467,7,12,8,367,3,2,8]
    print((sum(numbers))/len(numbers))
    
Calculate_average()

#
#

def manual_sum (numbers_list):
    sum = 0
    for i in range(len(numbers_list)):
         sum += numbers_list[i]
    print(sum / len(numbers_list))

manual_sum([1,5,1234,8,354,1,467,7,12,8,367,3,2,8])

#
#

def num_in_range (firstnum, secondnum):
    for i in range(firstnum, secondnum):
        sum += i
    print(sum)
num_in_range(23, 5895)

#
#

def from1_to_n (n):
    for i in range(1, n):
        print(i)
from1_to_n(653)

#
#

def from1_to_n (n):
    for i in range(1, n):
        if i % 2 == 0:
            print(i)
from1_to_n(653)