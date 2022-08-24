enum STATUS {
    InProgress,
    Successful,
    Failed
}

export interface IAPIResult {
   requestStatus: STATUS,
   data: any,
}

class APIResult implements IAPIResult{
    requestStatus: STATUS;
    data: any;

    constructor(){
        
    }
}