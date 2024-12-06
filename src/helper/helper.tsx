class Helper{
    public StringAnimation(
        time: number,
        strings: string[],
        stringIndex: number,
        counter: number,
        setStringIndex: (value: number | ((prevValue: number) => number)) => void,
        setCounter: (value: number | ((prevValue: number) => number)) => void,
        setReturnStringList: (value: string[]) => void,
        fullWords?: boolean,
        startLoop?: boolean
    ): void;
    public StringAnimation(
        time: number,
        strings: string,
        stringIndex: number,
        counter: number,
        setStringIndex: (value: number | ((prevValue: number) => number)) => void,
        setCounter: (value: number | ((prevValue: number) => number)) => void,
        setReturnStringList: (value: string[]) => void,
        fullWords?: boolean,
        startLoop?: boolean
    ): void;
    public StringAnimation(
            time: number,
            strings: string[] | string,
            stringIndex: number,
            counter: number,
            setStringIndex: (value: number | ((prevValue: number) => number)) => void = () => {},
            setCounter: (value: number | ((prevValue: number) => number)) => void = () => {},
            setReturnStringList: (value: string[]) => void = () => {},
            fullWords: boolean = false,
            startLoop: boolean = true
        ){
        const isArrayString = Array.isArray(strings);
        
        const listOfCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
        
        const stringList = isArrayString? strings.map((topic) => topic.split(" ")) : [[strings]];

        if(stringIndex >= stringList.length){
            if(startLoop)setStringIndex(0);
            return;
        }

        const string = stringList[stringIndex];
        const counterLimit = string.reduce((max, word) => Math.max(max, word.length), 0);

        if(counter >= counterLimit){
            if(startLoop){
                setTimeout(() => {
                    setCounter(0);
                    setStringIndex((prevIndex) => prevIndex + 1);
                }, 1000 * 2 * time)
            } else {
                setCounter(0);
                setStringIndex((prevIndex) => prevIndex + 1);
            }
            return;
        }

        const charAnimate = setInterval(() => {
            const updatedList = string.map((word)=> {
                const targetWord = word.padEnd(counterLimit, " ");
                if(fullWords){
                    const randomChars = [...Array(counterLimit)].map(() => listOfCharacters[Math.floor(Math.random() * listOfCharacters.length)]).join("");
                    return counter < word.length? targetWord.slice(0, counter) + randomChars.slice(counter, word.length): targetWord;
                } else {
                    const randomChar = listOfCharacters[Math.floor(Math.random() * listOfCharacters.length)];
                    return counter < word.length ? targetWord.slice(0, counter) + randomChar + " ".repeat(targetWord.length - counter - 1): targetWord;
                }
            });
            setReturnStringList(updatedList);
        }, (time * 1000)/20);

        const stringAnimation = setTimeout(() => {
            const updatedStrings = string.map((word) => {
                const targetWord = word.padEnd(counterLimit, " ");
                return targetWord.slice(0, counter + 1) + " ".repeat(counterLimit - counter - 1)
            });
            setReturnStringList(updatedStrings);
            setCounter((prevCounter) => prevCounter + 1);
            clearInterval(charAnimate);
        }, time * 1000);

        return () => {
            clearInterval(charAnimate);
            clearTimeout(stringAnimation);
        };
    }
}

export default Helper;