// Todo lo que compra Rubén para el despacho, con el porqué de cada cosa.
// Precios consultados el 17-18 de octubre de 2026 en la web de cada tienda.

export interface Producto {
  id: string;
  cat: string;
  nombre: string;
  /** Precio total de la línea (ya multiplicado por las unidades). */
  precio: number;
  /** Texto del precio cuando hace falta matizarlo (p. ej. "169 € × 2" o "~20 €"). */
  precioTexto?: string;
  aprox?: boolean;
  tienda: string;
  url: string;
  otra?: { tienda: string; url: string };
  imagen?: string;
  /** La imagen es una foto del render (se recorta a sangre en vez de encajarla). */
  foto?: boolean;
  porque: string;
  datos: string[];
  aviso?: string;
}

export const compra: Producto[] = [
  {
    id: 'e5',
    cat: 'La mesa',
    nombre: 'Estructura elevable FlexiSpot E5',
    precio: 179.99,
    tienda: 'FlexiSpot',
    url: 'https://www.flexispot.es/escritorio-elevable-E5',
    imagen: 'productos/e5-negra.webp',
    foto: true,
    porque:
      'Doble motor: sube y baja con las tres pantallas encima sin temblar. Llega a 125 cm, así que el día que meta una cinta de andar debajo podré trabajar caminando.',
    datos: ['Doble motor', 'Hasta 100 kg', '60-125 cm', 'Tableros de 120 a 180 cm'],
    aviso: 'Está al −40 % y la oferta acaba hacia el 26 de octubre.',
  },
  {
    id: 'tablero',
    cat: 'La mesa',
    nombre: 'Tablero FlexiSpot Smart Value 160 × 80, negro',
    precio: 209.99,
    tienda: 'FlexiSpot',
    url: 'https://www.flexispot.es/serie-smart-value-de-tableros.html',
    imagen: 'productos/tablero-negro.webp',
    foto: true,
    porque:
      'Lo medí en la pared de la tele: con 160 cm se abren el armario y la puerta del balcón sin rozar. Las dos pantallas de 27" ocupan unos 122 cm, así que sobra sitio. Y negro, como el logo.',
    datos: ['160 × 80 × 2,5 cm', 'Negro', 'Pretaladrado para la E5', '25 mm, lo que piden los brazos'],
    aviso: 'En la web: "Empieza a personalizar", 160x80 y color negro.',
  },
  {
    id: 'lenovo',
    cat: 'Las pantallas',
    nombre: '2 × Lenovo L27h-4A de 27"',
    precio: 338,
    precioTexto: '169 € × 2',
    tienda: 'MediaMarkt',
    url: 'https://www.mediamarkt.es/es/product/_monitor-lenovo-l27h-4a-27-qhd-100-hz-6-ms-ips-1x-usb-c-4-usb-a-2x-hdmir-21-tmds-1x-dp-14-altavoces-incluidos-gris-1605623.html',
    otra: { tienda: 'Amazon', url: 'https://www.amazon.es/dp/B0DF84JPCW' },
    imagen: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_161574306/fee_786_587_png',
    porque:
      'Dos iguales, en 2K y con marcos de 2 mm: quedan pegadas como si fueran una sola. Llevan USB-C de 75 W, así que con un solo cable al Mac tengo imagen y puertos USB.',
    datos: ['27" QHD 2560 × 1440', '100 Hz', 'USB-C 75 W', 'VESA'],
  },
  {
    id: 'arctic',
    cat: 'Los brazos',
    nombre: 'Brazo ARCTIC X1-3D (para el MSI)',
    precio: 38.1,
    tienda: 'Amazon',
    url: 'https://www.amazon.es/dp/B097C96R6M',
    imagen: 'https://m.media-amazon.com/images/I/41NfLXe0-eL._AC_SL1000_.jpg',
    porque:
      'Sube el MSI de 40" por encima de las otras dos. Aguanta ultrapanorámicos de hasta 43" y 10 kg, y el MSI pesa 8: va con margen. Es de gas y lleva los cables por dentro.',
    datos: ['Hasta 43" y 10 kg', 'De gas', 'Tableros de 2 a 5,5 cm'],
  },
  {
    id: 'huanuo',
    cat: 'Los brazos',
    nombre: 'Brazo doble HUANUO FlowLift Pro',
    precio: 35.99,
    tienda: 'Amazon',
    url: 'https://www.amazon.es/dp/B0GK6DT5SF',
    imagen: 'https://m.media-amazon.com/images/I/61EN2iSegjL._AC_SL1500_.jpg',
    porque:
      'Para las dos de 27", una al lado de la otra, justo debajo del MSI. Aguanta 9 kg por brazo para pantallas de unos 4: va sobrado y es barato.',
    datos: ['2 brazos', '9 kg por brazo', 'Altura e inclinación'],
  },
  {
    id: 'mac',
    cat: 'El cerebro',
    nombre: 'Mac mini M6 · 24 GB · 512 GB',
    precio: 1509,
    tienda: 'Apple',
    url: 'https://www.apple.com/es/shop/buy-mac/mac-mini/chip-m6-cpu-de-12-n%C3%BAcleos-gpu-de-12-n%C3%BAcleos-24-gb-de-memoria-512gb-de-capacidad',
    imagen:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-mini-chip-unselect-202608-gallery-1?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1785998455498',
    porque:
      'Mi ordenador de trabajo y el servidor de Hermes Agent, encendido día y noche. La IA piensa en la nube con mi suscripción de ChatGPT, así que no me hace falta pagar 1.170 € más por un M5 Pro de 48 GB. Con 24 GB y 512 GB me quito los dos problemas del básico, que trae poca memoria y poco disco. Y conecta las tres pantallas sin dock.',
    datos: ['CPU y GPU de 12 núcleos', '24 GB de memoria', '512 GB', 'Ethernet de 2,5 Gb'],
    aviso: 'Si en 3-4 años los modelos de IA locales son buenos de verdad, lo vendo y me compro uno con mucha más memoria.',
  },
  {
    id: 'plc',
    cat: 'Internet',
    nombre: 'PLC TP-Link TL-PA7017P KIT',
    precio: 64.99,
    tienda: 'MediaMarkt',
    url: 'https://www.mediamarkt.es/es/product/_adaptador-enchufe-tp-link-av1000-2-enchufes-rj-45-1000-mbit-s-blanco-1481855.html',
    otra: {
      tienda: 'PcComponentes',
      url: 'https://www.pccomponentes.com/tp-link-tl-pa7017p-kit-plc-powerline-red-electrica-av1000-gigabit-con-enchufe-incorporado',
    },
    imagen: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88876661/fee_786_587_png',
    porque:
      'En la pared de la mesa no hay toma de internet, y un cable por el suelo tendría que cruzar la puerta o el balcón. Con esto el internet va por los enchufes de la casa: un adaptador junto al router y otro en mi cuarto. Lleva enchufe incorporado, así no pierdo el de la pared.',
    datos: ['AV1000 Gigabit', 'Con enchufe incorporado', 'Se monta en 10 minutos'],
    aviso: 'Primero pruebo el Wi-Fi en el cuarto: si va bien, no hace falta. El de Amazon es la versión francesa: no.',
  },
  {
    id: 'cat6',
    cat: 'Cables',
    nombre: 'Cable de red Cat6 de 3 m',
    precio: 8,
    precioTexto: '~8 €',
    aprox: true,
    tienda: 'Amazon',
    url: 'https://www.amazon.es/s?k=cable+red+cat6+3m',
    porque: 'Del PLC al Mac, con holgura para cuando suba la mesa.',
    datos: ['Cat6', '3 m'],
  },
  {
    id: 'dp',
    cat: 'Cables',
    nombre: 'Cable USB-C a DisplayPort 1.4 de 2 m',
    precio: 20,
    precioTexto: '~15-25 €',
    aprox: true,
    tienda: 'Amazon',
    url: 'https://www.amazon.es/s?k=cable+usb-c+displayport+1.4+2m',
    porque: 'Para que el MSI vaya a 155 Hz. Por HDMI se queda en 100 Hz.',
    datos: ['DisplayPort 1.4', '2 m'],
  },
];

