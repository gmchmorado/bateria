# Batería Electrónica

## Requerimientos

Crear un "pad" de nueve elementos, que reproducirán un sonido asociado al interactuar con el mismo.

Cada elemento tendrá como referencia una letra del teclado (Q, W, E, A, S, D, Z, X, C).

La iteracción podrá ser mediante clic o presionar la tecla asociada correspondiente.

Cada "pad" (o tecla) tendrá un archivo de sonido asociado.

El nombre del archivo identificará al sonido, estará asociado al "pad" y se mostrará el nombre del sonido cuando se interactue con el mismo.

## Elementos a evaluar (historias de usuario)

- Debe contener un elemento con id **drum-machine**.
- Dentro del elemento **drum-machine** deberá existir un elemento con id **display**.
- Dentro del elemento **drum-machine** deberán existir 9 elementos con la clase **drum-pad**.
  - Cada elemento deberá tener un identificador único (id).
  - Este identificador deberá describir al clip de audio.
  - Tendrá un texto que corresponda a la tecla que lo identifica.
- Cada elemento **drum-pad** contendrá un elemento (hijo) HTML5 `<audio></audio>`.
  - Este elemento tendrá una propiedad *src* referenciada al archivo de audio.
  - Deberá tener un id que corresponda al texto del elemento padre (letra asignada).
- Al interactuar con los elementos **drum-pad** se debe activar el sonido del elemento hijo.
  - Una iteracción será mediante dar clic en cada elemento.
  - Otra interacción será mediante la opresión de la tecla con la letra asociada.
  - Se deberá mostrar el texto del clip de sonido asociado.

## Lógica de diseño

La unidad básica será un componenete que correspondera a la clase **drum-pad**.
- En este componenete se tendrán los métodos para reconocer las acciones de recibir clic o precionar una tecla.
- A partir de la acción recibida deberá:
  - Reproducir el clip de audio.
  - Mostrar en el elemento con id **display**, el texto correspondiente al clip de audio.

## Fuente de archivos de sonido

Los clip de audio serán obtenidos de la suguiente URL:

> https://s3.amazonaws.com/freecodecamp/drums/

Los nombres de los clips son los siguientes

- Heater_1.mp3
- Heater_2.mp3
- Heater_3.mp3
- Heater_4_1.mp3
- Heater_6.mp3
- Dsc_Oh.mp3
- Kick_n_Hat.mp3
- RP4_KICK_1.mp3
- Cev_H2.mp3

Para el manejo de los archivos de sonido utilizaré una variable para almacenar la ruta principal.

Para hacer la referencia se concatenará la variable con el nombre del archivo y la extensión (.mp3).