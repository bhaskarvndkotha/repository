let MyModel = Backbone.Model.extend({
    initialize:function(){

    }
});
let myModel = new MyModel({
    Name:"Bhaskar Kotha",
    Company:"CloudTaru",
    Age:39
});
let myModel2 = myModel.clone();
let MyView = Backbone.View.extend({
    el:"#content",
    model:myModel2,
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log(this.model.toJSON());
        this.model.set({"Age":5,"Name":"Anvika"});
        this.listenTo(this.model,"change",this.modelChanged(this.model));
    },
    modelChanged:function(model){
            console.log(model.hasChanged());
            console.log("values changed");
            console.log(model.changedAttributes());
            console.log(model.previous("Name"));
            console.log(model.previous("Age"));
            console.log(model.previous("Company"));
            console.log(model.previousAttributes());
    }
    
});
let myView = new MyView();