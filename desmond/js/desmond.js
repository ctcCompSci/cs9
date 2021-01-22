$(document).ready(function () {
    // OLD CLOCK
    function currentTime() {
        var date = new Date(); /* creating object of Date class */
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);

        var oldClock = document.getElementById("clock");
        if (oldClock) {
            oldClock.innerText = hour + " : " + min + " : " + sec; /* adding time to the div */

            var t = setTimeout(function () {
                currentTime()
            }, 1000); /* setting timer */
        }
    }

    function updateTime(k) {
        if (k < 10) {
            return "0" + k;
        }
        else {
            return k;
        }
    }

    currentTime(); /* calling currentTime() function to initiate the process */

    // NEW CLOCK

    var canvas = document.getElementById("newClock");
    var ctx = canvas.getContext("2d");

    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 17;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#00ffff'

    function degToRad(degree) {
        var factor = Math.PI / 180;
        return degree * factor;
    }

    function renderTime() {
        var now = new Date();
        var today = now.toDateString();
        var time = now.toLocaleTimeString();
        var hrs = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var mil = now.getMilliseconds();
        var smoothsec = sec + (mil / 1000);
        var smoothmin = min + (smoothsec / 60);

        //Background
        gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
        gradient.addColorStop(0, "#03303a");
        gradient.addColorStop(1, "black");
        ctx.fillStyle = gradient;
        //ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
        ctx.fillRect(0, 0, 500, 500);
        //Hours
        ctx.beginPath();
        ctx.arc(250, 250, 120, degToRad(270), degToRad((hrs * 30) - 90));
        ctx.stroke();
        //Minutes
        ctx.beginPath();
        ctx.arc(250, 250, 90, degToRad(270), degToRad((smoothmin * 6) - 90));
        ctx.stroke();
        //Seconds
        ctx.beginPath();
        ctx.arc(250, 250, 60, degToRad(270), degToRad((smoothsec * 6) - 90));
        ctx.stroke();
        //Date
        ctx.font = "25px Helvetica";
        ctx.fillStyle = '#ff4000'
        ctx.fillText(today, 175, 250);
        //Time
        ctx.font = "25px Helvetica Bold";
        ctx.fillStyle = '#ff4000';
        ctx.fillText(time + ":" + mil, 175, 280);

    }
    setInterval(renderTime, 40);
});