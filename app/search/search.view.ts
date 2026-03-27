namespace $.$$ {

	export class $bog_weather_app_search extends $.$bog_weather_app_search {

		trigger_click() {
			this.opened( !this.opened() )
		}

		@ $mol_mem
		locations() {
			const query = this.query()
			if( !query || query.length < 2 ) return []
			return $bog_weather_app_api.geocode( query )
		}

		@ $mol_mem
		result_rows() {
			return this.locations().map( ( _, i ) => this.Result( i ) )
		}

		result_location( index: number ) {
			return this.locations()[ index ] ?? null
		}

		result_click( index: number ) {
			const loc = this.result_location( index )
			if( !loc ) return
			this.event_select( loc )
			this.opened( false )
			this.query( '' )
		}

	}

	export class $bog_weather_app_search_row extends $.$bog_weather_app_search_row {

		name_text() {
			const loc = this.location()
			return loc?.name ?? ''
		}

		country_text() {
			const loc = this.location()
			return loc?.country ?? ''
		}

	}

}
