#Cristian Carrasco Jimenez
#02/10/24
#Este programa es capaz de convertir pedir una cantidad de segundos y 
#que escriba cuántos minutos y segundos son.

print ("CONVERTIDOR DE SEGUNDOS A HORAS Y MINUTOS")
Seg = eval(input ("Escriba una cantidad de segundos:"))
Hora = Seg//3600
Rest1 = Seg % 3600
Min = Rest1//60
Rest2 = Rest1 % 60

print (Seg, " segundos son ",Hora, " horas,", Min ,"minutos y ", Rest2, "segundos")