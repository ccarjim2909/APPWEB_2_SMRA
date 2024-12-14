#Cristian Carrasco Jimenez
#04/10/24
#Este programa te pide dos numero uno par y otro impar,  te dice si son correctos o te has equivocado.

print ("PAR E IMPAR (2)")
Par = eval( input("Escriba un numero par: " ))


if Par%2 == 0:
    Impar = eval( input("Escriba un numero impar: " ))
    if Impar%2 == 1:
        print ("Gracias por su colaboracion")
    else:
        print ("No ha escrito un numero impar")
        print ("Ejecute de nuevo el programa para volver a intentarlo")
       
else:
    print ("No ha escrito un numero par")
    print ("Ejecute de nuevo el programa para volver a intentarlo")
