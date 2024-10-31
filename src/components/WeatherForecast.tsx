import React from 'react';
import { Cloud, CloudRain, CloudSnow, Sun, CloudLightning } from 'lucide-react';
import type { WeatherForecast } from '../types';

interface WeatherForecastProps {
  forecast: WeatherForecast[];
}

const WeatherForecastDisplay: React.FC<WeatherForecastProps> = ({ forecast }) => {
  const getWeatherIcon = (conditions: string) => {
    switch (conditions.toLowerCase()) {
      case 'rain':
        return CloudRain;
      case 'snow':
        return CloudSnow;
      case 'storm':
        return CloudLightning;
      case 'cloudy':
        return Cloud;
      default:
        return Sun;
    }
  };

  return (
    <div className="mt-4 grid grid-cols-5 gap-4">
      {forecast.map((day, index) => {
        const Icon = getWeatherIcon(day.conditions);
        return (
          <div key={`${day.date}-${index}`} className="text-center">
            <p className="text-sm text-gray-600">{day.date}</p>
            <Icon className="h-8 w-8 mx-auto my-2 text-gray-600" aria-hidden="true" />
            <p className="text-sm font-medium">
              <span className="text-gray-900">{day.high}°</span>
              <span className="text-gray-500 mx-1">/</span>
              <span className="text-gray-500">{day.low}°</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecastDisplay;