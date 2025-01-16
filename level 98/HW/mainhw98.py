# def uniquematrix (matrix):
#     ls = []
#     for i in matrix:
#         for j in i:
#             if j not in ls:
#                 ls.append(j)
            
            
            
def unique (s):
    ls = []
    for i in s:
        if i not in ls:
            ls.append(i)
        else:
            return False
    return True

def matrix_unicue (matrix):
    ls = []
    for i in matrix:
            if unique(i):
                ls.append(i)
    return ls

print(matrix_unicue([[1,2,3],[5,6,7,7],[1,2,3,8,9,4]]))