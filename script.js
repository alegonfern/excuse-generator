let who = ['Un perro con dos colas','Mi mamá','El vecino desquiciado de al frente','El dueño de la verdulería', 'La vecina intrusa', 'La PDI', 'La vendedora de tumbas'];
let what = ['reescribió','cambió','borró','publicó', 'modificó', 'le agregó a'];
let when = ['en la noche mientras dormía','cuando me encontraba en un acto del colegio de mi hija','mientras hacía fila para entrar a la iglesia.'];

function excuseGenerator(who, what, when){
    var numWho = Math.floor(Math.random() * who.length);
    var numWhat = Math.floor(Math.random() * what.length);
    var numWhen = Math.floor(Math.random() * when.length);
    return who[numWho] + " " + what[numWhat] + " " + "mi codigo" + " " + when[numWhen];
}

function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}

window.onload = onLoad;