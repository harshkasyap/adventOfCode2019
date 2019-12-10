import math

f = open('in.txt', 'r')
lstOflst = []
for lines in f:
    lst = [char for char in lines.strip("\n")]
    lstOflst.append(lst)
lstOflstOfAng = []

for (orPos, lst) in enumerate(lstOflst):
    for (ocPos, item) in enumerate(lst):
        lstOfAng = set()
        if item == '#':
            for (irPos, iLst) in enumerate(lstOflst):
                for (icPos, iItem) in enumerate(iLst):
                    if iItem == '#':
                        if orPos != irPos or ocPos != icPos:
                            if (orPos-irPos) != 0 or (ocPos-icPos) != 0:
                                rad = math.atan2(orPos-irPos, ocPos-icPos)
                            else:
                                rad = 0.0
                            lstOfAng.add(rad)
            lstOflstOfAng.append(len(lstOfAng))

print (max(lstOflstOfAng))