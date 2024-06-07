
/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'green-85bc22': '#EAEBF0',
        'dark-bg': '#222b3c',
        'hero-bg': '#F8F9FB',
        'back-bg': '#F5FAFF',
        'yellow-bg': '#fece51',
        'colo': ' #2C3444',
        'bg-black': '#151B28',
        'bg-form': ' #1C2534',
        
       
        
        


        
        
       
       
      },
      colors: {
        'blue-primary': '#fece51',
        'black-primary': '#272D37',
        'gray-primary': '#5F6D7E',
        'yellow-primary': '#fece51',
        'blackk-primary': '#272D37',
        



        

        

        
      },

      
      
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    
  ],
}