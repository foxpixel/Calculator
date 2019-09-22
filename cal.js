function cal() {
    var a = document.getElementById("ip").value;
    var re = eval(a);
    console.log(re);
    document.getElementById("ip").value = re;

}

function del() {
    var a = document.getElementById("ip");
    var c = document.getElementById("ip").value;
    var d = c.substring(0, c.length - 1);
    a.value = d;
}