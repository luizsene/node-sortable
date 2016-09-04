## node-sort

### :pushpin:  What is that ?


__node-sort__ is a library that implements various sorting algorithms and displays its performance according to BIG -O notation.


### :pushpin:  Big-O Complexity Chart

<img src="https://cdn.rawgit.com/1fabiopereira/node-sort-library/master/img/chart.svg">

In computer science, big O notation is used to classify algorithms by how they respond to changes in input size, such as how the processing time of an algorithm changes as the problem size becomes extremely large.

[See more](https://en.wikipedia.org/wiki/Big_O_notation)

### :pushpin: Big-O notation
---

<table id="legend" class="table">
  <tbody>
    <tr>
      <td> :red_circle: <code class="red">Horrible</code></td>
      <td>  :o: <code class="orange">Bad</code></td>
      <td> :large_orange_diamond: <code class="yellow">Fair</code></td>
      <td> :black_circle: <code class="yellow-green">Good</code></td>
      <td> :eight_spoked_asterisk: <code class="green">Excellent</code></td>
    </tr>
  </tbody>
</table>

<table class="table table-bordered table-striped">
    <tbody><tr>
      <th>Algorithm</th>
      <th colspan="3">Time Complexity</th>
      <th>Space Complexity</th>
    </tr>
    <tr>
      <th></th>
      <th>Best</th>
      <th>Average</th>
      <th>Worst</th>
      <th>Worst</th>
    </tr>

    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Comb_sort">Combsort</a></td>
      <td>:o:<code class="yellow">Θ(n log(n))</code></td>
      <td>:o: <code class="orange"> Ω(n^2/2^p)</code></td>
      <td>:o: <code class="orange">O(n^2)</code></td>
      <td>:large_orange_diamond:<code class="yellow">O(1)</code></td>
   </tr>

    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Quicksort">Quicksort</a></td>
      <td> :o: <code class="orange"> Ω(n log(n))</code></td>
      <td>:o:<code class="orange">Θ(n log(n))</code></td>
      <td>:red_circle:<code class="red">O(n^2)</code></td>
      <td>:black_circle:<code class="yellow-green">O(log(n))</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Merge_sort">Mergesort</a></td>
      <td> :o: <code class="orange">Ω(n log(n))</code></td>
      <td>:o:<code class="orange">Θ(n log(n))</code></td>
      <td>:o:<code class="orange">O(n log(n))</code></td>
      <td>:large_orange_diamond:<code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Timsort">Timsort</a></td>
      <td>:large_orange_diamond:<code class="yellow">Ω(n)</code></td>
      <td>:o:<code class="orange">Θ(n log(n))</code></td>
      <td>:o:<code class="orange">O(n log(n))</code></td>
      <td>:large_orange_diamond:<code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Heapsort">Heapsort</a></td>
      <td> :o: <code class="orange">Ω(n log(n))</code></td>
      <td>:o:<code class="orange">Θ(n log(n))</code></td>
      <td>:o:<code class="orange">O(n log(n))</code></td>
      <td>:eight_spoked_asterisk:<code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Bubble_sort">Bubble Sort</a></td>
      <td>:large_orange_diamond:<code class="yellow">Ω(n)</code></td>
      <td>:red_circle:<code class="red">Θ(n^2)</code></td>
      <td>:red_circle:<code class="red">O(n^2)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Insertion_sort">Insertion Sort</a></td>
      <td>:large_orange_diamond:<code class="yellow">Ω(n)</code></td>
      <td>:red_circle:<code class="red">Θ(n^2)</code></td>
      <td>:red_circle:<code class="red">O(n^2)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Selection_sort">Selection Sort</a></td>
      <td>:red_circle:<code class="red">Ω(n^2)</code></td>
      <td>:red_circle:<code class="red">Θ(n^2)</code></td>
      <td>:red_circle:<code class="red">O(n^2)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Tree_sort">Tree Sort</a></td>
      <td> :o: <code class="orange">Ω(n log(n))</code></td>
      <td>:o:<code class="orange">Θ(n log(n))</code></td>
      <td>:red_circle:<code class="red">O(n^2)</code></td>
      <td>:large_orange_diamond:<code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a href="http://en.wikipedia.org/wiki/Shellsort">Shell Sort</a></td>
      <td> :o: <code class="orange">Ω(n log(n))</code></td>
      <td>:red_circle:<code class="red">Θ(n(log(n))^2)</code></td>
      <td>:red_circle:<code class="red">O(n(log(n))^2)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">O(1)</code></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Only for integers. k is a number of buckets" href="http://en.wikipedia.org/wiki/Bucket_sort">Bucket Sort</a></td>
      <td> :eight_spoked_asterisk: <code class="green">Ω(n+k)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">Θ(n+k)</code></td>
      <td>:red_circle:<code class="red">O(n^2)</code></td>
      <td>:large_orange_diamond:<code class="yellow">O(n)</code></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Constant number of digits 'k'" href="http://en.wikipedia.org/wiki/Radix_sort">Radix Sort</a></td>
      <td> :eight_spoked_asterisk: <code class="green">Ω(nk)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">Θ(nk)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">O(nk)</code></td>
      <td>:large_orange_diamond:<code class="yellow">O(n+k)</code></td>
    </tr>
    <tr>
      <td><a rel="tooltip" title="Difference between maximum and minimum number 'k'" href="https://en.wikipedia.org/wiki/Counting_sort">Counting Sort</a></td>
      <td> :eight_spoked_asterisk: <code class="green">Ω(n+k)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">Θ(n+k)</code></td>
      <td>:eight_spoked_asterisk:<code class="green">O(n+k)</code></td>
      <td>:large_orange_diamond:<code class="yellow">O(k)</code></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Cubesort">Cubesort</a></td>
      <td>:large_orange_diamond:<code class="yellow">Ω(n)</code></td>
      <td>:o: <code class="orange">Θ(n log(n))</code></td>
      <td>:o: <code class="orange">O(n log(n))</code></td>
      <td>:large_orange_diamond:<code class="yellow">O(n)</code></td>
   </tr>

</tbody></table>




### :pushpin:  Methods
---


##### :white_check_mark: Comb Sort
```
sort.comb(array, sort.DESC)
```
```
sort.comb(array, sort.ASC)
```
```
sort.comb(array, comparisonFunction)
```

##### :white_check_mark: Bubble Sort
```
sort.bubble(array, sort.DESC)
```
```
sort.bubble(array, sort.ASC)
```
```
sort.bubble(array, comparisonFunction)
```

##### :white_check_mark: Quick Sort
```
sort.bubble(array, sort.DESC)
```
```
sort.bubble(array, sort.ASC)
```
```
sort.bubble(array, comparisonFunction)
```


 :pencil2: Example how to use:

```javascript   
let numbers = [10, 1, 2, 13];

sort.bubble(numbers, sort.ASC); //[1,2,10,13]
sort.bubble(numbers, sort.DESC); //[13,10,2,1]

let letters = ["A","Z","W","M"];
sort.bubble(letters, sort.ASC); //["A","M","W","Z"]
sort.bubble(letters, sort.DESC); //["Z","W","M","A"]
```

:warning: __Important Note:__ Some comparison conditions are the reverse of the natural because this way the algorithm takes best advantage. Before implementing a custom comparison function check the operation of the algorithm. It is very suitable to use drive tests.

:pencil2: Example customized comparison function:

```javascript   
let peoples = [
  {name: "Alex", age: 12},
  {name: "Max", age: 34},
  {name: "Mary", age: 9},
  {name: "Justin", age: 53}
];

const fnASC = (a, b) =>{
  return a.age > b.age; //inverse of the natural condition
}

const fnDESC = (a, b) =>{
  return a.age < b.age; //inverse of the natural condition
}

sort.bubble(peoples, fnASC); //[{name: "Mary", age: 9}, {name: "Alex", age: 12},{name: "Max", age: 34},{name: "Justin", age: 53}];
sort.bubble(peoples, fnDESC); //[{name: "Justin", age: 53},{name: "Max", age: 34},{name: "Alex", age: 12},{name: "Mary", age: 9}];
```

### :pushpin:  License
---

The MIT License (MIT)

Copyright (c) 2016 Fábio Pereira

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
