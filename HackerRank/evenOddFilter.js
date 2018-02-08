    right = style.getPropertyValue('right');
    right = right.substring(0, right.length - 2);
    var newRight = parseInt(right)+1;
    document.getElementById("cat").style.right = newRight+"px";
