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
