def longest(arr):
    if not arr:  
        return []

    max_subarray = []
    current_subarray = [arr[0]]  

    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]: 
            current_subarray.append(arr[i])
        else:  
            if len(current_subarray) > len(max_subarray):  
                max_subarray = current_subarray
            current_subarray = [arr[i]]  #


    if len(current_subarray) > len(max_subarray):
        max_subarray = current_subarray

    return max_subarray


print(longest([1, 2, 3, 1, 2, 3, 4]))  
print(longest([1, 2, 1, 3, 16, 21, 11]))  
