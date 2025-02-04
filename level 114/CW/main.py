def number(b):
    tp = 0  
    
    for i in b:
        p_on = i[0]   
        p_off = i[1]  
        
        tp += p_on  
        tp -= p_off  
    
    return tp  


def get_average(marks):
    return sum(marks) // len(marks)

def remove_exclamation_marks(s):
    return s.replace("!", "")

def rental_car_cost(d):
    daily_rate = 40
    total_cost = d * daily_rate
    
    if d >= 7:
        total_cost -= 50
    elif d >= 3:
        total_cost -= 20
    
    return total_cost