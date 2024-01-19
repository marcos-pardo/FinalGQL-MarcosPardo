
const apiKey = "kQ/qMO9eMRRWuc1yzZteFA==lZJA9Uo0JhgLlXkB";

const options ={
    method: "GET",
    headers:{
        "x-api-key": apiKey,
    },
};

export const checkCity= async(country:string):Promise<string>=>{

    const url = "https://api.api-ninjas.com/v1/country?name="+country;
    const response = await fetch (url, options);
    if (response.status !==200){
        throw new Error ("ciudad no valida")
    }

    const data = await response.json();
    console.log (data);
    const ciudad = data[0].capital
    console.log (ciudad);
    return ciudad;

}
