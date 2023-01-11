const {shuffleArray} = require('./utils')

const test1=[1,2,3,4,5,6]
const test2=[]
const test3=['ahmadi','sajedeh','writing']
const test4=[{'name':'ahmad'},{'name':'bob'},{'name':'jack'},{'name':'max'}]

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array',()=>{
        expect(Array.isArray(shuffleArray(test1))).toBe(true)
        expect(Array.isArray(shuffleArray(test2))).toBe(true)
        expect(Array.isArray(shuffleArray(test3))).toBe(true)
        expect(Array.isArray(shuffleArray(test4))).toBe(true)

    })
    test('return an array to same lengtb',()=>{
        expect(shuffleArray(test1)).toHaveLength(test1.length)
        expect(shuffleArray(test2)).toHaveLength(test2.length)
        expect(shuffleArray(test3)).toHaveLength(test3.length)
        expect(shuffleArray(test4)).toHaveLength(test4.length)
    })
    test('same items in the array',()=>{
        expect(shuffleArray(test1)).toBeTruthy()
        expect(shuffleArray(test2)).toBeTruthy()
        expect(shuffleArray(test3)).toBeTruthy()
        expect(shuffleArray(test4)).toBeTruthy()

    })
    
})
