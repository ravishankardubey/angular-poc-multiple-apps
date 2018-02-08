import Rx from 'rxjs';
import {moveLeft} from './components/moveLeft.js';
import {moveRight} from './components/moveRight.js';
import {moveUp} from './components/moveUp.js';
import {moveDown} from './components/moveDown.js';
import {zoomIn} from './components/zoomIn';
import {zoomOut} from './components/zoomOut';
import {clockwise} from './components/clockwise.js';
import {antiClockwise} from './components/antiClockwise.js';

var posLeft = 0;
var posTop = 0;
var zoom = 100;
var rotation = 0;
window.printCanvas = function () {
    document.getElementById("cat").style.cssText = "position:absolute;";
    Rx.Observable.fromEvent(document, 'keydown')
        .subscribe(function (e) {
            // console.log(e.keyCode);
            switch (e.keyCode) {
                case 37:
                    posLeft = moveLeft(posLeft);
                    break;
                case 38:
                    posTop = moveUp(posTop);
                    break;
                case 39:
                    posLeft = moveRight(posLeft);
                    break;
                case 40:
                    posTop = moveDown(posTop);
                    break;
                case 187:
                    zoom = zoomIn(zoom);
                    break;
                case 189:
                    zoom = zoomOut(zoom);
                    break;
                case 221 : 
                    rotation = clockwise(rotation);
                    break;
                case 219 : 
                    rotation = antiClockwise(rotation);
                    break;

            }
        });
}