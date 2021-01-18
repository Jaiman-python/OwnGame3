class Lesiure{

    constructor(){
        this.lesiureImg = loadImage("images/Lesiure card.png");
        this.Sprite = createSprite(1000,300);
        this.iceCreamImg = loadImage("images/IceCream.png")
        this.iceCreamSprite = createSprite(width/2,height/2);
        this.iceCreamSprite.visible = false;
    }
    
    
    display(){
        this.Sprite.addImage(this.lesiureImg);
        this.iceCreamSprite.addImage(this.iceCreamImg);
        if(mousePressedOver(this.Sprite)){
            familyCard.visible = false;
            workCard.visible = false;
            this.Sprite.visible = false;
            eat = true;
            
        }
        
        
    
        if(eat == true){
            this.iceCreamSprite.visible = true;
            text("Click on the icecream to eat it")
            if(mousePressedOver(this.iceCreamSprite)){
                text("You ate an ice cream costing $10");
                task1_count -=10;        
            }
                
        }
        
    }
    }