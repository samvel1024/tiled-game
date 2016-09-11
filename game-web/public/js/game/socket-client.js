/**
 * Created by sam on 9/7/16.
 */

"use strict";

define(['io', 'event-emitter'], function(io, eventEmitter){

    return {
        connect: function(){

            var socket = io();

            socket.on("added", function (data) {
                eventEmitter.emit("added", data, true);
            });

            socket.on("turned", function (data) {
                eventEmitter.emit("turned", data, true);
            });

            socket.on('err', function (data) {
                eventEmitter.emit("err", data);
            });


            eventEmitter.subscribe("add", function(data){
                socket.emit('add', data);
            });


            eventEmitter.subscribe("turn", function(data){
                socket.emit('turn', data);
            })

        }
    }

});