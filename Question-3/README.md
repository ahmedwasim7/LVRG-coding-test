## Approach:
- I passed the number array to longestConsecutive function.
- It returns the longest consecution numbers in an unsorted array.

### Test Case # 1
```
let data = [100, 4, 200, 1, 3, 2]
console.log('Before Function Call')
console.log(data)
console.log(longestConsecutive(data))
```

#### Result Printed:
```
Before Function Call
[100, 4, 200, 1, 3, 2]
4
```

### Test Case # 2
```
let data = [100, 5, 6, 9, 4, 200, 1, 2, 101, 1005, 3, 7]
console.log('Before Function Call')
console.log(data)
console.log(longestConsecutive(data))
```

#### Result Printed:
```
Before Function Call
[100, 5, 6, 9, 4, 200, 1, 2, 101, 1005, 3, 7]
7
```
