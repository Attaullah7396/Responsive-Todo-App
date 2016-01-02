angular.module("todo",["ngMaterial","ngMdIcons"])

.controller("todoController",function(){
        var self = this;

        self.arr = [];
        self.remaining = 0;
        self.add = function(){
            if(self.newTodo) {
                self.arr.push({value : self.newTodo, done:false});
                self.remaining++;
                self.newTodo = "";
            }
        };

        self.delete = function(){
            for(var i=0; i<self.arr.length;i++){
                if(self.arr[i].done){
                    self.arr.splice(i,1);
                    self.delete();
                }
            }
        };

        self.check = function(index){
            if(!self.arr[index].done){
                self.remaining--;
            }
            else{
                self.remaining++;
            }
        }

    })

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');

    });