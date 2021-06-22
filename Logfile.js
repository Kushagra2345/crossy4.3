class Log{
    constructor(speed){
        this.x = random([100,300,500,700,900]);
        this.y = height-random([550,650,750,1350,1450,1550,2150]);
        this.width = 950;
        this.height = 680;
        this.spt = createSprite(this.x,this.y,this.width,this.height);
        this.spt.shapeColor = "brown";
        this.spt.scale=0.1;
        
        if (this.y==height-550 || this.y==height-650 || this.y==height-750){

            speed=-speed
            this.spt.addImage(log2Img)

        }else{
            this.spt.addImage(log1Img)


        }
        this.spt.velocityX=speed;
  
    

       
    }

   
   
}