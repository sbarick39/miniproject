import {HttpErrorResponse} from "@angular/common/http";
const errorHandling=(err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
        console.log("client side error")
    }
    else{
        console.log("serverside error")
    }
}
 export default errorHandling;