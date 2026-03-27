namespace $.$$ {

	const wind_directions = [
		'С', 'ССВ', 'СВ', 'ВСВ', 'В', 'ВЮВ', 'ЮВ', 'ЮЮВ',
		'Ю', 'ЮЮЗ', 'ЮЗ', 'ЗЮЗ', 'З', 'ЗСЗ', 'СЗ', 'ССЗ',
	]

	export class $bog_weather_app_details extends $.$bog_weather_app_details {

		wind_text() {
			const speed = Math.round( this.wind_speed() )
			const dir_index = Math.round( this.wind_direction() / 22.5 ) % 16
			return `${ speed } км/ч ${ wind_directions[ dir_index ] }`
		}

		humidity_text() {
			return `${ this.humidity() }%`
		}

		uv_text() {
			const uv = this.uv_index()
			let level = 'низкий'
			if( uv >= 3 ) level = 'умеренный'
			if( uv >= 6 ) level = 'высокий'
			if( uv >= 8 ) level = 'очень высокий'
			if( uv >= 11 ) level = 'экстремальный'
			return `${ Math.round( uv ) } — ${ level }`
		}

		pressure_text() {
			const hpa = this.pressure()
			const mmhg = Math.round( hpa * 0.750062 )
			return `${ mmhg } мм рт. ст.`
		}

		sunrise_text() {
			const raw = this.sunrise()
			if( !raw ) return ''
			const d = new Date( raw )
			return `${ String( d.getHours() ).padStart( 2, '0' ) }:${ String( d.getMinutes() ).padStart( 2, '0' ) }`
		}

		sunset_text() {
			const raw = this.sunset()
			if( !raw ) return ''
			const d = new Date( raw )
			return `${ String( d.getHours() ).padStart( 2, '0' ) }:${ String( d.getMinutes() ).padStart( 2, '0' ) }`
		}

	}

}
