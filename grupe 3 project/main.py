import random 
from itertools import combinations


board = ["0","1","2",
         "3","4","5",
         "6","7","8"]

winx = False
wino = False
turne = 0

print("\n")
print("3 by 3 board is presented, with numbers in each slot, you play as an X. to put X in your desired slot, enter corespondig number and press enter. compiuter will play agtaincet you with * simbol. rules are same as in teac-tac-to.")

def print_board(tic_tac_to):
    md = len(tic_tac_to)
    for i in range(0, md, 3):
        print(tic_tac_to[i] + " | " + tic_tac_to[i + 1] + " | " + tic_tac_to[i + 2])
        if i < len(board) - 3:
            print("----------")

def win_or_not(board):
    
    for i in range(3):  
        if board[i] == board[i+3] == board[i+6]:
            if board[i] == "*":
                return True, f"AI won the game 🤯"
            return True, f"{board[i]} won the game"
    for i in range(0, 9, 3): 
        if board[i] == board[i+1] == board[i+2]:
            if board[i] == "*":
                return True, f"AI won the game 🤯"
            return True, f"{board[i]} won the game"

    if board[0] == board[4] == board[8]:
        if board[4] == "*":
            return True, f"AI won the game 🤯"
        return True, f"{board[4]} won the game"

    if board[2] == board[4] == board[6]:
        if board[4] == "*":
            return True, f"AI won the game 🤯"
        return True, f"{board[i]} won the game"

    return False, None

def calculate_move (game):
    x_indices = [index for index, value in enumerate(game) if value == "X"]

    pairs = [list(pair) for pair in combinations(x_indices, 2)]

    for Xs in pairs:
        if len(Xs) == 2:
            #cheking for horizontal positions
            lsh = []  #list for horizontal algotithem
            hor = False

            for i in range(3):
                h = [x for x in range(i * 3, (i + 1) * 3)]
                lsh.append(h)
                if Xs[0] in lsh[i] and Xs[1] in lsh[i]:
                    hor = True

            ret_ver = None
            ret_hor =None
            ret_dia = None
            
            #cheking for vertical positions 
            lsv = [] #list for vertical algotithem
            ver = False

            for i in range(3):
                j=[x for x in range(i,9,3)]
                lsv.append(j)
                if Xs[0] in lsv[i] and Xs[1] in lsv[i]:
                    ver = True

            #cheking for diagonal positions 
            lsd = [[0,4,8],[2,4,6]]
            diag = False

            if Xs[0] in lsd[0] and Xs[1] in lsd[0] or Xs[0] in lsd[1] and Xs[1] in lsd[1]:
                diag = True

            if hor:
                lsh_tep = []
                for lss in lsh:
                    lsh_tep.append([i for i in lss if i not in Xs])
                lsh = lsh_tep
                ret_hor = ([i for i in lsh if len(i) == 1][0][0])
                
            if ver: 
                lsv_tep = []
                for lss in lsv:
                    lsv_tep.append([i for i in lss if i not in Xs])
                lsv = lsv_tep
                ret_ver = ([i for i in lsv if len(i) == 1][0][0])

            if diag:
                lsd_tep = []
                for lss in lsd:
                    lsd_tep.append([i for i in lss if i not in Xs])
                lsd = lsd_tep
                ret_dia =([i for i in lsd if len(i) == 1][0][0])
            
            if ret_hor is not None and game[ret_hor] != "*":
                return(ret_hor) 
            elif ret_ver is not None and game[ret_ver] != "*":
                return(ret_ver) 
            elif ret_dia is not None and game[ret_dia] != "*":
                return(ret_dia) 
            
            else: 
                x_indices = [index for index, value in enumerate(game) if value == "*"]

                pairs = [list(pair) for pair in combinations(x_indices, 2)]

                for Xs in pairs:
                    if len(Xs) == 2:
                        #cheking for horizontal positions
                        lsh = []  #list for horizontal algotithem
                        hor = False

                        for i in range(3):
                            h = [x for x in range(i * 3, (i + 1) * 3)]
                            lsh.append(h)
                            if Xs[0] in lsh[i] and Xs[1] in lsh[i]:
                                hor = True

                        ret_ver = None
                        ret_hor =None
                        ret_dia = None
                        
                        #cheking for vertical positions 
                        lsv = [] #list for vertical algotithem
                        ver = False

                        for i in range(3):
                            j=[x for x in range(i,9,3)]
                            lsv.append(j)
                            if Xs[0] in lsv[i] and Xs[1] in lsv[i]:
                                ver = True

                        #cheking for diagonal positions 
                        lsd = [[0,4,8],[2,4,6]]
                        diag = False

                        if Xs[0] in lsd[0] and Xs[1] in lsd[0] or Xs[0] in lsd[1] and Xs[1] in lsd[1]:
                            diag = True

                        if hor:
                            lsh_tep = []
                            for lss in lsh:
                                lsh_tep.append([i for i in lss if i not in Xs])
                            lsh = lsh_tep
                            ret_hor = ([i for i in lsh if len(i) == 1][0][0])
                            
                        if ver: 
                            lsv_tep = []
                            for lss in lsv:
                                lsv_tep.append([i for i in lss if i not in Xs])
                            lsv = lsv_tep
                            ret_ver = ([i for i in lsv if len(i) == 1][0][0])

                        if diag:
                            lsd_tep = []
                            for lss in lsd:
                                lsd_tep.append([i for i in lss if i not in Xs])
                            lsd = lsd_tep
                            ret_dia =([i for i in lsd if len(i) == 1][0][0])
                        
                        if ret_hor is not None and game[ret_hor] != "X":
                            return(ret_hor) 
                        elif ret_ver is not None and game[ret_ver] != "X":
                            return(ret_ver) 
                        elif ret_dia is not None and game[ret_dia] != "X":
                            return(ret_dia)

