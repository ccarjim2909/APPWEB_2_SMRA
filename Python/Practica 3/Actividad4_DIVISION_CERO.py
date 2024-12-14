#Cristian Carrasco Jimenez
#04/10/24
#Este programa te pide dos numero enteros, y calcula su division 
#escribiendo si es exacta o no. Pero si se divide por 0 que te de otro error.

print ("DIVISOR DE NUMEROS")

D = eval( input("Escriba el dividendo: " ))
d = eval( input("Escriba el divisor: " ))

if d == 0:
    print ("No se puede dividir por cero.")

elif D%d == 0:
    print ("La division es exacta. Cociente: ", D//d)

else:
    print ("La division no es exacta. Cociente: ", D//d , "Resto: ", D%d)