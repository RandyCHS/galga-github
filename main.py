def on_player2_button_a_pressed():
    global projectile2
    projectile2 = sprites.create_projectile_from_sprite(img("""
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
        """),
        spacePlane2,
        200,
        0)
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def on_player1_button_a_pressed():
    global projectile1
    projectile1 = sprites.create_projectile_from_sprite(img("""
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
        """),
        spacePlane1,
        200,
        0)
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_player1_life_zero():
    sprites.destroy(spacePlane1, effects.disintegrate, 500)
info.player1.on_life_zero(on_player1_life_zero)

def on_player2_life_zero():
    sprites.destroy(spacePlane2, effects.bubbles, 500)
info.player2.on_life_zero(on_player2_life_zero)

# 1)This was the only way I could make the bogies cause each player to lose lives
# 2) For some reason the players' scores do not always increase with every enemy destroyed

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    if sprite == projectile1:
        info.player1.change_score_by(1)
    elif sprite == projectile2:
        info.player2.change_score_by(1)
    if info.player1.score() > 3:
        info.player1.set_score(0)
        info.player1.change_life_by(1)
    if info.player2.score() > 3:
        info.player2.set_score(0)
        info.player2.change_life_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

# This was the only way I could make the bogies cause each player to lose lives

def on_on_overlap2(sprite2, otherSprite2):
    otherSprite2.destroy()
    if sprite2 == spacePlane1:
        info.player1.change_life_by(-1)
    else:
        info.player2.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

bogey: Sprite = None
projectile1: Sprite = None
projectile2: Sprite = None
spacePlane2: Sprite = None
spacePlane1: Sprite = None
spacePlane1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
spacePlane2 = sprites.create(img("""
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
    """),
    SpriteKind.player)
spacePlane1.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
spacePlane2.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
controller.player1.move_sprite(spacePlane1)
controller.player2.move_sprite(spacePlane2)
info.player1.set_life(3)
info.player2.set_life(3)

def on_update_interval():
    global bogey
    bogey = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    bogey.set_velocity(-100, 0)
    bogey.set_position(180, randint(0, 120))
game.on_update_interval(500, on_update_interval)
