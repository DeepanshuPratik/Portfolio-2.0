import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",

    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px"
    },
	fontFamily:{
		primary: "var(--font-jetbrainsMono)"
	},
  	extend: {
		colors: {
			primary: 'var(--primary)',
			'primary-foreground': 'var(--primary-foreground)',
			secondary: 'var(--secondary)',
			'secondary-foreground': 'var(--secondary-foreground)',
			muted: 'var(--muted)',
			'muted-foreground': 'var(--muted-foreground)',
			accent: 'var(--accent)',
			'accent-hover': 'var(--accent-hover)',
			'accent-foreground': 'var(--accent-foreground)',
			destructive: 'var(--destructive)',
			'destructive-foreground': 'var(--destructive-foreground)',
			border: 'var(--border)',
			input: 'var(--input)',
			ring: 'var(--ring)',
			chart1: 'var(--chart-1)',
			chart2: 'var(--chart-2)',
			chart3: 'var(--chart-3)',
			chart4: 'var(--chart-4)',
			chart5: 'var(--chart-5)',
		  },
		  borderRadius: {
			DEFAULT: 'var(--radius)',
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
