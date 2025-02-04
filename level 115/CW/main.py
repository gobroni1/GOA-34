def sort (arr):
    for i in range(1,len(arr)):
        j = i
        while arr[j-1] > arr[j] and j > 0:
            arr[j-1], arr[j] = arr[j], arr[j-1]
            j -=1
    return arr

def sum_array(arr):
    if arr:
        arr = sort(arr)
        sum = 0
        for i in range(1,len(arr)-1):
            sum += arr[i]
        return sum
    else:
        return 0