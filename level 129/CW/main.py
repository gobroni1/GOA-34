def elimination(arr):
    seen = set()  
    for num in arr:
        if num in seen:
            return num  
        seen.add(num) 
    return None  


def elevator_distance(n):
    td = 0
    for i in range(1, len(n)):
        td += abs(n[i] - n[i-1])
    return td


