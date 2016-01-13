// var clientThemes = [
//     'one',
//     'two',
//     'last'
// ];
// var body = document.body;
// var theme = clientThemes[Math.floor(Math.random() * clientThemes.length)];
// console.log(theme);
// body.id = theme + '_theme';
var styles = {};
var targetWr = document.getElementById('wrapper');
var targetNode = document.getElementById('testBlock');
var sizeNode = document.getElementById('size');
var themeNameNode = document.getElementById('themeName');
var timeNode = document.getElementById('time');
var bgColorNode = document.getElementById('bgColor');
var imageNode = document.getElementById('image');
var directionNode = document.getElementById('direction');
var directionWr = document.getElementById('directionWr');
var directXNode = document.getElementById('directX');
var directYNode = document.getElementById('directY');
var updateNode = document.getElementById('update');

setDefault();

updateNode.onclick = function () {
   updateAnim();
}
sizeNode.onchange = function () {
    var splt = sizeNode.value.split(' ');
   targetWr.style.width = splt[0];
   targetWr.style.height = splt[1];
}
themeNameNode.onchange = function () {
    styles.theme = themeNameNode.value;
}
timeNode.onchange = function () {
    styles.time = timeNode.value;
    targetNode.style.animationDuration = timeNode.value;
    updateAnim();
}
bgColorNode.onchange = function () {
    styles.bgColor = bgColorNode.value;
    targetNode.style.backgroundColor = bgColorNode.value;
    updateAnim();
}
imageNode.onchange = function () {
    styles.image = imageNode.value;
    targetNode.style.backgroundImage = "url('" + imageNode.value + "')";
    updateAnim();
}
directionNode.onchange = function () {
    styles.direction = directionNode.checked;
    if (directionNode.checked) {
        directionWr.style.display = 'block';
    } else {
        directionWr.style.display = 'none';
        directXNode.value = 'center';
        directYNode.value = 'center';
        targetNode.style.transformOrigin = directXNode.value + '' + directYNode.value;
    }
}
directXNode.onchange = function () {
    var splt = targetNode.style.transformOrigin.split(' ');
    targetNode.style.transformOrigin = directXNode.value + ' ' + splt[1];
    styles.transformOrigin = targetNode.style.transformOrigin;
    updateAnim();
}
directYNode.onchange = function () {
    var splt = targetNode.style.transformOrigin.split(' ');
    targetNode.style.transformOrigin = splt[0] + ' ' + directYNode.value;
    styles.transformOrigin = targetNode.style.transformOrigin;
    updateAnim();
}

function updateAnim () {
    targetNode.className = '';
    setTimeout(
        function () {
            targetNode.className = 'testBlock';
        },
        350
    );
}
function setDefault () {
    targetNode.style.transformOrigin = 'center center';
}
