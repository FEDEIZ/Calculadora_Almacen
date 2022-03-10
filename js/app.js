class Calculadora{
    constructor(){
        this._valorDisplay = '';
        this._operacionDisplay = '';
        this._valorAnterior = '';
        this._operando = false;
        this._punto = false;

    }
    
    ingresarNumero(numeroHTML){

        console.log('Estoy en IngresarNumero');

        if(this._operando){
            this._valorAnterior = this._valorDisplay;
            this._valorDisplay = '';
            this._operando = false;
        }
        if(numeroHTML == '.'){
            if(!this._valorDisplay.includes('.')){
            if(this._valorDisplay == '') this._valorDisplay = '0.'; // si ingresa '.' primer valor transformo a 0.
            else this._valorDisplay += numeroHTML; //agrego un '.' despues del numero
            }
        }
        else{
            if(numeroHTML == '0'){
                if(this._valorDisplay.includes('.')) this._valorDisplay += numeroHTML; // solo agrego 0 despues de la coma
                else this._valorDisplay = '0';
            }
            else this._valorDisplay += numeroHTML; // para cualquier nro fuera de estos casos
        }

            
            
            
            calculadora1.actualizarDisplay();
                   
    }

   

    ingresarOperacion(operacionHTML){
        
            if(this._valorDisplay != '' && this._valorDisplay != 'ERR'){

            console.log('Estoy en ingresarOperacion')
            
            if(this._valorAnterior != '') calculadora1.calcular();
            this._operacionDisplay = operacionHTML;
            
            this._operando = true;
            

            calculadora1.actualizarDisplay();
            
            
            
            }
            
        
    }

    calcular(){

        switch(this._operacionDisplay){
            case '+': this._valorDisplay = Number(this._valorAnterior) + Number(this._valorDisplay); 
                    break;
            case '-': this._valorDisplay = Number(this._valorAnterior) - Number(this._valorDisplay);
                    break
            case 'X': this._valorDisplay = Number(this._valorAnterior) * Number(this._valorDisplay);
                    break;
            case '%': if(Number(this._valorDisplay) != 0) this._valorDisplay = Number(this._valorAnterior) / Number(this._valorDisplay);
                      else this._valorDisplay = 'ERR';
                    break;
        }
        this._valorDisplay = String(this._valorDisplay);
        this._valorAnterior = '';
        

    }

    actualizarDisplay(){

        document.getElementById('id_display_num').innerHTML = this._valorDisplay; 
                
        document.getElementById('id_display_operacion').innerHTML = this._operacionDisplay;
        
        
        console.log('Estoy en actualizarDisplay')
        console.log(`valorDisplay: ${this._valorDisplay} \nvalorAnterior: ${this._valorAnterior} \noperando: ${this._operando} \noperacionDisplay: ${this._operacionDisplay}`);


    }

    reset(){
        
        console.log('Estoy en reset');
        this._valorDisplay = '';
        this._valorAnterior = '';
        this._operacionDisplay = '';
        this._operando = false;
        this._punto = false;
        
        document.getElementById('id_display_num').innerHTML = '0.';
        document.getElementById('id_display_operacion').innerHTML = '';
        console.log(`valorDisplay: ${this._valorDisplay} \nvalorAnterior: ${this._valorAnterior} \noperando: ${this._operando} \noperacionDisplay: ${this._operacionDisplay}`);

    }

    


}

let calculadora1 = new Calculadora();

console.log('calculadora1 creada');

