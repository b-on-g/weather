namespace $ {

	$mol_style_define( $bog_weather_app_hourly_view, {
		flex: {
			direction: 'column',
		},

		Tabs: {
			justify: {
				content: 'center',
			},
		},

		Row: {
			flex: {
				direction: 'row',
				wrap: 'nowrap',
			},
			gap: '0.25rem',
			overflow: {
				x: 'auto',
				y: 'hidden',
			},
		},
	})

	$mol_style_define( $bog_weather_app_hourly_item, {
		flex: {
			direction: 'column',
			shrink: 0,
		},
		align: {
			items: 'center',
		},
		padding: {
			top: '0.5rem',
			bottom: '0.5rem',
			left: '0.75rem',
			right: '0.75rem',
		},
		gap: '0.25rem',

		Icon: {
			width: '24px',
			height: '24px',
		},

		Time: {
			font: { size: '0.75rem' },
			color: $mol_theme.shade,
		},

		Temp: {
			font: { size: '1rem', weight: 600 },
		},

		Secondary: {
			font: { size: '0.75rem' },
			color: $mol_theme.shade,
		},
	})

}
