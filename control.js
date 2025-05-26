class Controls{
    constructor(type){
        this.forward=false;
        this.reverse=false;
        this.right=false;
        this.left=false;
       
        switch(type){
            case "KEYS":
            this.#addKeyboardListeners();
            break;
            case "DUMMY":
            this.forward = true;
            break;
          }     
    }
    
    //this.#addKeyboardListeners();


   #addKeyboardListeners(){
       document.onkeydown= (event)=>{
            switch (event.key){
                case"ArrowLeft":
                this.left=true;
                break;
                case"ArrowRight":
                this.right=true;
                break;
                case"ArrowUp":
                this.forward=true;
                break;
                case"ArrowDown":
                this.reverse=true;
                break;
            }

            // debuging if the keys are working 
            console.table(this);
        }
        document.onkeyup= (event)=>{
            switch (event.key){
                case"ArrowLeft":
                this.left=false;
                break;
                case"ArrowRight":
                this.right=false;
                break;
                case"ArrowUp":
                this.forward=false;
                break;
                case"ArrowDown":
                this.reverse=false;
                break;
        } 
    }
   }

}
