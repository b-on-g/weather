namespace $.$$ {

	export class $bog_weather_app_hourly_view extends $.$bog_weather_app_hourly_view {

		@ $mol_mem
		hour_indices() {
			const data = this.hourly_data()
			if( !data || !data.time ) return []

			const now = new Date()
			const now_iso = now.toISOString().slice( 0, 13 )
			let start = data.time.findIndex( ( t: string ) => t.startsWith( now_iso ) )
			if( start < 0 ) start = 0

			const end = Math.min( start + 24, data.time.length )
			const indices: number[] = []
			for( let i = start; i < end; i++ ) indices.push( i )
			return indices
		}

		hour_index( id: number ) {
			return id
		}

		@ $mol_mem
		hour_items() {
			return this.hour_indices().map( i => this.Hour( i ) )
		}

	}

	export class $bog_weather_app_hourly_item extends $.$bog_weather_app_hourly_item {

		time_text() {
			const data = this.hourly_data()
			if( !data ) return ''
			const i = this.index()
			const date = new Date( data.time[ i ] )
			const now = new Date()
			if( date.getHours() === now.getHours() && date.getDate() === now.getDate() ) return 'Сейчас'
			return `${ String( date.getHours() ).padStart( 2, '0' ) }:00`
		}

		icon_uri() {
			const data = this.hourly_data()
			if( !data ) return ''
			const info = $bog_weather_app_code_info( data.weather_code[ this.index() ], false )
			return `/bog/weather/app/icons/${ info.icon }.svg`
		}

		temp_text() {
			const data = this.hourly_data()
			if( !data ) return ''
			return `${ Math.round( data.temperature_2m[ this.index() ] ) }°`
		}

		secondary_text() {
			const data = this.hourly_data()
			if( !data ) return ''
			const i = this.index()
			const tab = this.tab()
			if( tab === 'precip' ) return `${ data.precipitation_probability[ i ] }%`
			if( tab === 'wind' ) return `${ Math.round( data.wind_speed_10m[ i ] ) } км/ч`
			return `${ data.relative_humidity_2m[ i ] }%`
		}

	}

}