export const opcionales: Producto[] = [
  {
    id: 'koppla',
    cat: 'Solo si hace falta',
    nombre: 'Regleta IKEA KOPPLA, 6 enchufes',
    precio: 14.99,
    tienda: 'IKEA',
    url: 'https://www.ikea.com/es/es/p/koppla-regleta-6-enchufes-con-interruptor-blanco-00412015/',
    imagen: 'https://www.ikea.com/es/es/images/products/koppla-regleta-6-enchufes-con-interruptor-blanco__0625243_pe692151_s5.jpg',
    porque: 'Ya tengo un ladrón. Solo la compro si el mío tiene menos de 6 enchufes: Mac, MSI, las dos Lenovo, el motor de la mesa y una lámpara.',
    datos: ['6 enchufes', 'Interruptor', '1,5 m'],
  },
  {
    id: 'signum',
    cat: 'Para más adelante',
    nombre: 'Bandeja de cables IKEA SIGNUM',
    precio: 19.99,
    tienda: 'IKEA',
    url: 'https://www.ikea.com/es/es/p/signum-organizador-cables-horizontal-gris-plata-30200253/',
    porque: 'Para esconder el ladrón y los cables debajo de la mesa. Atornillada con tornillos de menos de 20 mm, que el tablero mide 25.',
    datos: ['70 cm', 'Bajo la mesa'],
  },
  {
    id: 'ssd',
    cat: 'Para más adelante',
    nombre: 'SSD externo de 1-2 TB',
    precio: 125,
    precioTexto: '~100-150 €',
    aprox: true,
    tienda: 'Amazon',
    url: 'https://www.amazon.es/s?k=ssd+externo+2tb+usb-c',
    porque: 'Para archivar los vídeos que edite Hermes: 512 GB se llenan rápido.',
    datos: ['1-2 TB', 'USB-C'],
  },
];

export const yaTengo: { nombre: string; nota: string }[] = [
  { nombre: 'MSI MAG 401QR 40"', nota: 'Ultrapanorámico 3440 × 1440, arriba del todo' },
  { nombre: 'Teclado Logitech Signature', nota: 'Con reposamuñecas' },
  { nombre: 'Magic Trackpad', nota: 'A la derecha del teclado' },
  { nombre: 'Ratón vertical TeckNet', nota: 'Para la muñeca' },
  { nombre: 'Barra de luz', nota: 'Encima del MSI' },
  { nombre: 'Dock Baseus 11 en 1', nota: 'Solo para USB, red y audio' },
  { nombre: 'Ladrón de enchufes', nota: 'Enchufado al PLC, no a la pared' },
  { nombre: 'Aro de luz', nota: 'Para grabar los vídeos de YouTube' },
  { nombre: 'MacBook Pro M1', nota: 'El mando a distancia desde el salón' },
];

// Lo ya decidido. La silla, la cámara y el micro se eligen en sus secciones y se suman aparte.
export const total = compra.reduce((s, p) => s + p.precio, 0);
