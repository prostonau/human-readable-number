module.exports = function toReadable (number) {
    
    const b ={
    "0" :"zero", 
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "21": "twenty one",
    "22": "twenty two",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "100": "one hundred"
    }

    const c = {
        "2": "twenty",        
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety",  
    }

    for (let key in b) {
        if (key == number.toString()) return b[key]
    }

    let output = ''

    let a = String(number).split("")

    

    let flag = false


    if (a.length == 2) 
    {            
            for (let key in c) {
                if (key == a[0]) {
                    output += c[key]
                    }
                }

            for (let key in b) {
                if (key == a[1]) {
                    output += ' '+b[key]
                    }
            }
        
    }


    if (a.length == 3) 
    {
       
        output = b[a[0]] + ' hundred'

        if (a[1] == '0' && a[2] == '0')
        {

            return output
        }

        for (let key in b) {
            if (key == (a[1] + a[2])) {
                output += ' '+b[key]
                flag = true}
            }
        

        if (!flag) {
            for (let key in c) {
                if (key == a[1]) {
                    output += ' '+c[key]
                    }
                }

            for (let key in b) {
                if (key == a[2]) {
                    output += ' '+b[key]
                    }
            }
        } 
        
    }



    return output
}
