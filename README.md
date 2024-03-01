[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


## Answer

The algorithm starts by creating an adjacency matrix from the graph, which has a complexity of $|V|^2$. We then initialize the 'dist' and 'distances' arrays, both are operations of $|V|$ complexity. Our primary for loop iterates $|V|$ times. Within this for loop we iterate through the dist array to find the current smallest path that hasn't yet been marked, an operation of $|V|$ complexity. The second for loop iterates through the row of the adjacency matrix corresponding to the current node to find all the outgoing edges, another operation of $|V|$ complexity.

We have $|V|^2 + |V|+|V|+|V|*(|V|+|V|) = 3|V|^2+2|V|$.
Thus, the runtime complexity of this implimentation is $\Theta(|V|^2)$.
