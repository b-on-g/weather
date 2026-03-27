namespace $.$$ {

	export class $bog_weather_app extends $.$bog_weather_app {

		/** Широта из URL. Default — Москва */
		@ $mol_mem
		lat( next?: number ) {
			const raw = this.$.$mol_state_arg.value( 'lat', next != null ? String( next ) : undefined )
			return raw ? Number( raw ) : 55.7558
		}

		/** Долгота из URL. Default — Москва */
		@ $mol_mem
		lon( next?: number ) {
			const raw = this.$.$mol_state_arg.value( 'lon', next != null ? String( next ) : undefined )
			return raw ? Number( raw ) : 37.6173
		}

		/** Полный прогноз — один реактивный вызов API */
		@ $mol_mem
		forecast(): typeof $bog_weather_app_forecast.default {
			return $bog_weather_app_api.forecast({ lat: this.lat(), lon: this.lon() }) as typeof $bog_weather_app_forecast.default
		}

		// --- Current ---

		current_weather_code() {
			return Number( this.forecast().current.weather_code ?? 0 )
		}

		current_temperature() {
			return Number( this.forecast().current.temperature_2m ?? 0 )
		}

		current_apparent_temperature() {
			return Number( this.forecast().current.apparent_temperature ?? 0 )
		}

		current_wind_speed() {
			return Number( this.forecast().current.wind_speed_10m ?? 0 )
		}

		current_wind_direction() {
			return Number( this.forecast().current.wind_direction_10m ?? 0 )
		}

		current_humidity() {
			return Number( this.forecast().current.relative_humidity_2m ?? 0 )
		}

		current_uv_index() {
			return Number( this.forecast().current.uv_index ?? 0 )
		}

		current_pressure() {
			return Number( this.forecast().current.pressure_msl ?? 0 )
		}

		// --- Today ---

		today_temp_max() {
			return Number( this.forecast().daily.temperature_2m_max?.[0] ?? 0 )
		}

		today_temp_min() {
			return Number( this.forecast().daily.temperature_2m_min?.[0] ?? 0 )
		}

		today_sunrise() {
			return String( this.forecast().daily.sunrise?.[0] ?? '' )
		}

		today_sunset() {
			return String( this.forecast().daily.sunset?.[0] ?? '' )
		}

		/** День или ночь — сравниваем текущее время с восходом/закатом */
		is_night() {
			const now = Date.now()
			const sunrise = new Date( this.today_sunrise() ).getTime()
			const sunset = new Date( this.today_sunset() ).getTime()
			if( !sunrise || !sunset ) return false
			return now < sunrise || now > sunset
		}

		// --- Data for sub-components ---

		hourly_data() {
			return this.forecast().hourly
		}

		daily_data() {
			return this.forecast().daily
		}

		// --- City ---

		@ $mol_mem
		city_name( next?: string ) {
			return this.$.$mol_state_local.value( 'weather_city', next ) ?? 'Москва'
		}

		/** Обработка выбора города из поиска */
		@ $mol_action
		on_city_select( location: any ) {
			if( !location ) return
			this.lat( location.latitude )
			this.lon( location.longitude )
			this.city_name( location.name )
		}

		/** Запросить геолокацию браузера */
		@ $mol_action
		geolocate() {
			if( !navigator.geolocation ) return

			navigator.geolocation.getCurrentPosition(
				( pos ) => {
					this.lat( pos.coords.latitude )
					this.lon( pos.coords.longitude )
					// Reverse geocode для имени города
					const locations = $bog_weather_app_api.geocode(
						`${ pos.coords.latitude },${ pos.coords.longitude }`
					)
					if( locations.length > 0 ) {
						this.city_name( locations[0].name )
					}
				},
				() => {
					// Отказ — оставляем Москву
				}
			)
		}

	}

}
