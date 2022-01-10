let canvas, context;

let x, y, i, j;
x = 10;
y = 10;
i = 2;


function update() {
        if (y + i + 10 > canvas.height){
            i = -2
        } else if (y + i < 0){
            i = 2
        }

        if (x - 10 >= canvas.width) {
            switch_ = false
            controls.innerHTML = '<button onclick="close_()">Close</button>' +
                '<button onclick="reload_()">Reload</button>'
        }

        x =  x + 1;
        y = y + i;
    }

function clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

function render() {
        context.beginPath();
        canvas.height = canvas.offsetHeight
        canvas.width = canvas.offsetWidth
        context.arc(
            x,
            y,
            10,
            0,
            Math.PI * 2
        );

        context.fillStyle = "yellow";
        context.fill();
    }


function animation() {

    requestAnimationFrame(tick);

    console.log(canvas.offsetWidth)


    function tick(timestamp) {

        if (switch_){
            requestAnimationFrame(tick);
        }

        update();
        clear();
        render();
    }
}