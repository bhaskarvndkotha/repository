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
    el:"#content",
    tmpl:_.template($("#tmpl-collection").html()),
    coll:collPlayers,
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log("In Render Method");
        /*console.log(this.coll);
        _.each(this.coll.toJSON(),function(each){
            console.log(each);
        });
        this.coll.forEach((each)=>{
            console.log(each.toJSON().Name);
        });*/
        this.$el.html(this.tmpl({
            collection:this.coll
        }));
    }
});

let pView = new PView();