namespace $ {

	$mol_style_define( $bog_weather_app_search, {

		Panel: {
			flex: {
				direction: 'column',
			},
			minWidth: '280px',
			maxWidth: '360px',
			padding: {
				top: '0.5rem',
				bottom: '0.5rem',
				left: '0.5rem',
				right: '0.5rem',
			},
			background: {
				color: $mol_theme.back,
			},
			border: {
				radius: $mol_gap.round,
			},
		},

	})

	$mol_style_define( $bog_weather_app_search_row, {
		flex: {
			direction: 'row',
		},
		gap: '0.5rem',
		padding: {
			top: '0.5rem',
			bottom: '0.5rem',
			left: '0.75rem',
			right: '0.75rem',
		},

		Country: {
			color: $mol_theme.shade,
			font: {
				size: '0.85rem',
			},
		},
	})

}
