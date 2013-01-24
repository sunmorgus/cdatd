var Buttons = Class.extend({
    init: function(){
    },
    GetButtons: function(gameObjManager, headerOnly){
        var group = gameObjManager.Group;
        var buttons = [];
        switch(group){
            case "index":
                buttons = [
                    // New Game Button
                    {
                        id: "newGame",
                        group: group,
                        width: 200,
                        height: 50,
                        x: 0, //x & y get set when the button is drawn
                        y: 0,
                        color: "rgba(255,0,0,.9)",
                        text: "New Game",
                        textColor: "rgb(255,255,255)",
                        font: gameObjManager.DefaultFont
                    }
                ]
                break;
            case "playerSelect":
                buttons = [{}];
                break;
            case "levelSelect":
                buttons = [{}];
                break;
        }
        
        if(headerOnly === true){
            return [
                    //music on/off button
                    {
                        id: "music",
                        group: group,
                        width: 25,
                        height: 25,
                        x: 0, //x & y get set when the button is drawn
                        y: 0,
                        imgSrcOn: "images/buttons/music_on.png",
                        imgSrcOff: "images/buttons/music_off.png",
                        state: gameObjManager.Music
                    },
                    //return home button
                    {
                        id: "home",
                        group: group,
                        width: 25,
                        height: 25,
                        x: 0,
                        y: 0,
                        imgSrc: "images/buttons/home.png",
                    }
            ]
        } else {
            return buttons;
        }
    },
    GetPlayerButtons: function(gameObjManager){
        var playerButtons = [];
        var submitButton = {
            id: "submitName",
            group: gameObjManager.Group,
            width: 200,
            height: 50,
            x: 0,
            y: 0,
            color: "rgba(255,0,0,.9)",
            text: "Submit",
            textColor: "rgb(255,255,255)",
            font: gameObjManager.DefaultFont
        }
        playerButtons.push(submitButton);
        
        var players = gameObjManager.Players;
        var len = players.length;
        var x = 100;
        var y = 135;
        if(len > 0){
            for (var i = 0; i < len; i++){
                var player = players[i];
                playerButton = {
                    id: "player",
                    group: gameObjManager.Group,
                    width: 200,
                    height: 50,
                    x: x,
                    y: y,
                    color: "rgba(255,0,0,.9)",
                    text: player.name,
                    textColor: "rgb(255,255,255)",
                    font: gameObjManager.DefaultFont
                }
                playerButtons.push(playerButton);
                
                y += 60;
            }
        }
        
        return playerButtons;
    },
    GetLevelButtons: function(count, level){
        var levelButtons = [];
        var buttonXPadding = 40;
        var buttonYPadding = 20;
        var buttonWidth = 70;
        var buttonHeight = 70;
        var x = 140;
        var y = 35;
        var row = 1;
        var column = 1;
        for(var i = 1; i <= count; i++){
            var locked = true;
            if(i <= level){
                locked = false;
            }
            var button = {
                id: "lvl" + i,
                group: "level",
                width: buttonWidth,
                height: buttonHeight,
                x: x,
                y: y,
                color: "rgba(255,0,0,.9)",
                text: i,
                textColor: "rgb(255,255,255)",
                font: "bold 1.5em monospace",
                imgSrc: "images/buttons/lock.png",
                locked: locked
            }
            levelButtons.push(button);
            
            if(column <= 4){
                x += buttonWidth + buttonXPadding;
                column++;
            } else {
                row++;
                y += buttonHeight + buttonYPadding;
                column = 1;
                x = 140;
            }
    }
        
        return levelButtons;
    }
});