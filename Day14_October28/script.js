let master = document.getElementById('master');
    setTimeout(function () {
        setTimeout(function () {
            setTimeout(function () {
                setTimeout(function () {
                    setTimeout(function () {
                        setTimeout(function () {
                            setTimeout(function () {
                                setTimeout(function () {
                                    setTimeout(function () {
                                        setTimeout(function () {

                                            let divChild = document.createElement('div');
                                            divChild.innerHTML = 'Happy Independence Day';
                                            document.body.innerHTML = '';
                                            document.body.appendChild(divChild);
                                        }, 1000);
                                        master.innerHTML = 1;
                                    }, 1000);
                                    master.innerHTML = 2;
                                }, 1000);
                                master.innerHTML = 3;
                            }, 1000);
                            master.innerHTML = 4;
                        }, 1000);
                        master.innerHTML = 5;
                    }, 1000);
                    master.innerHTML = 6;
                }, 1000);
                master.innerHTML = 7;
            }, 1000);
            master.innerHTML = 8;
        }, 1000);
        master.innerHTML = 9;
    }, 1500);
    master.innerHTML = 10;

createTimer();
