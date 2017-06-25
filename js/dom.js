$(document).ready(function() {

    $("#playCircle").on("click", function() {
        playButton();
    });



    $("#health").on("click", function() {
        if (player.skillPoints > 0) {
            player.health++;
            player.healthBonus++;
            player.skillPoints--;
        }
        updateMenu();
    });

    $("#cooldown").on("click", function() {
        if (player.skillPoints > 0) {
            player.weapCd++;
            player.skillPoints--;
        }
        updateMenu();
    });

    $("#speed").on("click", function() {
        if (player.skillPoints > 0) {
            player.speedBonus++;
            player.skillPoints--;
        }
        updateMenu();
    });

    $("#invTime").on("click", function() {
        if (player.skillPoints > 0) {
            player.invTimeBonus += 0.1;
            player.skillPoints--;
        }
        updateMenu();
    });

});


function updateMenu() {
    $("#level").html(player.level);
    $("#xp").html(player.xp);
    $("#skillPoints").html(player.skillPoints);
    $("#health").prev().html(player.healthBonus);
    $("#speed").prev().html(player.speedBonus);
    $("#invTime").prev().html(round(player.invTimeBonus * 10) / 10);
    $("#cooldown").prev().html(player.weapCd);
}
