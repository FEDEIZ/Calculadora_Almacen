class Display{
    constructor(){
        
        this._valorDisplay = '';
        this._operacionDisplay = '';
    }

     get valorDisplay(){
         return this._valorDisplay;
     }


    // get operacionDisplay(){
    //     return this._operacionDisplay;
    // }

    // set operacionDisplay(operacionDisplay){
    //     this._operacionDisplay = operacionDisplay;
    // }

    ingresarNumero(numeroHTML){
            this._valorDisplay += numeroHTML;
            this._valorDisplay = String(Number(this._valorDisplay));
    }


}