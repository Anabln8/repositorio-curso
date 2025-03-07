### **Práctica: Introducción a Git - Ejercicios Básicos**

---

### **Objetivo General**
El objetivo de esta práctica es que los estudiantes aprendan a realizar operaciones fundamentales con Git, desde verificar su instalación hasta gestionar ramas y actualizar repositorios. A través de estos ejercicios, se familiarizarán con comandos básicos y conceptos clave del control de versiones.

Cada ejercicio incluye instrucciones detalladas para facilitar la comprensión y ejecución, sin proporcionar las respuestas directamente.

---

### **Ejercicio 1: Verificar la Versión de Git Instalada**
Antes de comenzar a trabajar con Git, es importante asegurarse de que está correctamente instalado en tu sistema.

**Instrucciones Detalladas:**  
1. Abre una terminal o línea de comandos en tu computadora.  
2. Inserta el comando adecuado para verificar qué versión de Git (si hay alguna) está instalada en tu sistema. Este comando te mostrará si Git está disponible y cuál es su versión actual.  

**Preguntas a responder:**  
- ¿Qué comando debes usar para verificar la versión de Git?  
git --version
- Si no tienes Git instalado, ¿qué opciones tienes para instalarlo en tu sistema?
Descargarlo del sitio web e instalarlo en tu ordenador.
---

### **Ejercicio 2: Inicializar Git en la Carpeta Actual**
Para comenzar a usar Git en un proyecto, primero debes inicializar un repositorio en la carpeta donde trabajas.

**Instrucciones Detalladas:**  
1. Navega hasta la carpeta donde deseas trabajar usando el comando `cd`. Por ejemplo, si tu carpeta se llama `mi-proyecto`, asegúrate de estar dentro de ella.  
2. Inserta el comando necesario para inicializar Git en esta carpeta. Esto creará un directorio oculto llamado `.git` donde Git almacenará toda la información del repositorio.  

**Preguntas a responder:**  
- ¿Qué comando usas para inicializar Git en una carpeta?  
git init
- ¿Cómo puedes confirmar que Git ha sido inicializado correctamente en tu carpeta?
git config --list / git status
---

### **Ejercicio 3: Comprobar el Estado de Git y Añadir un Archivo**
Ahora aprenderás a comprobar el estado de tu repositorio y a añadir archivos al área de preparación (staging area).

**Instrucciones Detalladas:**  
1. Crea un archivo llamado `index.html` en tu carpeta de trabajo. Puedes hacerlo directamente desde la terminal o usando un editor de texto.  
2. Usa un comando para comprobar el estado actual de tu repositorio. Esto te mostrará si hay archivos pendientes de seguimiento o cambios no guardados.  
3. Añade el archivo `index.html` al área de preparación. Esto significa que estás preparando este archivo para ser guardado en el próximo commit.  

**Preguntas a responder:**  
- ¿Qué comando usas para comprobar el estado del repositorio?  
git status
- ¿Qué significa añadir un archivo al área de preparación? 
Le dice al commit que cambios deben ser incluidos. 
- ¿Cómo puedes confirmar que el archivo ha sido añadido correctamente?
git status - Se ve si el archivo se ha añadido o hay algo por añadir.

---

### **Ejercicio 4: Preparar Todos los Archivos Cambiados**
En lugar de añadir archivos uno por uno, puedes preparar todos los archivos nuevos, modificados o eliminados con un solo comando abreviado.

**Instrucciones Detalladas:**  
1. Modifica o elimina algunos archivos en tu carpeta de trabajo para simular cambios.  
2. Usa el comando abreviado adecuado para añadir todos los cambios realizados (nuevos, modificados o eliminados) al área de preparación.  

**Preguntas a responder:**  
- ¿Qué comando abreviado puedes usar para añadir todos los cambios al área de preparación?
git add .   
- ¿Cuál es la ventaja de usar este comando en lugar de añadir archivos individualmente?
Que no tienes que ir uno por uno añadiendo archivos, te aseguras de que se añade todo y ahorras tiempo. 
---

