# tpo
Codo a codo - Trabajo Práctico Obligatorio

Descripción del desarrollo:

Se inicio sobre un proyecto genérico con el nombre "tpo". Se crearon la estructura, las 4 páginas y los estilos.
Luego, definido el tema del proyecto: "Tienda para mascotas", se reutilizó el código anterior modificando estilos, nombres, etc; también se fueron agregando funcionalidas y otras faltantes (db, api, etc.).

Descripción del funcionamiento:

Desde el footer de todas las páginas se puede acceder a las redes del emprendimiento.

Página de Inicio: tiene un banner de promoción, en la que el usuario se puede inscribir para obtener el descuento; el estado del tiempo en Paraná (Entre Ríos) al momento de cargar la página; experiencia de usuarios y una galería de "amigos".

Página Productos: muestra los productos de una base de datos (archivo json) indicando las diferentes líneas y los productos sin stock, las imágenes se agrandan al pasar el mouse sobre elllas.

Página Conocenos: Tiene un breve detalle del emprendimiento; los datos de las propietarias (haciendo clik en boton "Contacto" se muestran más datos y con el mouse sobre el QR de WS se agranda para mejorar el scaneo si fuera necesario); y la ubicación de los dos locales.

Página Contacto: tiene un formulario para enviar un mail y otros medios para comunicarse. Tiene la ubicación del local principal.

Descripción del "cumplimiento de los requisitos del TPO":

1) Poseer al menos 4 páginas html: Inicio / Productos / Conocenos / Contacto;
2) Se utilizaron etiquetas semánticas en todas las páginas;
3) a. Tiene un formulario para "Registrarse" a la PROMO, con validación con JS y los datos persisten en SheetDB; b. Tiene un formulario de contacto que envía un mail a través de la api FormSubmit;
4) Se utilizan íconos de FontAwesome y fuentes de Google Fonts (y locales como alternativa);
5) Todas las páginas son responsive, tienen diferentes puntos de cortes para adaptarse a distintos dispositivos;
6) Incorpora animaciones, transformaciones y transiciones (Ejemplos: linea superior con telefono y domiclios; Pág. Inicio: banner de promociones el % rota y un texto se agranda y achica; y el slide que muestra amigos);
7) La pág. Inicio tiene maquetaciones con Flex-Box y Grid, tambien se utilizaron en otras.
8) Se utilizaron las api: SheetDB (datos), OpenWeather (el clima), FormSubmit (para enviar mail) y archivos json;
9) No se utilizó ningun framework;
10) Se subio a GitHub Pages y Netlify; y
11) Se contemplaron aspectos de diseño, considerando el "Seminario de Diseño Web" indicado, respetando el logo y colores utilizados por la tienda.


