#Cristian Carrasco Jimenez
#04/10/24
#Este programa te pide un año y si es bisiesto o no.

print ("COMPROBADOR DE AÑOS BISIESTOS")


a = int(input("Escriba un año y le diré si es bisiesto: "))


if a % 4 == 0:
    if a % 100 == 0:
        if a % 400 == 0:
            print(("El año"), a ,("es un año bisiesto porque es múltiplo de 400."))
        else:
            print(("El año"), a ,("no es un año bisiesto porque es múltiplo de 100 sin ser múltiplo de 400."))
    else:
        print(("El año"), a ,("es un año bisiesto porque es múltiplo de 4 sin ser múltiplo de 100."))
else:
    print(("El año"), a ,("no es un año bisiesto."))