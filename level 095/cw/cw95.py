def get_matrix (n):
    matrix = []
    for i in range (n):
        matrix.append([0 for _ in range(n)])
        matrix[i][i] = 1
    return matrix
