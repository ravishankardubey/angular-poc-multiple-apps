export function moveDown(posTop) {
    let movableObject = document.getElementById("cat");
    posTop = posTop + 5;
    movableObject.style.top = posTop + "px";
    return posTop;
}