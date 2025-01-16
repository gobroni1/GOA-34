
def odd_index (arr,ls,sum):
    for i in range(len(arr)):
        if i % 2 != 0:
            ls.append(arr[i])
    for x in ls:
        sum += x 
    return sum
print(odd_index([0,1,0,1,0,1,0,1,0,1],[],0))  
    
            