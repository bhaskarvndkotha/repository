let Player = Backbone.Model.extend({
    initialize:function(){
        //console.log("Player Initialized");
    },
    defaults:{
        Name:"Bhaskar Kotha",
        Team:"India",
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
collPlayers.add([p1,p2,p3,p4,p5]);

let PView = Backbone.View.extend({
    coll:collPlayers,
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log("In Render Method");
        //_.each(collectionObject, function(iterator){...});
        _.each(this.coll.toJSON(),function(each){
            console.log(each.Name+", "+each.Team);
        });
        let whereColl = _.where(this.coll.toJSON(),{Team:"India"});
        console.log(whereColl);

        let findWhereColl = _.findWhere(this.coll.toJSON(),{Team:"India"});
        console.log(findWhereColl);

        let findResult = _.find(this.coll.toJSON(),function(model){
            if(model.Age>7){
                return model;
            }
        });
        console.log(findResult);
        let filterResult = _.filter(this.coll.toJSON(),function(model){
            if(model.Age>7){
                return model;
            }
        });
        console.log(filterResult);
        let filterResult1 = _.filter(this.coll.toJSON(),(model)=>{return (model.Age>7 ? model : null); });
        console.log(filterResult1);

        let pluckResult = _.pluck(this.coll.toJSON(),"Name");
        console.log(pluckResult);
    }
});

let pView = new PView();