// Source from https://cindr.org/how-to-get-a-minecraft-servers-player-count-motd-and-status-using-javascript/
function initServerData(serverIp,serverPort){
    fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));

    function handleServerStatus(data){
        if(data.status=='error'){
            console.log(data.error);
            return false;
        }

        const playerCounter = document.getElementById("player-count");
        playerCounter.innerHTML = data.players.now;
    } 
}
initServerData("canyoncraft.net","25565");