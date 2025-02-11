

all = ['mate chikaidze', 'giga kochalidze','zuka qoridze','gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili','nika macharashvili','ilia dzindzibadze' , 'nikoloz chitadze' ]

leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]

import random

def group (names, leaders):
    random.shuffle(names)
    random.shuffle(leaders)
    
    group = []
    for i in range(len(leaders)):
        temp = []
        temp.append(leaders[i])
        temp.append(names[i+i])
        temp.append(names[i+i+1])
        group.append(temp)
    return group

print(group(['mate chikaidze', 'giga kochalidze','zuka qoridze','gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili','nika macharashvili','ilia dzindzibadze' , 'nikoloz chitadze' ],["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]))