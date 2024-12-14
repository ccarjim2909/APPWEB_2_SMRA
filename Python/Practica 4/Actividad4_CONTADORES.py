#Cristian Carrasco Jimenez
#08/10/24
#Este programa te pide un numero x a introducir y estos numeros te devuelva
# cuales son negativos.

print ("NUMEROS NEGATIVOS")

valores = int(input("¿Cuantos valores va a introducir? "))

cont = 0
num = 0
neg = 0

if valores < 0:
    print ("¡Imposible!")

else:
    for n in range(valores):
        cont = cont +1
        num = num +1
        if int(input("Escriba el número "+str(num)+ ": ")) < 0:
            neg = neg + 1
    if neg == 0:
        print ("No ha escrito ningun numero negativo.")
    elif neg == 1:    
        print ("Ha escrito", neg , "numero negativo.")
    else:
        print ("Ha escrito", neg , "numeros negativos.")
            