AIclasification.setvecsize(2)
AIclasification.addtodata([0, 1],"<")
AIclasification.addtodata([1, 0], ">")
basic.showString(AIclasification.clasify([5,2]))