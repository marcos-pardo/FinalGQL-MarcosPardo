
const apiKey = "kQ/qMO9eMRRWuc1yzZteFA==lZJA9Uo0JhgLlXkB";

const options ={
    method: "GET",
    headers:{
        "x-api-key": apiKey,
    },
};

export const checkDate= async(city:string):Promise<string>=>{

    console.log (city);
    const url = "https://api.api-ninjas.com/v1/worldtime?city="+city;
    const response = await fetch (url, options);
    console.log(response);
    if (response.status !==200){
        throw new Error ("pais no valido")
    }


    const data = await response.json();
    console.log (data);
    const hora = data.datetime
    console.log (hora);
    return hora;

}
