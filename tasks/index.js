
// arrayin icerisinden tek ve cut ededleri cixarmaq ve yenin arrayin icerisine atmaq
let numbers=[1,7,6,45,32,77,14,54,27]
odd=[]
even=[]
function groupedOddOrEven(arr){
    arr.forEach(element=>{
        (element%2==0)?even.push(element):odd.push(element)
    })
    console.log(`tek: ${odd} ve cut: ${even}`)

}
groupedOddOrEven(numbers)

// arrayin icersinde adlar var, bu arrayin icerisindeki saitleri tapib arraya atmaq
let names = ['Feride', 'Ulviyye', 'Fatime', 'Sebine', 'Zeyneb', 'Aytac', 'Aynur']
let vowelsList = []
let vowels = 'aioue'

function findVovels(arr) {
    arr.forEach(name => {
        for (let i = 0; i < name.length; i++) {
            if (vowels.includes(name[i])) {
                vowelsList.push(name[i])
            }
        }
    });
    return vowelsList
}
console.log(findVovels(names))


// Muellim, hem string hem de number tipli elemenetleri olan array uchun sort yaza bilmedim
// let myArr = [-5, -2, 14, '12', '2', 8, 10, '99']
// output: [-2, -5, 10, '12', 14, '2', 8, '99']
// console.log(myArr.sort())



// tek reqemler olan array uchun sort:
console.log("********************")
let myArr=[3,-2,2,-6,14,7,5,29]
let newArr = []
let min = Infinity

function sortedFun(myArr) {
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] < min) {
            min = myArr[i]
        }
    }
    newArr.push(min)
    myArr.splice(myArr.indexOf(min), 1)
    if(myArr.length>0){
        min = Infinity
        sortedFun(myArr)
    }
    return newArr
}
console.log(sortedFun(myArr))
