# Instalacion de tailwindcss
npm i -D tailwindcss postcss autoprefixer
# Crear archivo de configuracion de tailwindcss
npx tailwindcss init -p
# Instalacion de axios
npm i axios
# Funciones en pinia 
Es recomendable que las funciones que se usen en los actions de pinia sean funciones puras, es decir, que no modifiquen el estado de la aplicacion, para esto se puede usar el operador spread para crear un nuevo objeto con las propiedades del objeto anterior y las nuevas propiedades que se quieran agregar
