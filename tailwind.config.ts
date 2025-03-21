import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Nature-inspired palette
				leaf: {
					50: '#f0f9f1',
					100: '#dcf1df',
					200: '#bde4c2',
					300: '#92d19a',
					400: '#5eb86a',
					500: '#429f4f',
					600: '#318d3d',
					700: '#276b2f',
					800: '#235528',
					900: '#1d4622',
				},
				earth: {
					50: '#f9f7f4',
					100: '#f0ebe4',
					200: '#e1d6c9',
					300: '#cdb9a4',
					400: '#b5977c',
					500: '#a17f63',
					600: '#8c6853',
					700: '#755647',
					800: '#62483c',
					900: '#523e35',
				},
				sky: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#b9e6fe',
					300: '#7cd4fd',
					400: '#36bffa',
					500: '#0da2e7',
					600: '#0284c7',
					700: '#036ba1',
					800: '#075985',
					900: '#0c4a6e',
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['"SF Pro Display"', 'Inter', 'sans-serif'],
				serif: ['"New York"', 'Georgia', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'image-reveal': {
					'0%': { 
						opacity: '0',
						transform: 'scale(1.05)',
						filter: 'blur(10px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)',
						filter: 'blur(0)'
					}
				},
				'count-up': {
					'0%': { 
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'image-reveal': 'image-reveal 1.2s ease-out',
				'count-up': 'count-up 0.5s ease-out forwards'
			},
			boxShadow: {
				'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
				'elegant': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
				'inner-glow': 'inset 0 1px 4px 0 rgba(255, 255, 255, 0.3)',
			},
			transitionTimingFunction: {
				'apple': 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'inherit',
						a: {
							color: 'inherit',
							textDecoration: 'none',
							fontWeight: '500',
						},
						strong: {
							color: 'inherit',
						},
						h1: {
							color: 'inherit',
						},
						h2: {
							color: 'inherit',
						},
						h3: {
							color: 'inherit',
						},
						h4: {
							color: 'inherit',
						},
						code: {
							color: 'inherit',
						},
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography")
	],
} satisfies Config;
