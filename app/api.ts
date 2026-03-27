namespace $ {

	export class $bog_weather_app_api extends $mol_object {

		@ $mol_mem_key
		static forecast( coords: { lat: number, lon: number } ) {
			const url = `https://api.open-meteo.com/v1/forecast`
				+ `?latitude=${ coords.lat }&longitude=${ coords.lon }`
				+ `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl,uv_index`
				+ `&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m,relative_humidity_2m`
				+ `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,wind_speed_10m_max,precipitation_probability_max`
				+ `&timezone=auto&forecast_days=10`

			const raw = $mol_fetch.json( url )
			return $bog_weather_app_forecast.cast( raw )
		}

		@ $mol_mem_key
		static geocode( query: string ): readonly (typeof $bog_weather_app_location.default)[] {
			if( !query.trim() ) return []

			const url = `https://geocoding-api.open-meteo.com/v1/search`
				+ `?name=${ encodeURIComponent( query ) }&count=5&language=ru`

			const raw = $mol_fetch.json( url )
			const response = $bog_weather_app_geocode_response.cast( raw )
			return response.results as readonly (typeof $bog_weather_app_location.default)[]
		}

	}

}
