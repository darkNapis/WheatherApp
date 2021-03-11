const weatherData = {
    tempUnit: 'C',
    windSpeedUnit: 'm/s',
    days: [
    { day: 'Mon', temp: 26, windDirection: 'north-east', windSpeed: 8, type:'sunny' },
    { day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy' },
    { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
    { day: 'Thu', temp: 24, windDirection: 'north-east', windSpeed: 7, type:'sunny' },
    { day: 'Fri', temp: 13, windDirection: 'north-west', windSpeed: 18, type: 'rainy' },
    { day: 'Sat', temp: 16, windDirection: 'south-east', windSpeed: 17, type: 'cloudy' },
    { day: 'Sun', temp: 15, windDirection: 'south-east', windSpeed: 16, type: 'cloudy' },
    ]
    };

function dayClicked() {
    const dayWrapper = document.createElement('div');
    dayWrapper.style = "border: 4px solid gray; padding: 2px; pozition: relative;"
    
    const dayTextWrapper = document.createElement('div');
    dayTextWrapper.append(this.day);
    //dayWrapper.append(this.day + " " + this.temp + " " + 
                        //weatherData.tempUnit + " " + this.windDirection + " " + 
                        //this.windSpeed + "mph " + this.type + " ");
    dayWrapper.appendChild(dayTextWrapper);
    
    const dayTempWrapper = document.createElement('div');
    dayTempWrapper.style = "position: relative; padding: 2px;"
    dayWrapper.appendChild(dayTempWrapper);
    dayTempWrapper.append(this.temp + "" + weatherData.tempUnit + " ");
    
    const dayWindDirectionWrapper = document.createElement('div');
    dayWindDirectionWrapper.style = "position: relative; padding: 2px;"
    dayWrapper.appendChild(dayWindDirectionWrapper);
    dayWindDirectionWrapper.append(this.windDirection);
    
    const dayWindSpeedWrapper = document.createElement('div');
    dayWindSpeedWrapper.style = "position: relative; padding: 2px;"
    dayWrapper.appendChild(dayWindSpeedWrapper);
    dayWindSpeedWrapper.append(this.windSpeed + "mph ");
    
    const dayTypeWrapper = document.createElement('div');
    dayTypeWrapper.style = "position: relative; padding: 2px;"
    dayWrapper.appendChild(dayTypeWrapper);
    dayTypeWrapper.append(this.type);
    
    const dayInfo = document.querySelector(".dayInfo");
    dayInfo.innerHTML="";
    dayInfo.appendChild(dayWrapper);
}

function createList() {
    const list = document.querySelector(".list");
    for (let index = 0; index < weatherData.days.length; index++) {
        const element = weatherData.days[index];
        const dayWrapper = document.createElement("div");
        dayWrapper.addEventListener("click", dayClicked.bind(element))
        dayWrapper.append(element.day + " " + element.temp + " " + weatherData.tempUnit);
        list.appendChild(dayWrapper);
    }
}

createList();
