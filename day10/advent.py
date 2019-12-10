import math

fileName = 'in.txt'
f = open(fileName, 'r')
colSize = len(open(fileName).readline()) - 1
lstOfChars = [char for lines in f for char in lines.strip("\n")]
lstOflstOfAng = []

def pos(ctr):
    return (ctr/colSize, ctr%colSize)

def calAngle(orPos, ocPos, irPos, icPos, lst):
    if orPos != irPos or ocPos != icPos:
        if (orPos-irPos) != 0 or (ocPos-icPos) != 0:
            rad = math.atan2(orPos-irPos, ocPos-icPos)
        else:
            rad = 0.0
        lst.add(rad)

for (oCtr, oChar) in enumerate(lstOfChars):
    orPos, ocPos = pos(oCtr)
    if oChar == '#':
        lstOfAng = set()
        for (iCtr, iChar) in enumerate(lstOfChars):
            irPos, icPos = pos(iCtr)
            if iChar == '#':
                calAngle(orPos, ocPos, irPos, icPos, lstOfAng)
        lstOflstOfAng.append(len(lstOfAng))

print (max(lstOflstOfAng))