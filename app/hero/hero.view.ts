namespace $.$$ {
	export class $bog_weather_app_hero extends $.$bog_weather_app_hero {
		scene() {
			return $bog_weather_app_code_info(this.weather_code(), this.is_night()).scene
		}

		froggy_uri() {
			return `bog/weather/app/hero/froggy/${this.scene()}.svg`
		}

		temp_text() {
			return `${Math.round(this.temperature())}°`
		}

		description_text() {
			return $bog_weather_app_code_info(this.weather_code(), this.is_night()).description
		}

		minmax_text() {
			return `↑${Math.round(this.temp_max())}° ↓${Math.round(this.temp_min())}°`
		}

		feels_text() {
			return `Ощущается как ${Math.round(this.apparent_temperature())}°`
		}
	}
}
