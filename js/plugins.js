// sticky sidebar
window.onscroll = function() {
    var sticky = document.getElementById('facts-sidebar');
    if( document.body.scrollTop+document.documentElement.scrollTop > 240)
        sticky.className = "stuck";
    else sticky.className = "";
};