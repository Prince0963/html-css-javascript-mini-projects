const clock = document.querySelector(".clock");

clock.addEventListener("load", tick);

function tick()
{
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const second = now.getSeconds();

    const html = ` <span>${hour} :</span>
    <span>${minutes} :</span>
    <span>${second}</span>`

    clock.innerHTML = html;
}

setInterval(tick,1000);