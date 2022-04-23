const str = window. prompt("Enter your string: ");

const countOccurence = (str) => {
    //removing all whutespaces
    const newstr = str.replaceAll(" ", "").toUpperCase()
    //creating an array
    let arr = newstr.split('')
    //object to keep track of the counts
    const obj = {}

        for(let i = 0; i < arr.length; i++){
            obj[arr[i]] ? obj[arr[i]]+=1 : obj[arr[i]] = 1
    }
    return obj

}

console.log(countOccurence(str))
