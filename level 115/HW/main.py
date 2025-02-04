def two_sum(numbers, target):
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            if i != j and numbers[i] + numbers[j] == target:
                return (i,j)
            
            
#fix 1 

def sum_digits(n):
    result = 0
    while n > 0:
        result += n % 10
        n //= 10  # აქ იყოფოდა მაგრამ არ ინახებოდა და დავამატე = ნიშანი
    return result

#fix 2

def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1)  #ვაკლებ უდიდეს რომ ორი იგივე (უდიდესი) რიცხვი არ დამრჩეს
    max2 = max(lst)  

    return max1 + max2