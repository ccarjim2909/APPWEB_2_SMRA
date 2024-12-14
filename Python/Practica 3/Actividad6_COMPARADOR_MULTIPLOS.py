#Cristian Carrasco Jimenez
#06/10/24
#Este programa te pide dos numeros enteros, y que escriba si el mayor es
#multiplo del menor y avisa cuando son valores negativos o nulos. 

print ("COMPARADOR DE MULTIPLOS")

a = int( input("Escriba un numero: " ))
b = int( input("Escriba otro numero: " ))

if a < 0 or b < 0:
        print("Lo siento, este programa no admite valores negativos.")
elif a == 0 or b == 0:
        print("Lo siento, este programa no admite valores nulos.")
else:
     if a > b:
        mayor = a
        menor = b
        if mayor % menor == 0:
            print(mayor, ("es múltiplo de"), menor)
        else:
            print(mayor, ("no es múltiplo de"), menor)
     else:
        mayor = b
        menor = a
        if mayor % menor == 0:
            print(mayor, ("es múltiplo de"), menor)
        else:
            print(mayor, ("no es múltiplo de"), menor)

