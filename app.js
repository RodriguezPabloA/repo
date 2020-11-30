/*clase 1 de git del bluesweb*/
/*https://bluuweb.github.io/tutorial-github/guia/fundamentos.html#viajes-a-traves-de-los-commit*/
/*

git version  --> para ver la version de git
git help --> para ver la lista de todos los comandos de git
git init --> iniciar un nuevo repositorio, solo se usa una vez  por repositorio, de forma oculta hay una carpeta 
             donde se iran respaldando todos nuestros archivos, nuestros arhivos tendran un color verde lo que
             significa que ninguno de nuestros archivos tiene seguimiento.

git status -s --> sirve para ver que archivos no tienen seguimiento o que fueron modificados

git add index.html --> Agregar todos los archivos para que esté pendiente de los cambios, en este caso solo 
                       le pedimos que agrege al index.html, al ver ota vez el status vemos que el index paso a verde
                       significa que se agrego al area temporal

git commit -m "agregamos el index.html" -->Crear commit (fotografía del proyecto en ese momento),crea una copia

git add . --> hacer un seguimiento e todos los archivos añadidos en el directorio y se envian al area temporal seguido 
              de eso podemos mandarlo al repositorio con el git commit -m "mensaje", siempre hacer esto cuando se hace algun cambio
              hace un barrido de todos los archivos y verifica si detecto algun cambio

cuano modificamos o añadimos algo a un archivo, este tomara un color naranja, eso significa que se ha modificado

git log --oneline  --> Muestra en una línea los commit realizados, la primera palabra que aparece es un identificador
                       que nos sirve para poder viajar a travez de los commit y lo del final es el mensaje que le asignamos
                       
git reset --hard f52f3da --> Viajamos al commit en específico f52f3da que es sacado del git log --oneline y eliminamos los cambios futuros
                             al hacer git log --oneline vemos que el commit posicionado head master es el que le aplicamos en el reset, eliminando
                             el ultimo commit como hemos deseado que se ejecute

recordar simpre hacer los commit ya que estos nos permiten viajar en el tiempo, esto es lo mas poderosode git 
una vez tengamos el control de todos los viajes y versiones podemos respaldar todo el repositorio en la nube, vamos a github
recordar que github no es git solo es una empresa que esta conectada a git para subir los proyectos

para añadir un repositorio: 
- crear nuevo repositorio/ ponerle un nombre al repositorio sin espacios/ opcional podemos agregar
una descripcion o hacerlo publico o privado/ crear repositorio/ nos aparece una serie de codigos
en la parte de  : …or push an existing repository from the command line
copiamos la primera linea que es : git remote add origin https://github.com/RodriguezPabloA/youtube-git-ejemplo.git
lo pegamos en la terminal / enter / con eso le indicamos a git que ya esta trabajando de forma remota/
creamos una rama de nombre main: git branch -M main/
finalmente le hacemos el push : git push -u origin main/nos pedira usuario y contraseña para confirmar

*/
console.log('hola me falto este mensaje');