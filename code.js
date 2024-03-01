function dijkstra(graph, sourceNode) {
    let dist = [];
    let adjMatrix = graphToAdjMatrix(graph);
    if (adjMatrix.length == 0) return [];
    //for (let i = 0; i < adjMatrix.length; i++) console.log(adjMatrix[i]);
    for (let i = 0; i < adjMatrix.length; i++) {
        dist[i] = Infinity;
    }
    dist[sourceNode] = 0;
    let distances = Array.apply(null, {length: dist.length});
    let v;
    for (let counter = 0; counter < dist.length; counter++) {
        let currentNode = sourceNode; 
        let minDist = Infinity;
        for (let i = 0; i < dist.length; i++) {
            if (dist[i] < minDist && distances[i] == undefined) {
                minDist = dist[i];
                currentNode = i;
            }
        }
        distances[currentNode] = dist[currentNode];
        for (let i = 0; i < adjMatrix[currentNode].length; i++) {
            if (adjMatrix[currentNode][i] != Infinity) {
                dist[i] = Math.min(dist[i], dist[currentNode]+adjMatrix[currentNode][i]);
            }
        }
    }
    return distances;
}

function graphToAdjMatrix(graph) { // |V|^2
    let V = graph[0];
    let E = graph[1];
    let adjMatrix = [];
    if (V.length == 0) return adjMatrix;
    let max = 0;
    for (let i = 0; i < E.length; i++) {
        max = Math.max(max, E[i][0], E[i][1]);
    }
    for (let i = 0; i <= max; i++) {
        adjMatrix[i] = [];
        for (let j = 0; j <= max; j++) {
            adjMatrix[i][j] = Infinity;
        }
    }
    for (let edge = 0; edge < E.length; edge++) {
        adjMatrix[E[edge][0]][E[edge][1]] = E[edge][2] //adjMatrix[u][v] contains the weight of the edge (u,v);
    }
    return adjMatrix;
}

//console.log(dijkstra([[0,1],[[0,0,4],[0,1,3]]],0))
//dijkstra([[0,1,2,3,4],[[0,1,5],[0,2,3],[2,4,6],[1,3,11],[3,4,2]]], 0);
//console.log(dijkstra([[0,1,2,3,4,5],[[0,1,5],[2,3,7],[4,2,3],[5,0,9],[3,1,6],[5,3,7],[1,3,7]]],0));