
//Voronoi clasification
let trainingdataVec = [[0]]
let trainingdataClass = [""]
let startofTrainingData = true

//% color=340
//% color="#d79df5"
//% icon=""

namespace VORONOIclasification {
    function distance(vec1: number[], vec2: number[]) {
        let distsquared = 0
        for (let i = 0; i < vec1.length; i++) {
            distsquared += (vec1[i] - vec2[i]) * (vec1[i] - vec2[i])
        }
        return distsquared
    }
    //% block="add to training dataset vector $vector , with classification $classname"
    export function addtodata(vector: number[], classname: string) {
        if (startofTrainingData) {
            trainingdataVec = [vector]
            trainingdataClass = [classname]
            startofTrainingData = false
        } else {
            trainingdataVec.push(vector)
            trainingdataClass.push(classname)
        }
    }
    //% block="clasify vector $vector"
    export function clasify(vector: number[]) {
        let neardist = Infinity
        let nearclass = ""
        let temp = 0
        for (let i = 0; i < trainingdataClass.length; i++) {
            temp = distance(vector, trainingdataVec[i])
            if (temp == 0) {
                nearclass = trainingdataClass[i]
                break
            }
            if (neardist > temp) {
                neardist = temp
                nearclass = trainingdataClass[i]
            }
        }
        return nearclass
    }
    //% block="delete training dataset"
    export function deletetrainingdata() {
        trainingdataVec = [[0]]
        trainingdataClass = [""]
        startofTrainingData = true
    }
}
