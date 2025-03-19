ls = [50, 60, 70, 80]

sum1= 0
sum2=0
for i in ls:
    print(i)
    if i%2 ==0:
        sum1 += i
    else:
        sum2 += i
print(sum1,sum2)