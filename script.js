function agregar(valor){
    document.getElementById('pantalla').value += valor;
    pantalla.focus()
}

function borrar_valor(){
    document.getElementById('pantalla')
    pantalla.value = pantalla.value.slice(0,-1);
    pantalla.focus();
}

function calcular_valor(){
    const valor_pantalla = document.getElementById('pantalla');
    try{
        const resultado = eval(valor_pantalla.value);
        valor_pantalla.value = resultado;
    }catch{
        pantalla.value = 'error';

    }
    pantalla.focus();
}

document.addEventListener('DOMContentLoaded', () =>{
    const pantalla = document.getElementById('pantalla');

    pantalla.focus();
    
    pantalla.addEventListener('keydown', (event) =>{
        const teclasPermitidas =  /^[0-9+\-*/.()]$/;
        const tecla = event.key;

        if(tecla === 'ENTER'){
            calcular_valor();
            event.preventDefault();
        }else if (tecla === 'Backspace'|| tecla === 'Delete'){
            return;
        }else if (!teclasPermitidas.test(tecla)){
            event.preventDefault();
        }

        document.querySelectorAll('input[type="button"]').forEach((boton) =>{
            boton.addEventListener('click',() =>{

            })
        })

    });
})

