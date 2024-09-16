## TODOS:
- x Find a design file for the project 
- x Set up the weather api key
- Create project structure
- Find the video assets for the bacgrounds
- Find image assets for weather icons
- Wind speed and direction displayed with a compass icon

>  DESIGN FILE: https://www.figma.com/community/file/1005161083412880387/weather-app<br>
> Font: Inter, Google Font - https://fonts.google.com/specimen/Inter?query=inter <br>
> Weather API: https://api.open-meteo.com


## App Structure

### Home Page:
![homepage image](image.png)

- Left square: Main Component. Spans 3/5 || 60%
- Right square: Additional info component. Spans 2/5 || 40%

### Main component structure:
- TopBarInfo: Shows the current weather icon and a F/C switch.
- CurrentInfo: Shows the current temperature, date & time, wind info, humidity, rain
- WeeklyInfo: Shows a weekly report


### Additional Info Component Structure:
- SearchBar: Shows the currently selected location, which is hidden if the search bar is active. If not, then display search icon.
- SunInfo: Shows sunrise, golden hour, sunset times.
- ExtraInfo: Shows Air quality and uv index gauges.


### Current Issues:

For some fucked up reason I'm going to have to use the OpenMeteo Geolocation API first, to get the coordinates for the desired location, which are going to be used in the OpenMeteo Weather Forecast API.

So the current issue is creating the chain of operations which will result in correct weather forecast.