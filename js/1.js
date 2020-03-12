window.onload = function () {
            var main1 = document.getElementById('main1');
            var main11 = document.getElementById('main1-1');
            
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len =4;
            var animated = false;
            var interval = 3000;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(main11.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(main11.style.left) < left) || (speed < 0 && parseInt(main11.style.left) > left)) {
                       main11.style.left = parseInt(main11.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        main11.style.left = left + 'px';
                        if(left>-700){
                            main11.style.left = -1700 * len + 'px';
                        }
                        if(left<(-1700 * len)) {
                            main11.style.left = '-1700px';
                        }
                        animated = false;
                    }
                }
                go();
            }

           

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 4) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1700);
               
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 4;
                }
                else {
                    index -= 1;
                }
                animate(1700);
               
            }

           
            main1.onmouseover = stop;
            main1.onmouseout = play;

            play();

        }