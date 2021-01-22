$(document).ready(function () { // wait for the page to load
    var textWrapper = document.querySelector('.ml2');
    if (textWrapper != null) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: true })
            .add({
                targets: '.ml2 .letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70 * i
            }).add({
                targets: '.ml2',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    }
    function GetClock(){
        var d=new Date();
        var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
        var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
        if(nmin<=9) nmin="0"+nmin;
        if(nsec<=9) nsec="0"+nsec;
        
        var clocktext=""+(nmonth+1)+"-"+ndate+"-"+nyear+" "+nhour+":"+nmin+":"+nsec+"";
        document.getElementById('clockbox').innerHTML=clocktext;
        }
        
        GetClock();
        setInterval(GetClock,1000);
        // Wrap every letter in a span
});


