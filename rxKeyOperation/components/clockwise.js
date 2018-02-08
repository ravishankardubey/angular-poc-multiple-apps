export function clockwise(rotation) {
    let movableObject = document.getElementById("cat");
    rotation = rotation + 2;
    movableObject.style.transform = `rotate(${rotation}deg)`;
    return rotation;
}