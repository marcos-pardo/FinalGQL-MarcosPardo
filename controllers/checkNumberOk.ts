const apiKey = "kQ/qMO9eMRRWuc1yzZteFA==lZJA9Uo0JhgLlXkB";

const options ={
    method: "GET",
    headers:{
        "x-api-key": apiKey,
    },
};

export const checkNumber = async(number:string):Promise<boolean>=>{

    const url = "https://api.api-ninjas.com/v1/validatephone?number="+number;
    const response = await fetch (url, options);
    if (response.status !==200){
        throw new Error ("numero no valido")
    }
    const data = await response.json();
    return data;
}
