#Cristian Carrasco Jimenez
#08/10/24
#Este programa te pide un numero entero mayor que cero y te devuelve sus divisores.

print ("DIVISORES")


a = int(input("Escriba un número mayor que cero: "))

if a <= 0:
    print("¡Le he pedido un número entero mayor que cero!")
else:
    divisores = []
    
    for n in range(1, a + 1):
        if a % n == 0:
            divisores.append(n)
    
    
    print(("Los divisores de"), a , ("son"), divisores)
