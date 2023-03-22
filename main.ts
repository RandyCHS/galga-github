controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
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
        `, spacePlane2, 200, 0)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
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
        `, spacePlane1, 200, 0)
})
info.player1.onLifeZero(function () {
    sprites.destroy(spacePlane1, effects.disintegrate, 500)
})
info.player2.onLifeZero(function () {
    sprites.destroy(spacePlane2, effects.bubbles, 500)
})
// This was the only way I could make the bogies cause each player to lose lives
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (sprite == spacePlane1) {
        info.player1.changeLifeBy(-1)
    } else {
        info.player2.changeLifeBy(-1)
    }
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane2: Sprite = null
let spacePlane1: Sprite = null
spacePlane1 = sprites.create(img`
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
spacePlane2 = sprites.create(img`
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
spacePlane1.setFlag(SpriteFlag.StayInScreen, true)
spacePlane2.setFlag(SpriteFlag.StayInScreen, true)
controller.player1.moveSprite(spacePlane1)
controller.player2.moveSprite(spacePlane2)
info.player1.setLife(3)
info.player2.setLife(3)
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
