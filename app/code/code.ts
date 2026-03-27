namespace $ {

	export type $bog_weather_app_code_scene =
		| 'sunny'
		| 'cloudy'
		| 'foggy'
		| 'drizzle'
		| 'rain'
		| 'snow'
		| 'thunder'
		| 'night_clear'
		| 'night_cloudy'

	export interface $bog_weather_app_code_info {
		description: string
		icon: string
		scene: $bog_weather_app_code_scene
	}

	export function $bog_weather_app_code_info(
		wmo_code: number,
		is_night: boolean = false,
	): $bog_weather_app_code_info {

		switch( wmo_code ) {

			case 0:
				return is_night
					? { description: 'Ясное небо', icon: 'sunny', scene: 'night_clear' }
					: { description: 'Ясное небо', icon: 'sunny', scene: 'sunny' }

			case 1:
				return is_night
					? { description: 'Преимущественно ясно', icon: 'sunny', scene: 'night_clear' }
					: { description: 'Преимущественно ясно', icon: 'sunny', scene: 'sunny' }

			case 2:
				return is_night
					? { description: 'Переменная облачность', icon: 'cloudy', scene: 'night_cloudy' }
					: { description: 'Переменная облачность', icon: 'cloudy', scene: 'cloudy' }

			case 3:
				return is_night
					? { description: 'Пасмурно', icon: 'cloudy', scene: 'night_cloudy' }
					: { description: 'Пасмурно', icon: 'cloudy', scene: 'cloudy' }

			case 45:
				return { description: 'Туман', icon: 'fog', scene: 'foggy' }

			case 48:
				return { description: 'Изморозевый туман', icon: 'fog', scene: 'foggy' }

			case 51:
				return { description: 'Лёгкая морось', icon: 'drizzle', scene: 'drizzle' }

			case 53:
				return { description: 'Умеренная морось', icon: 'drizzle', scene: 'drizzle' }

			case 55:
				return { description: 'Сильная морось', icon: 'drizzle', scene: 'drizzle' }

			case 56:
				return { description: 'Лёгкий ледяной дождь', icon: 'drizzle', scene: 'drizzle' }

			case 57:
				return { description: 'Сильный ледяной дождь', icon: 'drizzle', scene: 'drizzle' }

			case 61:
				return { description: 'Небольшой дождь', icon: 'rain', scene: 'rain' }

			case 63:
				return { description: 'Умеренный дождь', icon: 'rain', scene: 'rain' }

			case 65:
				return { description: 'Сильный дождь', icon: 'rain', scene: 'rain' }

			case 66:
				return { description: 'Небольшой ледяной дождь', icon: 'rain', scene: 'rain' }

			case 67:
				return { description: 'Сильный ледяной дождь', icon: 'rain', scene: 'rain' }

			case 71:
				return { description: 'Небольшой снегопад', icon: 'snow', scene: 'snow' }

			case 73:
				return { description: 'Умеренный снегопад', icon: 'snow', scene: 'snow' }

			case 75:
				return { description: 'Сильный снегопад', icon: 'snow', scene: 'snow' }

			case 77:
				return { description: 'Снежная крупа', icon: 'snow', scene: 'snow' }

			case 80:
				return { description: 'Небольшой ливень', icon: 'rain', scene: 'rain' }

			case 81:
				return { description: 'Умеренный ливень', icon: 'rain', scene: 'rain' }

			case 82:
				return { description: 'Сильный ливень', icon: 'rain', scene: 'rain' }

			case 85:
				return { description: 'Небольшой снежный ливень', icon: 'snow', scene: 'snow' }

			case 86:
				return { description: 'Сильный снежный ливень', icon: 'snow', scene: 'snow' }

			case 95:
				return { description: 'Гроза', icon: 'thunder', scene: 'thunder' }

			case 96:
				return { description: 'Гроза с небольшим градом', icon: 'thunder', scene: 'thunder' }

			case 99:
				return { description: 'Гроза с сильным градом', icon: 'thunder', scene: 'thunder' }

			default:
				return is_night
					? { description: 'Неизвестно', icon: 'sunny', scene: 'night_clear' }
					: { description: 'Неизвестно', icon: 'sunny', scene: 'sunny' }

		}

	}

}
