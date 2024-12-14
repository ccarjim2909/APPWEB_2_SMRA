#Cristian Carrasco Jimenez
#04/10/24
#Este programa te pide tres numeros, y que te devuelva si son los tres igual,
#si hay dos iguales o ninguno.

print ("COMPARADOR DE TRES NUMEROS")

a = eval( input("Escriba un numero: " ))
b = eval( input("Escriba otro numero: " ))
c = eval( input("Escriba otro numero mas: " ))

if a == b:
    if b == c:
        print ("Ha escrito tres veces el mismo numero.")
    else:
        print ("Ha escrito uno de los numeros dos veces.")

elif b == c:
    print ("Ha escrito uno de los numeros dos veces.")

elif a == c:
    print ("Ha escrito uno de los numeros dos veces.")
    
else:
    print ("Los tres numeros que ha escrito son distintos.")