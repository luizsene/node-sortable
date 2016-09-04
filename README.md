## node-sort-library

### Big-O Complexity Chart

<img src="./img/chart.svg">

In computer science, big O notation is used to classify algorithms by how they respond to changes in input size, such as how the processing time of an algorithm changes as the problem size becomes extremely large.

[See more](https://en.wikipedia.org/wiki/Big_O_notation)

### Methods
---

##### Bubble Sort:
   * How to use:

       ```javascript   
    let numbers = [10, 1, 2, 13];
    sort.bubble(numbers, sort.ASC); //[1,2,10,13]
    sort.bubble(numbers, sort.DESC); //[13,10,2,1]

    let letters = ["A","Z","W","M"];
    sort.bubble(letters, sort.ASC); //["A","M","W","Z"]
    sort.bubble(letters, sort.DESC); //["Z","W","M","A"]
       ```

    It can be passed a custom comparison function:

    ```javascript   
 let peoples = [
   {name: "Alex", age: 12},
   {name: "Max", age: 34},
   {name: "Mary", age: 9},
   {name: "Justin", age: 53}
 ];

 const fnASC = (a, b) =>{
   return a.age < b.age;
 }

 const fnDESC = (a, b) =>{
   return a.age > b.age;
 }

 sort.bubble(peoples, fnASC); //[{name: "Mary", age: 9}, {name: "Alex", age: 12},{name: "Max", age: 34},{name: "Justin", age: 53}];
 sort.bubble(peoples, fnDESC); //[{name: "Justin", age: 53},,{name: "Max", age: 34},{name: "Alex", age: 12},{name: "Mary", age: 9}];
    ```
