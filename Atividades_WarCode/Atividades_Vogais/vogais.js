function getCount(str) {

        let vogal = 0
        for (let i = 0; i < str.length; i++)
                if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
                        vogal = vogal + 1
                }


        return vogal;
}
console.log(getCount("abracadabra"))