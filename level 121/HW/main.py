import time

def fnc1 (name, callback):
    time.sleep(2) 
    callback(f"hello {name}")

def fnc2 (message):
    print(message)
    
fnc1("name", fnc2)