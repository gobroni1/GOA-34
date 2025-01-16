list1 = []
for i in range (10):
    list1.append(i)
print(len(list1))

num1 = int(input("num1 pls "))
num2 = int(input("num2 pls "))

for i in range (num1, num2):
    list1.append(i)
print(list1)
print(len(list1))


list_1 = []
starting_n = int(input("starting num pls:"))
ending_n = int(input("ending num pls:"))

for i in range (starting_n, ending_n):
    list_1.append(i)
print(list_1)
print(max(list_1))
print(min(list_1))
print(sum(list_1))


list_s = []
times = int(input("how many times? "))
for i in range (times):
    num = int(input("number pls "))
    list_s.append(num)
print(sum(list_s))


list_e = ["car_0","car_1","car_2","car_3","car_4"]

list_b2 = list_e[:-2]
list_f3 = list_e[3:]

print(list_f3)
print(list_b2)