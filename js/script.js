let block3 = document.getElementById('block3')
let start_text = block3.innerHTML
let switch_, controls;


function play(){
    block3.innerHTML = '<section id="work">' +
                            '<section id="controls">' +
                                '<button onclick="close_()">Close</button>' +
                                '<button onclick="start_()">Start</button>' +
                            '</section>' +
                            '<div id="anim_background">' +
                                '<canvas class="anim">' +
                                '</canvas>' +
                            '</div>' +
                        '</section>'

    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");

    controls = document.getElementById('controls')

    console.log(x)
    console.log(y)

    if (y + 0.5 > canvas.offsetHeight) {
        switch_ = false
        controls.innerHTML = '<button onclick="close_()">Close</button>' +
            '<button onclick="reload_()">Reload</button>'
        console.log(y)
        console.log(canvas.offsetHeight)
    }

    render();
    update();
}

function start_(){
    switch_ = true

    controls.innerHTML = '<button onclick="close_()">Close</button>' +
                         '<button onclick="stop_()">Stop</button>'
    animation()
}

function stop_(){
    switch_ = false

    controls.innerHTML = '<button onclick="close_()">Close</button>' +
                         '<button onclick="start_()">Start</button>'
}

function close_(){
    switch_ = false

    block3.innerHTML = start_text
}

function reload_(){
    x = 10;
    y = 10;

    controls.innerHTML = '<button onclick="close_()">Close</button>' +
                         '<button onclick="start_()">Start</button>'
    switch_ = false

    render();
}

