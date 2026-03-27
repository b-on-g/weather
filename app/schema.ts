namespace $ {

	export class $bog_weather_app_location extends $mol_schema_record({
		name: $mol_schema_string,
		latitude: $mol_schema_float,
		longitude: $mol_schema_float,
		country: $mol_schema_string,
	}) {}

	export class $bog_weather_app_geocode_response extends $mol_schema_record({
		results: $mol_schema_array( $bog_weather_app_location ),
	}) {}

	export class $bog_weather_app_current extends $mol_schema_record({
		temperature_2m: $mol_schema_float,
		apparent_temperature: $mol_schema_float,
		relative_humidity_2m: $mol_schema_integer,
		weather_code: $mol_schema_integer,
		wind_speed_10m: $mol_schema_float,
		wind_direction_10m: $mol_schema_integer,
		pressure_msl: $mol_schema_float,
		uv_index: $mol_schema_float,
	}) {}

	export class $bog_weather_app_hourly_schema extends $mol_schema_record({
		time: $mol_schema_array( $mol_schema_string ),
		temperature_2m: $mol_schema_array( $mol_schema_float ),
		precipitation_probability: $mol_schema_array( $mol_schema_integer ),
		weather_code: $mol_schema_array( $mol_schema_integer ),
		wind_speed_10m: $mol_schema_array( $mol_schema_float ),
		relative_humidity_2m: $mol_schema_array( $mol_schema_integer ),
	}) {}

	export class $bog_weather_app_daily_schema extends $mol_schema_record({
		time: $mol_schema_array( $mol_schema_string ),
		weather_code: $mol_schema_array( $mol_schema_integer ),
		temperature_2m_max: $mol_schema_array( $mol_schema_float ),
		temperature_2m_min: $mol_schema_array( $mol_schema_float ),
		sunrise: $mol_schema_array( $mol_schema_string ),
		sunset: $mol_schema_array( $mol_schema_string ),
		uv_index_max: $mol_schema_array( $mol_schema_float ),
		wind_speed_10m_max: $mol_schema_array( $mol_schema_float ),
		precipitation_probability_max: $mol_schema_array( $mol_schema_integer ),
	}) {}

	export class $bog_weather_app_forecast extends $mol_schema_record({
		current: $bog_weather_app_current,
		hourly: $bog_weather_app_hourly_schema,
		daily: $bog_weather_app_daily_schema,
	}) {}

}
