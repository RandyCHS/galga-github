/**
 * Sequencing:  this code sets up the initial conditions of the game
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    lives += -1
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 6 . . . . . . . 
    . . . 6 6 . . . 6 6 . . . . . . 
    . . . 6 6 6 . . 6 6 6 . . . . . 
    . . . 6 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . 6 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 6 . . 6 6 6 . . . . . 
    . . . 6 6 . . . 6 6 . . . . . . 
    . . . . . . . . 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
let lives = 3
controller.moveSprite(spacePlane, 20, 20)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b a b . . . . . . . 
        . . . . . b a a a b . . . . . . 
        . . . . . b a a a b . . . . . . 
        . . . . . b b a b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . . b . b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, randint(0, 120))
})
