# coding=utf-8
import json

# import urllib3 será necesario para abrir el archivo que recibiremos de la API que provendrá de una llamada a una url

def parseEdades(nombreDeFichero):
    edades = ["18-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80", "80-90", "90+"]
    array_recuento = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    data = json.load(open(nombreDeFichero))

    def acumulador(recuento):

        if (edad_objeto >= 18 and edad_objeto <= 20):
            recuento[0] = recuento[0] + 1
        elif (edad_objeto >= 21 and edad_objeto <= 30):
            recuento[1] = recuento[1] + 1
        elif (edad_objeto >= 31 and edad_objeto <= 40):
            recuento[2] = recuento[2] + 1
        elif (edad_objeto >= 41 and edad_objeto <= 50):
            recuento[3] = recuento[3] + 1
        elif (edad_objeto >= 51 and edad_objeto <= 60):
            recuento[4] = recuento[4] + 1
        elif (edad_objeto >= 61 and edad_objeto <= 70):
            recuento[5] = recuento[5] + 1
        elif (edad_objeto >= 71 and edad_objeto <= 80):
            recuento[6] = recuento[6] + 1
        elif (edad_objeto >= 81 and edad_objeto <= 90):
            recuento[7] = recuento[7] + 1
        else:
            recuento[8] = recuento[8] + 1

        return recuento

    for i in data['data']:
        edad_objeto = i['edad']
        acumulador(array_recuento)


    return edades,array_recuento;


def parseCiudades(nombreDeFichero):
    ciudades = []
    array_recuento = []

    data = json.load(open(nombreDeFichero))

    for i in data['data']:
        for key in i.keys():
            ciudades.append(key)
            array_recuento.append(i[key])

    return ciudades,array_recuento



edades = parseEdades('./ficheros/generated2.json')
print edades
print "------------------------------------------------------------------------------------------------------------------------"
ciudades = parseCiudades('./ficheros/generated3.json')
print ciudades