def corner_isX(game):
    xs= []
    corners = [0,2,6,8]
    for i in range (9):
        if game[i] == "X":
            xs.append(i)
    
    for x in xs:
        if (x + 3) in corners:
            return x+3
        elif (x-3) in corners:
            return x-3
        elif (x -1) in corners:
            return x -1
        elif (x+1) in corners:
            return x+1
        elif (x+2) in corners:
            return x+2
        elif (x-2) in corners:
            return x-2     
    
def AI (game, trs, lastX):   
    curent = trs
    index = calculate_move(board)
    index2 = corner_isX(board)
    if index is not None and game[index] != "*": 
        game[index] = "*"
    
    elif game[4] == "X" and game[6] != "*": 
        game[6] = "*" 
      
    elif game[4] != "X" and game[4] != "*" and curent == trs:
        game[4] = "*"
        trs +=1 
        
    elif index2 is not None and curent == trs and game[index2] != "X" and game[index2] != "*":
        game[index2] = "*"
        trs += 1
    
    elif game[0] != "X" and game[0] != '*' and curent == trs:
        game[0] = "*"
        trs += 1
    
    elif game[2] != "X" and game[2] != '*' and curent == trs:
        game[2] = "*"
        trs += 1
    
    elif game[8] != "X" and game[8] != '*' and curent == trs:
        game[8] = "*"
        trs += 1
    
    elif lastX - 1 >= 0  and game[lastT-1] != "X" and game[lastX-1] != "*" and curent == trs:
        game[lastX-1] = "*"
        trs += 1 
    
    elif lastX + 1 <= 8  and game[lastT+1] != "X" and game[lastX+1] != "*" and curent == trs:
        game[lastX+1] = "*"
        trs += 1 
    
    elif lastX - 3 >= 0 and game[lastT-3] != "X" and game[lastX-3] != "*" and curent == trs:
        game[lastX-3] = "*"
        trs += 1
        
    elif lastX + 3 <= 8 and game[lastT+3] != "X" and game[lastX+3] != "*" and curent == trs:
        game[lastX+3] = "*"
        trs += 1

    else:
        rg = random.randint(0,8)
        curent = trs
        while curent == trs:
            if game[rg] != "X" and game[rg] != "*":
                game[rg] = "*"
                trs+= 1
                
while True: 
    moves = [0,1,2,3,4,5,6,7,8]
    print("\n")
    if turne == 0 or turne%2 == 0:
        print_board(board)
    has_winner, message = win_or_not(board)
    if has_winner:
        print(message)
        break

    if turne == 9:
        print("It's a tie!")
        break
    
    if turne % 2 == 0:
        player1 = int(input("X: "))
        if player1 not in moves:
            print("Enter numbers in the range 0-9")
        elif board[player1] != "*" and board[player1] != "X":
            board[player1] = "X"
            turne += 1 
            lastT = player1
        else:
            print("spot is taken")
    else:
        AI(board, turne, lastT)
        turne += 1     

#change