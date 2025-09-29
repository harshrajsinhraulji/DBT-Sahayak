
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { LoaderCircle, MapPin, AlertTriangle, Cloud, Sun, CloudRain, Snowflake, Zap, CloudSun } from 'lucide-react';
import { Button } from './ui/button';

interface WeatherData {
  temp: number;
  humidity: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
  name: string;
}

const WeatherIcon = ({ iconCode }: { iconCode: string }) => {
    switch (iconCode.slice(0, 2)) {
        case '01': return <Sun className="h-10 w-10 text-yellow-500" />;
        case '02': return <CloudSun className="h-10 w-10 text-gray-400" />;
        case '03':
        case '04': return <Cloud className="h-10 w-10 text-gray-400" />;
        case '09':
        case '10': return <CloudRain className="h-10 w-10 text-blue-400" />;
        case '11': return <Zap className="h-10 w-10 text-yellow-400" />;
        case '13': return <Snowflake className="h-10 w-10 text-blue-200" />;
        default: return <Sun className="h-10 w-10 text-yellow-500" />;
    }
}


export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const fetchWeather = async (lat: number, lon: number) => {
    if (!API_KEY) {
      setError('Weather API key (NEXT_PUBLIC_OPENWEATHER_API_KEY) is not configured.');
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch weather data.');
      }

      setWeather({
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        weather: data.weather[0],
        name: data.name
      });
      setError(null);
    } catch (err: any) {
      setError(`Could not retrieve weather: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const requestLocation = () => {
       if (!navigator.geolocation) {
          setError('Geolocation is not supported by your browser.');
          setLoading(false);
          setPermissionGranted(false);
          return;
      }

      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
            setPermissionGranted(true);
            fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        () => {
           setError('Location access denied. Please enable it in your browser settings to see local weather.');
           setLoading(false);
           setPermissionGranted(false);
        }
    );
  }

  useEffect(() => {
    requestLocation();
  }, []);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <MapPin className="text-primary" /> Local Weather & Scheme Advisory
        </CardTitle>
        <CardDescription>Get weather-based recommendations for relevant DBT schemes.</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center h-24">
            <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">Fetching local weather...</p>
          </div>
        ) : error ? (
           <div className="flex flex-col items-center justify-center h-24 text-center">
            <AlertTriangle className="h-8 w-8 text-destructive mb-2" />
            <p className="text-sm text-destructive">{error}</p>
             {permissionGranted === false && !API_KEY && (
                <Button variant="link" onClick={requestLocation} className="mt-2">Try Again</Button>
            )}
            {!API_KEY && (
                <p className="text-xs text-muted-foreground mt-2">Please add NEXT_PUBLIC_OPENWEATHER_API_KEY to your .env file.</p>
            )}
          </div>
        ) : weather ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <WeatherIcon iconCode={weather.weather.icon} />
               <div>
                    <p className="text-4xl font-bold font-headline">{weather.temp}°C</p>
                    <p className="text-muted-foreground capitalize">{weather.weather.description}</p>
               </div>
            </div>
            <div className="text-right">
                <p className="font-semibold text-lg">{weather.name}</p>
                <p className="text-sm text-muted-foreground">Humidity: {weather.humidity}%</p>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
