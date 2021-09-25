// Pagina Sobre - Plugin Device

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    
    $("#versao").html(VersaoApp);

   $("#modelo").html(device.model);

    $("#plataforma").html(device.platform);

    $("#uuid").html(device.uuid);
}














































/*window.onload = function(){
document.addEventListener("deviceready", iniciar);
}


/*$("#btn_infocelular").on('click',function(){
    var info_device = "";
info_device += "Modelo do sistema: " + device.model;
info_device += "<br> sistema operacional: " + device.platform;
info_device += "<br> versao so: " + device.version;
info_device += "<br> fabricante: " + device.manufacturer;
info_device += "<br> serial: " + device.serial;
    alert(info_device);
})




  
        document.addEventListener('deviceready',onDeviceReady, false)
    


document.getElementById("cordova").innerHTML = device.cordova;
document.getElementById("modelo").innerHTML = device.model;
document.getElementById("plataforma").innerHTML = device.platform;
document.getElementById("versao do so").innerHTML = device.version;
document.getElementById("fabricante").innerHTML = device.manufacturer;

*/
    



var app = {
    initialize: function(){
        document.addEventListener('deviceready',
        this.onDeviceReady, false)
    },
    onDeviceReady: function(){
        console.log('deviceready')

var p = document.querySelector('#device p');
p.innerHTML = device.cordova 

        
    }
};
app.initialize()