### **Ejercicio 5: Confirmar Cambios en el Repositorio**
Una vez que has preparado tus cambios, es hora de confirmarlos (commit) en el repositorio.

**Instrucciones Detalladas:**  
1. Realiza un commit para guardar los cambios preparados en el repositorio. Al hacerlo, incluye el mensaje `"¡Primer lanzamiento!"` para describir lo que has hecho.  
2. Después del commit, verifica el historial de confirmaciones para asegurarte de que tu cambio ha sido registrado correctamente.  

**Preguntas a responder:**  
- ¿Qué comando usas para realizar un commit?  
git commit -m "Mensaje"
- ¿Por qué es importante incluir un mensaje claro en cada commit? 
 Se entienden mejor los cambios que se han hecho, facilita a otras personas la comprensión de los cambios y es mas fácil a la hora de localizar errores, etc. 
- ¿Cómo puedes ver el historial de confirmaciones en Git?
git log
---

### **Ejercicio 6: Crear una Nueva Rama**
Las ramas son útiles para trabajar en nuevas características o correcciones sin afectar la rama principal del proyecto.

**Instrucciones Detalladas:**  
1. Crea una nueva rama llamada `hello-world-images`. Esta rama servirá para trabajar en una nueva funcionalidad relacionada con imágenes.  

**Preguntas a responder:**  
- ¿Qué comando usas para crear una nueva rama en Git?  
git branch + nombre de la rama nueva 
- ¿Qué diferencia hay entre crear una rama y moverte a ella?
Que si no creas la rama no puedes moverte a ella. 
---

### **Ejercicio 7: Listar Ramas Existentes**
Es importante saber qué ramas existen en tu repositorio para evitar confusiones.

**Instrucciones Detalladas:**  
1. Usa un comando para listar todas las ramas existentes en tu repositorio. Esto te mostrará tanto las ramas locales como las remotas (si las hay).  

**Preguntas a responder:**  
- ¿Qué comando usas para listar todas las ramas en Git?  
git branch o  git branch -a 
- ¿Cómo puedes identificar en qué rama estás trabajando actualmente?
Porque cuando haces git branch te resalta la rama en la que te encuentras. 
---

### **Ejercicio 8: Cambiar a la Rama hello-world-images**
Ahora que has creado la rama `hello-world-images`, es momento de cambiar a ella para trabajar en ella.

**Instrucciones Detalladas:**  
1. Usa el comando adecuado para moverte a la rama `hello-world-images`. Esto te permitirá trabajar en esta rama sin afectar la rama principal.  

**Preguntas a responder:**  
- ¿Qué comando usas para cambiar de rama en Git?  
git checkout + nombre de la rama 
- ¿Qué pasa si intentas cambiar a una rama que no existe?
Que se mostrará un error.
---

### **Ejercicio 9: Crear y Cambiar a una Nueva Rama**
A veces necesitas crear una nueva rama y cambiar a ella en un solo paso.

**Instrucciones Detalladas:**  
1. Crea una nueva rama llamada `hello-you` y cambia a ella inmediatamente. Este proceso puede hacerse con un solo comando.  

**Preguntas a responder:**  
- ¿Qué comando puedes usar para crear y cambiar a una nueva rama en un solo paso?  
git checkout -b  + nombre de la rama 
- ¿Cuál es la ventaja de usar este comando en lugar de hacerlo en dos pasos separados?
Que reduce el numero de comandos necesarios y evita equivocaciones. 
---

### **Ejercicio 10: Actualizar la Rama Actual desde su Origen**
Cuando trabajas en una rama, es importante mantenerla actualizada con los cambios realizados en la rama principal.

**Instrucciones Detalladas:**  
1. Usa un comando para actualizar la rama actual desde su origen. Esto fusionará los cambios realizados en la rama principal con los tuyos.  

**Preguntas a responder:**  
- ¿Qué comando usas para actualizar una rama desde su origen? 
git pull  
- ¿Qué pasa si hay conflictos al actualizar la rama? ¿Cómo puedes resolverlos?
En mi caso en visual studio, comparando los archivos de las dos ramas y seleccionando el cambio adecuado. 
Después de comitea el cambio y se hace push para completar el merge. 
