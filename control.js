class Controls{
    constructor(){
        this.foward=false;
        this.revserse=false;
        this.right=false;
        this.left=false;
       
        this.#addKeyboardListeners();



    }
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
                this.foward=true;
                break;
                case"ArrowDown":
                this.revserse=true;
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
                this.foward=false;
                break;
                case"ArrowDown":
                this.revserse=false;
                break;
        } 
    }
   }

}
