let Player = Backbone.Model.extend({
    initialize:function(){
        //console.log("Player Initialized");
    },
    defaults:{
        Name:"Bhaskar Kotha",
        team:"India",
        Age:39
    }
});

let p1 = new Player({
    Name:"Madhuri Kotha",
    Age:37
});
let p2 = new Player({
    Name:"Bhaskar Kotha",
    Age:39
});
let p3 = new Player({
    Name:"Anvike Kotha",
    Age:7
});
let p4 = new Player({
    Name:"Joshnika Kotha",
    Age:5
});
let p5 = new Player({
    Name:"Santhosh Kotha",
    Age:13
});
let Players = Backbone.Collection.extend({
    model:Player
});

let collPlayers = new Players();
collPlayers.add(p1);//can add list of elements using [] notion
collPlayers.add(p2,{at:0});//with out {at:1} parameter element would have been added at the end
collPlayers.unshift([p3,p4],{at:0});//without the parameter, the element would have been added at the start
collPlayers.push(p5,{at:1});//with out {at:1} parameter element would have been added at the end
console.log(collPlayers.toJSON());

collPlayers.remove(p1);//removes the element specified as parameter. doesn't work with index number
console.log(collPlayers.toJSON());
collPlayers.pop();//removes the last element from the collection
console.log(collPlayers.toJSON());
collPlayers.shift();//removes the first element from the collection
console.log(collPlayers.toJSON());
collPlayers.remove();//won't work as the element is not specified
console.log(collPlayers.toJSON());

let PlayerView = Backbone.View.extend({
    coll:collPlayers,
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log("View rendered");
    }
});