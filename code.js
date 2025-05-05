function tsp_ls(distance_matrix) {

    // There are N! Different ways for a list to be sorted so if I want to go through all the different 
    // possibilities I would need to run through all n! Of them, however for larger numbers that will 
    // take a lot of time so I will divide N! In half this still will take a lot of time but less time. And
    //  this will at the very least give me a 50% chance of finding the smallest path if there is only one smallest path.

    Search = factorial(distance_matrix.length)/2
    cities = []
    for (var i = 0; i < distance_matrix.length; i++) {cities.push(i)}
    cities = RandomizedList(cities)
    distance = Infinity

    for (var i = 0; i < Search; i++){
        distance = Math.min(distance, distanceTour(cities,distance_matrix))

        cities = optSwap(cities, cities.length)
    }
        distance = Math.min(distance, distanceTour(cities,distance_matrix))
    return distance;

}
function factorial(n){
    num = 1
    for( x=0; x < n ; n--){
        num = n*num
    }
    return num
}

//Got this function from https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/ 
function RandomizedList(array){
    for (let i = array.length - 1; i > 0; i--) { 
        

        const j = Math.floor(Math.random() * (i + 1));
                    

        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
function distanceTour(cities,distance_matrix){
    distance = 0
    for (let i = 0; i < cities.length - 1; i++) {
        distance = distance_matrix[cities[i]][cities[i+1]] + distance
    }
    return distance
}
function optSwap(route, size){
    // This is a randomized local search algorithm so I thought I should incorporate randomness
    // into choosing I and K. But controlled randomness to make sure that they actually do
    // something. My control parameter is 1 <= i < k < sum – 1 ; this make sure that I and K on
    // never the same thing and each swap does something
    i = Math.floor(Math.random() * (size - 1));
    k = Math.floor(Math.random() * (size - i)) + i;

    while(i < k){
        swap(route, i, k )
        i++
        k--
    }
    return route

}
function swap(x, a ,b )
{
    let temp = x[a];
    x[a] = x[b];
    x[b] = temp;
}
