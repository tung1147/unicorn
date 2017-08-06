/**
 * Created by Admin on 8/3/2017.
 */
(function () {

    var adapter = uc.Adapter = function (name, id) {
        this.name = name;
        this.controllerId = id;
        this.constructor();
    };

    var p = adapter.prototype = new EventEmitter();
    p.constructor = function () {
        this.on("_cmd",function (inPacket) {
            this.emit(inPacket._cmdId, inPacket);
        });
    }

    p.sendMessage = function (outPacket) {
        uc.adapterManager.emit("sendCmd", outPacket);
    };

    p.listenCmd = function (cmd,_self,callbackSuccess, callbackError) {
        this.on(cmd.cmdId,function (data) {
            var error = data.getError();
            if(!error){
              var data = data.readData(cmd.dataTypes);
              callbackSuccess && callbackSuccess.call(_self, data);
            }else{
              console.log("ws error with  cmd : ", error);
              callbackError && callbackError.call(_self, error);
            }
        });
    }



}.call(this));