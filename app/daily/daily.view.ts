namespace $.$$ {
	const day_names = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

	export class $bog_weather_app_daily extends $.$bog_weather_app_daily {
		@$mol_mem
		day_rows() {
			const data = this.daily_data()
			if (!data || !data.time) return []
			return data.time.map((_: string, i: number) => this.Day(i))
		}

		day_index(id: number) {
			return id
		}
	}

	export class $bog_weather_app_daily_row extends $.$bog_weather_app_daily_row {
		date_text() {
			const data = this.daily_data()
			if (!data) return ''
			const i = this.index()
			if (i === 0) return 'Сегодня'
			if (i === 1) return 'Завтра'
			const date = new Date(data.time[i])
			return day_names[date.getDay()]
		}

		icon_uri() {
			const data = this.daily_data()
			if (!data) return ''
			const info = $bog_weather_app_code_info(data.weather_code[this.index()], false)
			return `bog/weather/app/icons/${info.icon}.svg`
		}

		temp_min_text() {
			const data = this.daily_data()
			if (!data) return ''
			return `${Math.round(data.temperature_2m_min[this.index()])}°`
		}

		temp_max_text() {
			const data = this.daily_data()
			if (!data) return ''
			return `${Math.round(data.temperature_2m_max[this.index()])}°`
		}

		sunrise_text() {
			const data = this.daily_data()
			if (!data) return ''
			const time = new Date(data.sunrise[this.index()])
			return `🌅 ${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`
		}

		sunset_text() {
			const data = this.daily_data()
			if (!data) return ''
			const time = new Date(data.sunset[this.index()])
			return `🌇 ${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`
		}

		uv_text() {
			const data = this.daily_data()
			if (!data) return ''
			return `UV ${data.uv_index_max[this.index()]}`
		}

		wind_text() {
			const data = this.daily_data()
			if (!data) return ''
			return `💨 ${Math.round(data.wind_speed_10m_max[this.index()])} км/ч`
		}

		precip_text() {
			const data = this.daily_data()
			if (!data) return ''
			return `💧 ${data.precipitation_probability_max[this.index()]}%`
		}
	}
}
