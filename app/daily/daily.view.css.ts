namespace $ {

	$mol_style_define( $bog_weather_app_daily, {
		gap: '2px',
	})

	$mol_style_define( $bog_weather_app_daily_row, {

		Summary: {
			flex: { direction: 'row' },
			align: { items: 'center' },
			gap: '0.5rem',
			padding: {
				top: '0.5rem',
				bottom: '0.5rem',
				left: '0.75rem',
				right: '0.75rem',
			},
		},

		Day_name: {
			minWidth: '4rem',
			font: { weight: 500 },
		},

		Icon: {
			width: '24px',
			height: '24px',
		},

		Temp_min: {
			color: $mol_theme.shade,
			minWidth: '2rem',
			textAlign: 'right',
		},

		Bar: {
			flex: { grow: 1 },
			height: '4px',
			borderRadius: '2px',
			background: { color: $mol_theme.focus },
		},

		Temp_max: {
			font: { weight: 600 },
			minWidth: '2rem',
		},

		Details: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gap: '0.5rem',
			padding: {
				top: '0.5rem',
				bottom: '0.75rem',
				left: '1.5rem',
				right: '1rem',
			},
			font: { size: '0.85rem' },
			color: $mol_theme.shade,
		},
	})

}
