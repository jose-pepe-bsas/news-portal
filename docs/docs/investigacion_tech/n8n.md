# n8n

  En el diagrama llamado n8n_1 Se visualiza una manera para que las personas puedan enviar sus denuncias a una cuenta de gmail y que se extraiga automáticamente el contenido del correo y se agregue a una hoja de calculo de google sheet.

Esto elimina la necesidad de estar pendiente de revisar el correo electrónico y puede extenderse luego para que en vez de enviar la información a una hoja de google sheet, la misma sea enviada a una tabla de base de datos de strapi.


Algo que se debe tener en cuenta para poder utilizar este flujo es que se deben cambiar algunas configuraciones:


Se debe crear una cuenta propia de google para la plataforma.

Se debe ingresar a https://console.cloud.google.com/ crear un acceso oauth2 de aplicación web

Ese acceso tiene que tener las apis habilitadas de Drive, Sheet y Gmail.

Se debe crear una credencial de oauth en n8n que utilice la api de google para que funcione.
