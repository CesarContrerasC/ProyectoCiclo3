function sumar() {
    let x = parseInt(document.getElementById("numero1").value);
    let y = parseInt(document.getElementById("numero2").value);
    let suma = (x+y);
    console.log("el resultado es "+ suma);
}

function llamado(){
    $.ajax({ 
        url : 'https://g39aa9bb75e0a25-rluarqchrdaxaxy1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/library/library',
        type : 'GET',
        dataType : 'json',
        success : function(resultado) {
            console.log(resultado.items);
            $("#respuestas").html(resultado.items[0].name);
        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        }
    });
}









































