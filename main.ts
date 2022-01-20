let mySprite = sprites.create(img`
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c 1 1 1 1 1 c c 1 1 1 1 1 c c 
    c c 1 1 1 1 1 c c 1 1 1 1 1 c c 
    c c f f f 1 1 c c f f f 1 1 c c 
    c c f f f 1 1 c c f f f 1 1 c c 
    c c f f f 1 1 c c f f f 1 1 c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c b b b c c c c c c c c c 
    c c c c b b b c c c c c c c c c 
    c c c c b b b c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Player)
mySprite.setPosition(80, 60)
let Sprite2 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 1 1 1 1 1 6 6 1 1 1 1 1 6 6 
    6 6 1 1 1 1 1 6 6 1 1 1 1 1 6 6 
    6 6 f f f 1 1 6 6 f f f 1 1 6 6 
    6 6 f f f 1 1 6 6 f f f 1 1 6 6 
    6 6 f f f 1 1 6 6 f f f 1 1 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 9 9 9 6 6 6 6 6 6 6 6 6 
    6 6 6 6 9 9 9 6 6 6 6 6 6 6 6 6 
    6 6 6 6 9 9 9 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 100)
Sprite2.follow(mySprite, 50)
