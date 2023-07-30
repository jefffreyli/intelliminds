import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		primary: "#6C7DFE",
		gradient: "linear-gradient(135deg, #6C7DFE 0%, #A688EC 100%)",
		background: "white",
		secondary: "rgb(0 0 0 / 40%)",
		secondaryHover: "rgb(0 0 0 / 20%)",
	},
	styles: {
		global: () => ({
			body: {
				lineHeight: "base",
				padding: 0,
				margin: 0,
				background: "background",
				textAlign: "left",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
            Link: {
                textDecoration: "none",
            },
			"h1, h2, h3, h4, h5, h6": {
			},
			".rounded": {
				borderTopRadius: "0.75rem",
			},
			".circle": {
				borderRadius: "50%",
			},
			".required": {
				color: "red",
			},
            "a:hover": {
                textDecoration: "none",
            },
			"&::-webkit-scrollbar": {
				width: ".75em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "background",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "primary",
			},
		}),
	},
});

export default theme;