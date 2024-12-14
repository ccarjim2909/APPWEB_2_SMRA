#Cristian Carrasco Jimenez
#02/10/24
#Este programa te pide dos numero uno par y otro impar,  te dice si son correctos o te has equivocado.

print ("PAR E IMPAR (1)")
Par = eval( input("Escriba un numero par: " ))
Impar = eval( input("Escriba un numero impar: " ))

if Par%2 == 0:
    if Impar%2 == 1:
        print ("Gracias por su colaboracion")
else:
    print ("Uno o mas de los valores que ha escrito no son correctos")
    print ("Ejecute de nuevo el programa para volver a intentarlo")

