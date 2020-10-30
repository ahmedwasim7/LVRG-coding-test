## Approach:
- I passed the data by reference to removeDuplicates function.
- It returns the new length.
- It also updates the array data along with returning the data the new length.


### Test Case # 1
```
let data = { nums: [1, 1, 2] }
console.log('Before Function Call')
console.log(data.nums)
let result = removeDuplicates(data)
console.lot(result)
console.log('After Function Call')
console.log(data.nums)
```

#### Result Printed:
```
Before Function Call
[1, 1, 2]
2
After Function Call
[1, 2]
```

### Test Case # 2
```
let data = { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] }
console.log('Before Function Call')
console.log(data.nums)
let result = removeDuplicates(data)
console.lot(result)
console.log('After Function Call')
console.log(data.nums)
```

#### Result Printed:
```
Before Function Call
[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
5
After Function Call
[0, 1, 2, 3, 4]
```
