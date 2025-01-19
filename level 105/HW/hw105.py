# 1
def matrix_sum (matrix):
    result = 0
    for i in matrix:
        for j in i:
            result += j
    return result

print(matrix_sum([[1,3],[1,4], [4,1],[2,2]]))

# 2
def reverse_matrix (matrix):
    ls = []
    for i in range(len(matrix[0])):
        temp_ls = []
        for j in matrix:
            temp_ls.append(j[i])
        ls.append(temp_ls)
    return ls
print(reverse_matrix([[7,3],
                    [1,4]]))

# 3
def matrix_diagonal (matrix):
    if len(matrix) != len(matrix[0]):
        return "2D array must be N x N"
    
    result1 = 0
    result2 = 0
    i = 0
    j = len(matrix)-1
    
    for x in matrix:
        result1 += x[i]
        result2 += x[j]
        i +=1
        j -= 1
    return result1, result2 

print(matrix_diagonal([[7,3],[1,4]]))

