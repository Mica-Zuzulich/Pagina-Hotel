# HotelDeLaSierra
Este trabajo es un TP Especial de la Materia Web 1 de la Carrera TUDAI de la UNICEN, fue creado por los alumnos Guillermo Castiglioni y Micaela Zuzulich, ambos de la comisión C. El mismo trata de la página web de un hotel donde debemos demostrar una serie de habilidades desarrolladas durante el aprendizaje.

De lo cual los requerimientos fueron los siguientes:

- Consigna
    
    Se debe desarrollar un sitio web con una temática a libre elección con las tecnologías vistas en la asignatura:

    - El sitio debe ser Responsive. Diseñado e implementado como “mobile first” es requisito indispensable. 
    - Como mínimo se debe soportar celular y escritorio.
    - El menú debe ser responsive. En la vista de celular debe estar oculto y poder desplegarse o similar.
    - La tabla es tolerable que no sea responsive.
    - Se puede usar Flexbox o GRID, o ambos.
    - Se debe utilizar HTML semántica
    - Se debe crear un formulario de contacto con un captcha para comprobar que el usuario es un humano.
    - Se debe incluir un screenshot (captura de pantalla) del sitio web en la raíz del sitio.

- Detalle de Requerimientos 

    El sitio web debe tener como mínimo:
    
    - tres archivos HTML (3 páginas contando el Home)
    - una barra o menú de navegación, que permita navegar entre las páginas del sitio
    - una lista ordenada o desordenada (diferente a la de navegación)
    - una tabla
    - un formulario de contacto
    - una imágen
    - validación por Javascript del formulario con un captcha* (ver en Consideraciones)

- Opcionales

    - Los datos a introducir en el captcha en Javascript se generan al azar como texto o como imágenes (Item opcional)
    - Modo Oscuro / Modo Claro, debe existir la posibilidad de cambiar los colores del sitio para ver con distinto color de fondo/letra. (Item opcional). NOTA: El cambio debe aplicar a la vista sobre la página que se está viendo, no es necesario que persista cuando se cambia de página.

- Consideraciones Importantes

    - Identidad visual unificada: Al navegar  el sitio web el usuario debe percibir que siempre se encuentra en el mismo sitio. Utilizar una misma línea gráfica, en general mismo header, etc.
    - Tamaño del sitio total comprimido menor a 5Mb: por restricciones de conectividad y de Moodle el sitio debe ser lo más liviano posible, esto se logra usando imágenes que no sean demasiado pesadas y no subiendo videos.
    - *Validación Javascript del formulario: El formulario debe tener un campo tipo captcha para comprobar que el usuario es un humano. Para esto la página debe mostrar un texto o número (o algo similar) y pedir introducirlo en el formulario. En caso que no coincida con el valor mostrado por pantalla se debe rechazar mostrando un mensaje que no existe coincidencia.
    - El formulario no debe enviarse a ningún lugar
    - El resultado del captcha (correcto/incorrecto) debe verse en el sitio web (no usar alert)
    - NO es usar el captcha de Google o Recaptcha, es simularlo de una forma sencilla.

- No está permitido usar:

    - Bootstrap, Tailwind u otro framework responsive
    - Frameworks o librerias JS.
