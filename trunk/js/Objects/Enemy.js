var Enemy = GameObj.extend({
    init: function(type){
        this.ObjType = "enemy";
        switch(type){
            case "gold":
                this.health = 50;
                this.damage = 10;
                this.frequency = 1;
                this.shotspeed = 25;
                this.imgSrc = "images/sprites/enemies/gold.png";
                this.imgSrcInvert = "images/sprites/enemies/gold_invert.png";
                break;
            case "army":
                break;
            case "white":
                break;
            case "orange":
                break;
            case "blue":
                break;
            case "yellow":
                break;
        }
        this.width = 125;
        this.height = 150;
        this.hit = false;
        this.hitCount = 0;
        this.fighting = false;
    }
});