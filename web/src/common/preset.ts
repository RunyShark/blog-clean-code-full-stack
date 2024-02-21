module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        'backdrop-blur-sm': '4px',
        'backdrop-blur-md': '8px',
        'backdrop-blur-lg': '12px',
        'backdrop-blur-xl': '20px',
      },
      boxShadow: {
        'shadow-xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'shadow-sm':
          '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        'shadow-md':
          '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
        'shadow-lg':
          '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        'shadow-xl':
          ' 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        'shadow-2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        'shadow-3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
        'ring-brand': '0px 0px 0px 4px rgba(158, 119, 237, 0.24)',
        'ring-gray': '0px 0px 0px 4px rgba(152, 162, 179, 0.14)',
        'ring-gray-secondary': '0px 0px 0px 4px rgba(152, 162, 179, 0.20)',
        'ring-error': '0px 0px 0px 4px rgba(240, 68, 56, 0.24)',
        'ring-brand-shadow-xs':
          '0px 0px 0px 4px rgba(158, 119, 237, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'ring-brand-shadow-sm':
          '0px 0px 0px 4px rgba(158, 119, 237, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        'ring-gray-shadow-xs':
          '0px 0px 0px 4px rgba(152, 162, 179, 0.14), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'ring-gray-shadow-sm':
          '0px 0px 0px 4px rgba(152, 162, 179, 0.14), 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        'ring-error-shadow-xs':
          ' 0px 0px 0px 4px rgba(240, 68, 56, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
      width: {
        'width-xxs': '320px',
        'width-xs': '384px',
        'width-sm': '480px',
        'width-md': '560px',
        'width-lg': '640px',
        'width-xl': '768px',
        'width-2xl': '1024px',
        'width-3xl': '1280px',
        'width-4xl': '1440px',
        'width-5xl': '1600px',
        'width-6xl': '1920px',
      },
      borderRadius: {
        'radius-none': '0',
        'radius-xxs': '2px',
        'radius-xs': '4px',
        'radius-sm': '6px',
        'radius-md': '8px',
        'radius-lg': '10px',
        'radius-xl': '12px',
        'radius-2xl': '16px',
        'radius-3xl': '20px',
        'radius-4xl': '24px',
        'radius-full': '100%',
      },
      colors: {
        tertiary: {
          100: '#f0fcf9',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276748',
          900: '#22543d',
        },
        error: {
          100: '#fff5f5',
          200: '#fed7d7',
          300: '#feb2b2',
          400: '#fc8181',
          500: '#f56565',
          600: '#e53e3e',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a',
        },
        warning: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        success: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276748',
          900: '#22543d',
        },
      },
    },
  },
};
