module.exports = {
  purge: {
    mode:'layers',
    content:['./public/**/*.html/'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '348':'348px',
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '40%': '40%',
        '80%':'80%',
        '87%':'87%',
        '96%':'96%',
        '90%':'90%',
      },
      
      colors:{
        cwc:{
        red: '#E84977',
        blue:'#00A4E4',
        gray:'#797979',
        glite:'#ff0000',
        glight2:'#E5E5E5',
        glight:'#6F6F6F',
        gdark:'#323232',
        gelight:'#C4C4C4',
        gprgs:'#F8F8F8',  
        gprgs2:'#fafafa',  
        green:'#68C358',  
        ltblk:'#2e2e2e',
        },
        },
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '1': '1px',
          '2': '2px',
         '3': '3px',
          '4': '4px',
         '6': '6px',
         '8': '8px',
         '10':'20px',
        },
        borderRadius: {
         'large': '4.5rem',
        },
        fontSize: {
          '22': '22px',
          '10': '10px',
        },
        letterSpacing: {
          'large': '0.24em',
        },
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.200'),
          '&:focus': {
            backgroundColor: theme('colors.cwc-gray'),
          }
        },
        select: {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.default'),          
          
        },
        checkbox: {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          '&:focus': {
            backgroundColor: theme('colors.cwc-blue'),
            colors: theme('colors.cwc-blue'),
          }
        },
      },
      dark: {
        input: {
          backgroundColor: theme('colors.gray.900'),
        },
        select: {
          backgroundColor: theme('colors.gray.600'),
        },
        checkbox: {
          icon: iconColor => `<svg fill="${iconColor}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>`,
          iconColor: theme('colors.gray.800'),
          '&:hover': {
            iconColor: theme('colors.gray.700'),
          },
        },
      },
    }),
    backgroundImage: ({
      'hero-pattern': "url('/public/imgs/IPhone_11_Pro_Max.png')",
      
     })
  },
 
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
