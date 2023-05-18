import React, { useEffect, useState } from 'react'

const Screen = () => {


    const [city, setCity] = useState('Ludhiana');

    let myApi = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36`

    const [apiLink,setApi] = useState(myApi);

    const [apiData,setApiData] = useState({
        main:{
            temp:0,
        }
    });


    useEffect(()=> {
        const getApi = async () => {
            const response = await fetch(apiLink);
            const result = await response.json();
            setApiData(()=>({
                ...result
            }));
            console.log(apiData);
        }
        getApi();
    },[apiLink])

    
    const handleCityInput = (e) =>{
        setCity(e.target.value);
    }

    const handleSearch = () => {
        setApi(myApi)
    }

    

return (
    <div style={{border: '8px dashed',marginLeft: '450px', marginRight:"350px"}}>
        <div style={{marginLeft: '200px', marginBottom: '50px',marginRight: '200px'}}>
        <h1>Weather Application</h1>
        <br/>
        <input type="text" placeholder="Enter City Name" onChange={handleCityInput} style={{marginLeft: '50px'}}/>
        <br/>
        <br/>
        <button style={{marginLeft: '100px'}} onClick={handleSearch}>Search</button>
        <br/>
        <br/>
        <div>
            <h2 style={{display:"inline", marginLeft: '50px',marginTop: '50px'}}>Temperature:</h2>
            <p style={{display:"inline"}}>{apiData.main.temp}</p>
        </div>
        </div>
    </div>
)
}

export default Screen