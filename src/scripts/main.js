AOS.init();

const eventDate = new Date("Jul 22, 2024, 19:00:00");
    const eventTimeStamp = eventDate.getTime()

    const countdownInterval = setInterval(() => {
    const timeStampNow  = new Date().getTime()

    const timeToEvent = eventTimeStamp - timeStampNow;

    const daysMiliseconds = 1000 * 60 * 60 * 24;
    const hoursMiliseconds = 1000 * 60 * 60;
    const minutsMiliseconds = 1000 * 60

    const days = Math.floor(timeToEvent / daysMiliseconds)
    const hours = Math.floor((timeToEvent % daysMiliseconds) / hoursMiliseconds)
    const minuts = Math.floor((timeToEvent % hoursMiliseconds) / minutsMiliseconds)
    const seconds = Math.floor((timeToEvent % minutsMiliseconds) / 1000)

    document.getElementById('count').innerHTML = `${days} Days ${hours}:${minuts}:${seconds}s`

    if (timeToEvent < 0){
        clearInterval(countdownInterval)
        document.getElementById('count').innerHTML = "Evento acabou"
    }

}, 1000);
