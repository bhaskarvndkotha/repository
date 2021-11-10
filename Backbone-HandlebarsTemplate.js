let Player = Backbone.Model.extend({
    initialize:function(){
    }
});

let p1 = new Player();
p1.set({
    Name:"Sachin Tendulkar",
    Team:"India",
    No:33
});

let p2 = new Player();
p2.set({
    Name:"Ricky Ponting",
    Team:"Australia",
    No:3
});

let Players = Backbone.Collection.extend({
    model:Player
});

let players = new Players([p1,p2]);

let MyView = Backbone.View.extend({
    el:"#content",
    coll:players,
    template:Handlebars.compile($("#tmpl-hbtmpl").html()),
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log("View Rendered");
        this.$el.html(this.template({
            coll:this.coll.toJSON()
        }));
    }
});

let myView = new MyView();