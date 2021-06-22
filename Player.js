class Player{
  constructor(posX,posY){
  
  this.x=posX
  this.y=posY
  this.spt=createSprite(this.x,this.y)
  imageMode(BOTTOM)
  this.spt.addImage(Player1Img)
  this.spt.scale=0.08

  
  

  }


 move(Xdir,yDir){
   this.spt.x+=Xdir*grid
   this.spt.y+=yDir*grid
 }

}