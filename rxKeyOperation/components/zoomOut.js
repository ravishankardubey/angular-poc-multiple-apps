export function zoomOut(zoom) {
    let movableObject = document.getElementById("cat");
    zoom = zoom - 5;
    movableObject.style.zoom = zoom + "%";
    return zoom;
}