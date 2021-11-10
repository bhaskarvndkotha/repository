let FirstView = Backbone.View.extend({
    el:"#content",
    initialize:function(){
        this.render();
    },
    render:function(){
        this.$el.html("First View is running");
    }
});

let SecondView = Backbone.View.extend({
    el:"#content",
    initialize:function(){
        this.render();
    },
    render:function(){
        this.$el.html("Second View is running");
    }
});

let ThirdView = Backbone.View.extend({
    el:"#content",
    initialize:function(){
        this.render();
    },
    render:function(){
        this.$el.html("Third View is running");
    }
});

let MyRouter = Backbone.Router.extend({
    routes:{
        "":"showFirstView",
        "First":"showFirstView",
        "Second":"showSecondView",
        "Third":"showThirdView"
    },
    showFirstView:function(){
        console.log("First View");
        let fView = new FirstView();
    },
    showSecondView:function(){
        console.log("Second View");
        let sView = new SecondView();
    },
    showThirdView:function(){
        console.log("Third View");
        let tView = new ThirdView();
    }

});

let myRouter = new MyRouter();
Backbone.history.start();