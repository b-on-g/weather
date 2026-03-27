namespace $ {

	$mol_style_define( $bog_weather_app, {
		maxWidth: '480px',
		margin: {
			left: 'auto',
			right: 'auto',
		},
		background: {
			color: $mol_theme.back,
		},
		gap: '0.75rem',
		padding: {
			top: 0,
			bottom: '1rem',
			left: '0.5rem',
			right: '0.5rem',
		},

		Header: {
			flex: {
				direction: 'row',
			},
			align: {
				items: 'center',
			},
			padding: {
				top: '0.5rem',
				bottom: '0.5rem',
				left: '0.5rem',
				right: '0.5rem',
			},
			gap: '0.5rem',
		},

		City_name: {
			flex: {
				grow: 1,
			},
			font: {
				size: '1.1rem',
				weight: 600,
			},
		},
	})

}
