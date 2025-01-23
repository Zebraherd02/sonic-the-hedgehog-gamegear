namespace SpriteKind {
    export const Background = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
    mySprite.setImage(assets.image`myImage0`)
    pause(300)
    mySprite.setImage(assets.image`Jump anim`)
    mySprite.y += -20
    pause(200)
    mySprite.y += -20
    pause(500)
    mySprite.setImage(assets.image`myImage`)
    mySprite.y += 40
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.x += 7
    mySprite.setImage(assets.image`myImage`)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.setImage(assets.image`myImage1`)
    mySprite.x += -7
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`Green Hill`)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.y += 75
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
