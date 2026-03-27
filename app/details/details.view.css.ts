namespace $ {

	$mol_style_define( $bog_weather_app_details, {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '0.75rem',
		padding: {
			top: '1rem',
			bottom: '1rem',
			left: '1rem',
			right: '1rem',
		},
	})

	$mol_style_define( $bog_weather_app_details_card, {
		flex: {
			direction: 'column',
		},
		padding: {
			top: '0.75rem',
			bottom: '0.75rem',
			left: '1rem',
			right: '1rem',
		},
		background: {
			color: $mol_theme.card,
		},
		border: {
			radius: $mol_gap.round,
		},
		gap: '0.25rem',

		Title: {
			font: {
				size: '0.75rem',
				weight: 500,
			},
			color: $mol_theme.shade,
		},

		Value: {
			font: {
				size: '1.15rem',
				weight: 600,
			},
		},
	})

}
