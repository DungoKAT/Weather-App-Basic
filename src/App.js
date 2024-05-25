import { useEffect, useState } from "react";

import "./App.css";

function App() {
    const name = "Bangkok";
    const apiKey = "1f2ebeb3891bbdbd6909d9aca0c335ed";
    const [city, setCity] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
        fetch(weatherURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCity(data);
                setIsLoading(true);
            });
    }, []);

    const convertTemp = (kelvin) => {
        return (kelvin - 273).toFixed();
    };

    return (
        isLoading && (
            <div className="App">
                <section>
                    <div className="location">
                        <h1 className="city">{city.name}</h1>
                        <p className="state">{city.sys.country}</p>
                    </div>
                    <div className="card">
                        <div className="weather">
                            <h1>{convertTemp(city.main.temp)} &deg;C</h1>
                            <small>
                                Max : {convertTemp(city.main.temp_max)} &deg;C ,
                                Min : {convertTemp(city.main.temp_min)} &deg;C
                            </small>
                        </div>
                        <div className="info">
                            <div className="status">{}</div>
                            <div className="huminidy">100</div>
                            <div className="wind">4.0</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    );
}

export default App;
