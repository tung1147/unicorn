/**
 * Created by Admin on 8/3/2017.
 */
(function () {
    var dataTypes = uc.Network.dataTypes;

    var cmds = uc.Lobby.receivedCmds = {
        login : {
            cmdId : 1,
            dataTypes : [{
                name : "userId",
                type : dataTypes.LONG
            },{
              name : "username",
              type : dataTypes.STRING
            },{
              name : "gold",
              type : dataTypes.DOUBLE
            },{
              name : "silver",
              type : dataTypes.DOUBLE
            }]
        },
    };


}.call(this));