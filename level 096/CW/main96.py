# 0 1 2
# 3 4 5 
# 6 7 8

# def who_won (ls):
#     X_pos = []
#     O_pos = []
#     wining_pos = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7], [1,4,7],[2,5,8],[3,6,9]]
    


# return whowon([[ 'X', "O", ""], ["X", "X", "O"],["", "", ""]]))
from itertools import combinations
# eturn all(x == lst[0] for x in lst)

wining_pos = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6], [0,3,6],[1,4,7],[2,5,8]]

game = [[ 'X', "O", ""], ["X", "X", "O"], ["", "", ""]]


        
# def hwo_won (game):
#     for i in range(3):
#         if game[0][i] == "X" and game[1][i]=="X" and game[2][i]=="X":
#             return "X"
            
#         elif game[0][i] == "O" and game[1][i]=="O" and game[2][i] == "O":
#             return "O"
            
#         elif all(x == game[i][0] for x in game[i]):
#             return game[i][0]
        
#         elif game[0][0] == game[1][2] == game[1][2] and game[1][1] != "" and game[1][1] == "X":
#             return "X"
        
#         elif game[0][0] ==game[1][2]  == game[1][2] and game[1][1] != "" and game[1][1]  == "O":
#             return "O"
#         else: 
#             return "tie"
        
# print(hwo_won([[ 'X', "O", ""], ["X", "X", "O"], ["X", "", ""]]))



# def some_function (x, y):
#     x1 = str(x)
#     y1 = str(y)
#     num = x1+y1
    
#     return sorted(num) == sorted(str(x*y))

# print(some_function(6,21))


# def first_unique (s):
#     ls = []
#     ls.append(s[0])
#     for i in s:
#         if i in ls:
#             ls.append(i)
#         else:
#             return i
# print(first_unique("bbbbbbbbbbbbbaaa"))


txt = "bbbbbassus"
count = 0
for i in txt:
    count = 0
    for j in txt:
        if i == j:
            count += 1
    if count == 1:
        print(i)
        
                   

            
