# ls = []

# while len(ls) < 5:
#     inp = int(input("enter number pls: "))
#     ls.append(inp)
    
# print(ls[1], ls[3])


# import random

# rand = [random.randint(1, 100) for _ in range(10)]
# print(rand)
# for i in range(len(rand)):
#     if i % 2 != 0:
#         print(rand[i])


def sum_cal (ls):
    return min(ls), max(ls)

print(sum_cal([]))