var courseData = { units: [
{
id:1, emoji:'🍽️',
title:'Menu Descriptions & Specials',
topic:'Describing dishes, explaining ingredients, and making recommendations at A2 level',
vocabulary:[
{word:'Ingredient', ipa:'ɪnˈɡriːdiənt', def:'One part of a recipe or dish', def_es:'ingrediente', example:'The main ingredient is fresh salmon.'},
{word:'Season', ipa:'ˈsiːzən', def:'To add salt, pepper, or spices to food', def_es:'condimentar / sazonar', example:'We season the steak with herbs.'},
{word:'Gluten-free', ipa:'ˈɡluːtən friː', def:'Food with no wheat or gluten', def_es:'sin gluten', example:'Do you have any gluten-free options?'},
{word:'Vegan', ipa:'ˈviːɡən', def:'No animal products at all', def_es:'vegano', example:'Our vegan menu has three options.'},
{word:'Side dish', ipa:'saɪd dɪʃ', def:'A small dish served with the main course', def_es:'guarnición / acompañamiento', example:'The steak comes with a side dish of roasted vegetables.'},
{word:'Garnish', ipa:'ˈɡɑːrnɪʃ', def:'A decoration on a dish, like parsley or lemon', def_es:'decoración / guarnición', example:'We garnish the soup with fresh herbs.'},
{word:'Signature dish', ipa:'ˈsɪɡnətʃər dɪʃ', def:'A dish the restaurant is famous for', def_es:'plato estrella', example:'Our signature dish is the slow-cooked lamb.'},
{word:'Portion', ipa:'ˈpɔːrʃən', def:'The amount of food served to one person', def_es:'porción', example:'The portions here are very generous.'}
],
listening:{
title:'Describing the Menu',
preListening:'A server is describing the menu to new guests. Listen for: the signature dish, the gluten-free option, and what the special includes.',
transcript:'Good evening and welcome! Let me tell you about our menu tonight. Our signature dish is the slow-roasted lamb with rosemary and garlic. It comes with a side of mashed potatoes and seasonal vegetables. For our guests with dietary needs, we have a wonderful gluten-free pasta with tomato sauce and fresh basil. Our vegan option tonight is a grilled vegetable tower with hummus and pita. Tonight\'s special includes a starter, a main course, and a dessert for thirty-five dollars. The starter is a Caesar salad. I highly recommend the lamb — it\'s absolutely delicious! Can I take your order?',
transcriptEs:'¡Buenas noches y bienvenidos! Permítanme contarles sobre nuestro menú esta noche. Nuestro plato estrella es el cordero asado lentamente con romero y ajo. Viene con una guarnición de puré de papas y verduras de temporada. Para nuestros comensales con necesidades dietéticas, tenemos una maravillosa pasta sin gluten con salsa de tomate y albahaca fresca. Nuestra opción vegana esta noche es una torre de vegetales a la parrilla con hummus y pan pita. El especial de esta noche incluye una entrada, un plato principal y un postre por treinta y cinco dólares. La entrada es una ensalada César. Les recomiendo el cordero — ¡está absolutamente delicioso! ¿Puedo tomar su pedido?',
questions:[
{q:'What is the signature dish?', options:['Grilled salmon','Slow-roasted lamb','Gluten-free pasta'], correct:1},
{q:'What does the special include?', options:['Starter, main, dessert','Main and drink','Three courses and wine'], correct:0},
{q:'How much does the special cost?', options:['$25','$30','$35'], correct:2}
]
},
dialogue:{
title:'Recommending Dishes to Guests',
situation:'📍 A server is describing the menu and making recommendations to a family at a restaurant.',
lines:[
{speaker:'SERVER', text:'Good evening! Can I tell you about our specials tonight?'},
{speaker:'GUEST', text:'Yes, please. My daughter is vegetarian. What do you recommend?'},
{speaker:'SERVER', text:'We have a delicious vegan pasta tonight. It\'s made with fresh tomatoes and basil.'},
{speaker:'GUEST', text:'That sounds great! Is it gluten-free?'},
{speaker:'SERVER', text:'Unfortunately, it\'s not. But we do have a gluten-free risotto with mushrooms.'},
{speaker:'GUEST', text:'Perfect! And what\'s the soup of the day?'},
{speaker:'SERVER', text:'It\'s a roasted pumpkin soup — very popular. It comes with fresh bread.'},
{speaker:'GUEST', text:'Wonderful. We\'ll start with the soup and then the risotto, please.'}
],
practicePrompt:'Practice making food recommendations. Use: I recommend..., It comes with..., It\'s made with..., Would you like...?'
},
grammar:{
title:'Present Simple — Describing What a Dish Contains',
explanation:'At A2 level, we use the present simple to describe dishes and menus professionally. Key structures: It comes with... / It\'s made with... / It contains... / We serve it with...',
examples:['The lamb comes with roasted potatoes and vegetables.','It\'s made with fresh tomatoes and garlic.','The soup contains cream, so it is not vegan.'],
exercises:[
{question:'The pasta ___ with garlic bread and a side salad.', options:['come','comes','coming'], correct:1},
{question:'Our signature dish ___ slow-cooked for eight hours.', options:['are','is','am'], correct:1},
{question:'The soup ___ cream, so it is not vegan.', options:['contain','contains','containing'], correct:1},
{question:'We ___ the steak with a choice of side dish.', options:['serves','serve','serving'], correct:1},
{question:'___ this dish contain nuts or dairy?', options:['Do','Does','Is'], correct:1}
]
},
oralPractice:{
title:'Menu Descriptions — Practice',
instruction:'Use the menu dialogue. Fill in the blanks or choose the best server response.',
exercises:[
{type:'fill', sentence:'Our signature dish is the slow-roasted lamb with ____ and garlic.', options:['rosemary','lemon','pepper'], correct:0, answer:'rosemary', translation:'Nuestro plato estrella es el cordero asado lentamente con romero y ajo.'},
{type:'fill', sentence:'The vegan option is a grilled vegetable tower with hummus and ____.', options:['pita','salad','soup'], correct:0, answer:'pita', translation:'La opción vegana es una torre de vegetales a la parrilla con hummus y pan pita.'},
{type:'match', speaker:'GUEST', prompt:'Is the pasta gluten-free?', options:['Unfortunately, it\'s not. But we have a gluten-free risotto.','Yes, everything is gluten-free.','I don\'t know.'], correct:0, answer:'Unfortunately, it\'s not. But we have a gluten-free risotto.', translation:'¿La pasta es sin gluten? — Lamentablemente no. Pero tenemos un risotto sin gluten.'},
{type:'fill', sentence:'Tonight\'s special includes a starter, a main course, and a dessert for ____ dollars.', options:['thirty-five','twenty','fifty'], correct:0, answer:'thirty-five', translation:'El especial de esta noche incluye entrada, plato principal y postre por treinta y cinco dólares.'}
]
},
speaking:[
{icon:'🍽️', type:'Menu Description', prompt:'You are the server. Describe two dishes from the menu: what they contain, what they come with, and who you recommend them for.', promptEs:'Sos el/la mesero/a. Describí dos platos del menú: qué contienen, con qué vienen y a quién se los recomendás.', model:'Tonight I recommend our signature salmon. It\'s made with fresh Atlantic salmon, seasoned with lemon and herbs. It comes with a side of roasted vegetables. For vegetarians, our mushroom risotto is excellent — it\'s creamy and full of flavor!', modelEs:'Esta noche recomiendo nuestro salmón estrella. Está hecho con salmón fresco del Atlántico, condimentado con limón y hierbas. Viene con una guarnición de verduras asadas. Para vegetarianos, nuestro risotto de champiñones es excelente — ¡es cremoso y muy sabroso!'},
{icon:'💬', type:'Dietary Needs Role Play', prompt:'A guest has a dietary restriction (gluten-free, vegan, or allergic). Respond professionally. Offer alternatives and explain what is in each dish.', promptEs:'Un cliente tiene una restricción alimentaria (sin gluten, vegano o alérgico). Respondé profesionalmente. Ofrecé alternativas y explicá qué contiene cada plato.', model:'Of course! For guests with gluten intolerance, I recommend our grilled chicken, which comes with steamed rice and vegetables. Everything is prepared separately to avoid cross-contamination.', modelEs:'¡Por supuesto! Para clientes con intolerancia al gluten, recomiendo nuestro pollo a la parrilla, que viene con arroz al vapor y verduras. Todo se prepara por separado para evitar contaminación cruzada.'}
],
videos:[
{title:'How to Describe Food in English — Restaurant Vocabulary', channel:'English with Lucy', duration:'7:00', url:'https://www.youtube.com/watch?v=3uMKyPpFLw4'},
{title:'English for Restaurant Workers — Explaining Dishes', channel:'Oxford Online English', duration:'8:00', url:'https://www.youtube.com/watch?v=Wjy2OT6KZSI'}
],
videoExercise:{
title:'🎬 Video Quiz — Menu & Food Descriptions',
instruction:'Watch the videos and choose the correct answer for each question.',
instructionEs:'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
questions:[
{q:'A dish the restaurant is most famous for is called a:', qEs:'El plato por el que el restaurante es más famoso se llama:', options:['signature dish','side dish','special'], optionsEs:['plato estrella','guarnición','especial'], correct:0},
{q:'\"It comes with\" is used to describe:', qEs:'\"Viene con\" se usa para describir:', options:['side dishes or accompaniments','the price','the cooking method'], optionsEs:['guarniciones o acompañamientos','el precio','el método de cocción'], correct:0},
{q:'A vegan dish contains:', qEs:'Un plato vegano contiene:', options:['no animal products','only fish','some dairy'], optionsEs:['ningún producto animal','solo pescado','algo de lácteos'], correct:0},
{q:'\"Gluten-free\" means the dish has no:', qEs:'\"Sin gluten\" significa que el plato no tiene:', options:['wheat or gluten','meat','sugar'], optionsEs:['trigo o gluten','carne','azúcar'], correct:0},
{q:'A \"portion\" refers to:', qEs:'Una \"porción\" se refiere a:', options:['the amount of food for one person','the price','the garnish'], optionsEs:['la cantidad de comida para una persona','el precio','la decoración'], correct:0}
]
}
},
{
id:2, emoji:'📞',
title:'Taking Reservations & Managing Tables',
topic:'Phone reservations, table management, and handling special requests at A2 level',
revision:[
{eng:'Our signature dish is the slow-roasted lamb.', template:'Our [signature] dish is the slow-[roasted] lamb.', esp:'Nuestro plato estrella es el cordero asado lentamente.'},
{eng:'The pasta comes with garlic bread and salad.', template:'The pasta [comes] with garlic bread and [salad].', esp:'La pasta viene con pan de ajo y ensalada.'},
{eng:'It\'s made with fresh tomatoes and basil.', template:'It\'s [made] with fresh tomatoes and [basil].', esp:'Está hecho con tomates frescos y albahaca.'},
{eng:'We have a wonderful gluten-free option.', template:'We [have] a wonderful [gluten-free] option.', esp:'Tenemos una maravillosa opción sin gluten.'},
{eng:'I highly recommend the signature dish tonight.', template:'I [highly] recommend the signature dish [tonight].', esp:'Les recomiendo mucho el plato estrella esta noche.'},
{eng:'The portion size is very generous here.', template:'The [portion] size is very [generous] here.', esp:'El tamaño de la porción es muy generoso aquí.'},
{eng:'The soup contains cream and fresh herbs.', template:'The soup [contains] cream and fresh [herbs].', esp:'La sopa contiene crema y hierbas frescas.'},
{eng:'Our vegan menu has three delicious options.', template:'Our [vegan] menu has three [delicious] options.', esp:'Nuestro menú vegano tiene tres opciones deliciosas.'},
{eng:'We garnish the dish with fresh parsley.', template:'We [garnish] the dish with fresh [parsley].', esp:'Decoramos el plato con perejil fresco.'},
{eng:'Do you have any dietary restrictions today?', template:'Do you [have] any dietary [restrictions] today?', esp:'¿Tienen alguna restricción alimentaria hoy?'}
],
vocabulary:[
{word:'Reservation', ipa:'ˌrɛzərˈveɪʃən', def:'A booking made in advance by phone or online', def_es:'reserva', example:'I\'d like to make a reservation for Saturday.'},
{word:'Party', ipa:'ˈpɑːrti', def:'A group of people dining together', def_es:'grupo de comensales', example:'How many are in your party?'},
{word:'Availability', ipa:'əˌveɪləˈbɪlɪti', def:'Whether a table or time slot is free', def_es:'disponibilidad', example:'Let me check our availability for that time.'},
{word:'Dietary restriction', ipa:'ˈdaɪətri rɪˈstrɪkʃən', def:'A food rule based on health, religion, or preference', def_es:'restricción alimentaria', example:'Do any guests have dietary restrictions?'},
{word:'High chair', ipa:'haɪ tʃɛər', def:'A tall chair for babies and toddlers', def_es:'silla alta para niños', example:'We will need a high chair for the baby.'},
{word:'Indoor / Outdoor', ipa:'ˈɪndɔːr / ˈaʊtdɔːr', def:'Inside or outside seating areas', def_es:'interior / exterior', example:'Do you prefer indoor or outdoor seating?'},
{word:'Confirm', ipa:'kənˈfɜːrm', def:'To say that something is definite', def_es:'confirmar', example:'I\'d like to confirm my reservation for tonight.'},
{word:'Cancellation', ipa:'ˌkænsəˈleɪʃən', def:'When a booking is cancelled', def_es:'cancelación', example:'Please call us if you need to make a cancellation.'}
],
listening:{
title:'A Phone Reservation',
preListening:'Listen to a customer calling the restaurant to make a reservation. Notice how the staff asks for information politely.',
transcript:'Thank you for calling The Blue Garden Restaurant. How can I help you? You\'d like to make a reservation for Saturday evening? Of course! How many people will be in your party? A party of six. And what time works best for you? Seven thirty? Let me check our availability. Yes, we have a table available at seven thirty on Saturday. Can I get your name please? And a phone number in case we need to contact you? Do any of your guests have dietary restrictions? We have one vegan guest — no problem at all! We will note that. Do you prefer indoor or outdoor seating? We do have a lovely outdoor terrace. Wonderful! Your reservation is confirmed for Saturday, March fifteenth, at seven thirty PM, for a party of six. We look forward to seeing you!',
transcriptEs:'Gracias por llamar al Restaurante The Blue Garden. ¿En qué puedo ayudarle? ¿Le gustaría hacer una reserva para el sábado por la noche? ¡Por supuesto! ¿Cuántas personas serán en su grupo? Un grupo de seis. ¿Y a qué hora le viene mejor? ¿A las siete y media? Déjeme verificar nuestra disponibilidad. Sí, tenemos una mesa disponible a las siete y media el sábado. ¿Me puede dar su nombre? ¿Y un número de teléfono por si necesitamos contactarle? ¿Alguno de sus invitados tiene restricciones alimentarias? Tienen un invitado vegano — ¡no hay problema! Lo anotamos. ¿Prefieren asientos en el interior o al aire libre? Tenemos una hermosa terraza al aire libre. ¡Maravilloso! Su reserva está confirmada para el sábado 15 de marzo, a las siete y media de la tarde, para un grupo de seis. ¡Esperamos verle!',
questions:[
{q:'How many people are in the party?', options:['Four','Six','Eight'], correct:1},
{q:'What time is the reservation?', options:['7:00 PM','7:30 PM','8:00 PM'], correct:1},
{q:'What seating do they choose?', options:['Indoor','Outdoor terrace','Private room'], correct:1}
]
},
dialogue:{
title:'Taking a Reservation by Phone',
situation:'📍 A staff member receives a phone call to book a table.',
lines:[
{speaker:'STAFF', text:'Good afternoon, La Bella Restaurant. How can I help you?'},
{speaker:'CALLER', text:'Hello! I\'d like to make a reservation for tomorrow night.'},
{speaker:'STAFF', text:'Of course. How many people will be in your party?'},
{speaker:'CALLER', text:'There will be four of us. We\'d like a table at eight o\'clock.'},
{speaker:'STAFF', text:'Let me check... Yes, we have a table available. May I have your name?'},
{speaker:'CALLER', text:'Yes, it\'s Johnson. And I\'d like a table near the window, if possible.'},
{speaker:'STAFF', text:'I\'ll note that for you. Do any guests have dietary restrictions?'},
{speaker:'CALLER', text:'One of us is vegetarian.'},
{speaker:'STAFF', text:'Wonderful. Your reservation is confirmed for tomorrow at eight PM. See you then!'}
],
practicePrompt:'Practice taking and making reservations. Use: How many people? What time? Any dietary restrictions? Let me check availability. Your reservation is confirmed.'
},
grammar:{
title:'Future with Will — Making Promises and Offers',
explanation:'At A2, we use WILL to make offers, promises, and spontaneous decisions in a professional setting. It shows you are committed to helping the customer immediately.',
examples:['I will check the availability for you right now.','We will have a table ready for you at eight.','I will note the dietary restrictions in our system.'],
exercises:[
{question:'I ___ check our availability right away.', options:['am going to','will','going'], correct:1},
{question:'We ___ reserve the window table for your party.', options:['will','are','do'], correct:0},
{question:'The staff member says: \"I ___ note that for you.\"', options:['am','will','does'], correct:1},
{question:'\"___ you be needing a high chair for the baby?\"', options:['Are','Will','Do'], correct:1},
{question:'We ___ contact you if anything changes.', options:['will','are','have'], correct:0}
]
},
oralPractice:{
title:'Reservations — Practice',
instruction:'Use the phone reservation dialogue. Fill in the blanks and respond like a professional staff member.',
exercises:[
{type:'fill', sentence:'Good afternoon, La Bella Restaurant. How can I ____ you?', options:['help','see','hear'], correct:0, answer:'help', translation:'Buenas tardes, Restaurante La Bella. ¿En qué puedo ayudarle?'},
{type:'fill', sentence:'How many people will be in your ____?', options:['party','group','table'], correct:0, answer:'party', translation:'¿Cuántas personas serán en su grupo?'},
{type:'match', speaker:'CALLER', prompt:'I\'d like a table near the window, if possible.', options:['I\'ll note that for you.','Sorry, we are full.','Please call back.'], correct:0, answer:'I\'ll note that for you.', translation:'Quisiera una mesa cerca de la ventana, si es posible. — Lo anoto para usted.'},
{type:'fill', sentence:'Your reservation is confirmed for tomorrow at ____ PM.', options:['eight','two','noon'], correct:0, answer:'eight', translation:'Su reserva está confirmada para mañana a las ocho de la noche.'}
]
},
speaking:[
{icon:'📞', type:'Phone Reservation', prompt:'You are the restaurant staff. Take a phone reservation. Ask for: name, number of guests, time, dietary restrictions, seating preference. Confirm the booking at the end.', promptEs:'Sos el personal del restaurante. Tomá una reserva telefónica. Preguntá por: nombre, número de comensales, horario, restricciones alimentarias, preferencia de asiento. Confirmá la reserva al final.', model:'Good evening, Sunrise Restaurant! How can I help you? How many will be dining? And what time? Do you have any dietary requirements? Let me check — yes, we have a table. Your reservation is confirmed!', modelEs:'¡Buenas noches, Restaurante Sunrise! ¿En qué puedo ayudarle? ¿Cuántas personas van a cenar? ¿Y a qué hora? ¿Tienen algún requerimiento dietético? Déjeme verificar — sí, tenemos una mesa. ¡Su reserva está confirmada!'},
{icon:'🪑', type:'Table Management', prompt:'A family arrives without a reservation. You are the host. Check for availability, ask about dietary needs, offer a high chair if needed, and show them to their table.', promptEs:'Una familia llega sin reserva. Sos el/la anfitrión/a. Revisá disponibilidad, preguntá sobre necesidades dietéticas, ofrecé una silla alta si es necesario y llévalos a su mesa.', model:'Welcome! Do you have a reservation? No problem — how many are in your party? We have a lovely table available. Will you need a high chair for the little one? Right this way, please!', modelEs:'¡Bienvenidos! ¿Tienen reserva? No hay problema — ¿cuántas personas son? Tenemos una mesa disponible. ¿Van a necesitar una silla alta para el pequeño? ¡Por aquí, por favor!'}
],
review:[
{sentence:'Our ___ dish is the one the restaurant is most famous for.', options:['signature','special','side'], correct:0},
{sentence:'\"It ___ with a side salad and garlic bread.\" — the dish is described.', options:['goes','comes','serves'], correct:1},
{sentence:'A food rule based on health or preference is called a dietary ___.', options:['option','restriction','menu'], correct:2},
{sentence:'\"___ this dish contain gluten?\" — the correct question word.', options:['Do','Are','Does'], correct:2},
{sentence:'Food that has no animal products at all is called ___.', options:['vegetarian','gluten-free','vegan'], correct:2}
],
videos:[
{title:'Making a Restaurant Reservation in English', channel:'Business English Pod', duration:'6:00', url:'https://www.youtube.com/watch?v=BN-Lmqt0JLI'},
{title:'English Telephone Phrases — Restaurant Booking', channel:'Oxford Online English', duration:'7:00', url:'https://www.youtube.com/watch?v=Zy1h49_L8ME'}
],
videoExercise:{
title:'🎬 Video Quiz — Reservations & Table Management',
instruction:'Watch the videos and choose the correct answer for each question.',
instructionEs:'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
questions:[
{q:'To \"confirm\" a reservation means to:', qEs:'\"Confirmar\" una reserva significa:', options:['say it is definite','cancel it','change the time'], optionsEs:['decir que es definitiva','cancelarla','cambiar la hora'], correct:0},
{q:'\"How many in your party?\" means:', qEs:'\"¿Cuántas personas son en su grupo?\" significa:', options:['How many people are dining','What is your name','What time is your booking'], optionsEs:['Cuántas personas van a cenar','Cuál es su nombre','A qué hora es su reserva'], correct:0},
{q:'A high chair is used for:', qEs:'Una silla alta se usa para:', options:['babies or small children','elderly guests','outdoor seating'], optionsEs:['bebés o niños pequeños','huéspedes mayores','asientos al aire libre'], correct:0},
{q:'\"Availability\" means:', qEs:'\"Disponibilidad\" significa:', options:['whether a table is free','the number of guests','the menu options'], optionsEs:['si hay una mesa libre','el número de comensales','las opciones del menú'], correct:0},
{q:'A \"cancellation\" occurs when:', qEs:'Una \"cancelación\" ocurre cuando:', options:['a reservation is cancelled','a guest arrives early','a dish is sold out'], optionsEs:['se cancela una reserva','un huésped llega temprano','un plato se agota'], correct:0}
]
}
},
{
id:3, emoji:'🏨',
title:'Hotel Room Types & Amenities',
topic:'Describing room types, hotel facilities, and assisting guests with requests',
revision:[
{eng:'I\'d like to make a reservation for Saturday evening.', template:'I\'d like to [make] a reservation for Saturday [evening].', esp:'Me gustaría hacer una reserva para el sábado por la noche.'},
{eng:'How many people will be in your party?', template:'How many [people] will be in your [party]?', esp:'¿Cuántas personas serán en su grupo?'},
{eng:'Let me check our availability for that time.', template:'Let me [check] our [availability] for that time.', esp:'Déjeme verificar nuestra disponibilidad para ese horario.'},
{eng:'Do any guests have dietary restrictions?', template:'Do any guests have [dietary] [restrictions]?', esp:'¿Algún invitado tiene restricciones alimentarias?'},
{eng:'I prefer indoor seating near the window.', template:'I prefer [indoor] seating near the [window].', esp:'Prefiero asiento en el interior cerca de la ventana.'},
{eng:'I will note your preference in the system.', template:'I [will] note your [preference] in the system.', esp:'Anotaré su preferencia en el sistema.'},
{eng:'Your reservation is confirmed for eight PM.', template:'Your [reservation] is [confirmed] for eight PM.', esp:'Su reserva está confirmada para las ocho de la noche.'},
{eng:'Please call us if you need to cancel.', template:'Please [call] us if you need to [cancel].', esp:'Por favor llámenos si necesita cancelar.'},
{eng:'We will be happy to accommodate a high chair.', template:'We [will] be happy to [accommodate] a high chair.', esp:'Con gusto le proporcionaremos una silla alta.'},
{eng:'What time works best for your party?', template:'What [time] works best for your [party]?', esp:'¿Qué horario les queda mejor a su grupo?'}
],
vocabulary:[
{word:'Suite', ipa:'swiːt', def:'A large, luxurious set of rooms in a hotel', def_es:'suite', example:'I\'d like to book a suite for our anniversary.'},
{word:'Twin room', ipa:'twɪn ruːm', def:'A room with two separate single beds', def_es:'habitación con dos camas individuales', example:'We need a twin room for the two children.'},
{word:'Ocean view', ipa:'ˈoʊʃən vjuː', def:'A room that overlooks the sea', def_es:'vista al mar', example:'We\'d love an ocean view room if possible.'},
{word:'Amenities', ipa:'əˈmiːnɪtiz', def:'Facilities and services available to guests', def_es:'comodidades / servicios', example:'The hotel has excellent amenities including a pool and gym.'},
{word:'Minibar', ipa:'ˈmɪnibɑːr', def:'A small refrigerator with snacks and drinks in the room', def_es:'minibar', example:'The minibar is restocked every day.'},
{word:'Concierge', ipa:'kɒnsiˈɛrʒ', def:'A hotel staff member who helps guests with special requests', def_es:'conserje', example:'Ask the concierge for restaurant recommendations.'},
{word:'Balcony', ipa:'ˈbælkəni', def:'A platform outside a room where guests can sit', def_es:'balcón / terraza', example:'Our deluxe rooms have a private balcony.'},
{word:'Late check-out', ipa:'leɪt tʃɛk aʊt', def:'Leaving the hotel after the standard checkout time', def_es:'salida tardía', example:'Can I request a late check-out until 2 PM?'}
],
listening:{
title:'Checking In — Room Options',
preListening:'A guest is checking into the hotel and asking about room types and upgrades. Listen for the room type, the view, and any special requests.',
transcript:'Welcome to the Grandview Hotel! Do you have a reservation? Excellent, Mr. Torres. I can see your booking here — a standard double room for three nights. That\'s correct. Now, I\'d like to let you know that we have a special upgrade available today. We have a deluxe suite with an ocean view — it comes with a private balcony, a jacuzzi, and access to our executive lounge. The rate would be fifty dollars more per night. That does sound wonderful. Shall I go ahead with the upgrade? Excellent choice! Your new room number is five twelve on the fifth floor. Here is your key card. Checkout is at eleven AM, but I can arrange a late checkout until two PM if you\'d like. Also, the concierge desk is on your left if you need any restaurant recommendations or tour bookings. Enjoy your stay!',
transcriptEs:'¡Bienvenido al Hotel Grandview! ¿Tiene una reserva? Excelente, señor Torres. Veo su reserva aquí — una habitación doble estándar por tres noches. Correcto. Ahora, me gustaría informarle que tenemos una mejora especial disponible hoy. Tenemos una suite de lujo con vista al océano — incluye un balcón privado, un jacuzzi y acceso a nuestro salón ejecutivo. La tarifa sería cincuenta dólares más por noche. Suena maravilloso. ¿Procedo con la mejora? ¡Excelente elección! Su nuevo número de habitación es 512 en el quinto piso. Aquí está su tarjeta llave. La salida es a las once de la mañana, pero puedo arreglar una salida tardía hasta las dos de la tarde si lo desea. Además, el escritorio de conserjería está a su izquierda si necesita recomendaciones de restaurantes o reservas de tours. ¡Disfrute su estadía!',
questions:[
{q:'What type of room was originally booked?', options:['Suite','Standard double','Twin room'], correct:1},
{q:'What does the upgrade include?', options:['Pool and gym access','Ocean view, balcony, jacuzzi','Extra breakfast'], correct:1},
{q:'How much extra is the upgrade per night?', options:['$30','$40','$50'], correct:2}
]
},
dialogue:{
title:'Assisting a Guest with Room Preferences',
situation:'📍 A guest arrives at the front desk and asks about different room options.',
lines:[
{speaker:'STAFF', text:'Good afternoon! Welcome to the Park Hotel. How can I assist you?'},
{speaker:'GUEST', text:'Hi! I have a reservation, but I\'d like to know if I can upgrade my room.'},
{speaker:'STAFF', text:'Of course! What type of room do you currently have?'},
{speaker:'GUEST', text:'I booked a standard room. Is there anything with a balcony?'},
{speaker:'STAFF', text:'Yes! We have a deluxe room with a private balcony and garden view. It\'s available tonight.'},
{speaker:'GUEST', text:'That sounds perfect. And does it have a minibar?'},
{speaker:'STAFF', text:'It does! The minibar is restocked daily. Shall I make that change for you?'},
{speaker:'GUEST', text:'Yes, please. And can I also request a late checkout?'},
{speaker:'STAFF', text:'Absolutely. I\'ll arrange late checkout until noon at no extra charge.'}
],
practicePrompt:'Practice upgrading a guest\'s room. Use: What type of room? It comes with... Shall I make that change? I\'ll arrange it for you.'
},
grammar:{
title:'Could / Would — Polite Requests at A2',
explanation:'At A2, we use COULD and WOULD to make polite requests and offers in hotels. COULD is for asking permission or making requests. WOULD is for making offers and invitations. These make your English sound professional.',
examples:['Could I have a room with a balcony, please?','Would you like me to arrange a late checkout?','Could you call a taxi for me?'],
exercises:[
{question:'___ you like me to call the concierge for you?', options:['Could','Would','Should'], correct:1},
{question:'___ I have an extra blanket, please?', options:['Would','Could','Will'], correct:1},
{question:'The guest says: \"___ you recommend a good restaurant nearby?\"', options:['Could','Are','Do'], correct:0},
{question:'___ you like a room with an ocean view?', options:['Could','Would','Should'], correct:1},
{question:'\"___ I speak with the manager, please?\" — polite request.', options:['Would','Could','Should'], correct:1}
]
},
oralPractice:{
title:'Hotel Room Assistance — Practice',
instruction:'Practice the hotel upgrade dialogue. Fill in the blanks and choose the best professional response.',
exercises:[
{type:'fill', sentence:'Good afternoon! Welcome to the Park Hotel. How can I ____ you?', options:['assist','see','find'], correct:0, answer:'assist', translation:'¡Buenas tardes! Bienvenido al Hotel Park. ¿En qué puedo asistirle?'},
{type:'fill', sentence:'We have a deluxe room with a private balcony and ____ view.', options:['garden','sea','mountain'], correct:0, answer:'garden', translation:'Tenemos una habitación de lujo con balcón privado y vista al jardín.'},
{type:'match', speaker:'GUEST', prompt:'Can I also request a late checkout?', options:['Absolutely. I\'ll arrange that for you.','Sorry, that\'s not possible.','Check-out is at 11 AM.'], correct:0, answer:'Absolutely. I\'ll arrange that for you.', translation:'¿Puedo también pedir una salida tardía? — Por supuesto. Lo arreglo para usted.'},
{type:'fill', sentence:'The minibar is restocked ____.', options:['daily','weekly','monthly'], correct:0, answer:'daily', translation:'El minibar se repone diariamente.'}
]
},
speaking:[
{icon:'🏨', type:'Room Upgrade Pitch', prompt:'You are a front desk agent. A guest checks in. Offer them a room upgrade. Describe what the upgraded room includes (balcony, view, amenities). Explain the extra cost and confirm their choice.', promptEs:'Sos el/la recepcionista. Un huésped hace check-in. Ofrecele una mejora de habitación. Describí lo que incluye la habitación mejorada (balcón, vista, comodidades). Explicá el costo extra y confirmá su elección.', model:'Good evening! I see you booked a standard room, but tonight we have a beautiful upgrade available — a deluxe suite with an ocean view and a private balcony. It\'s only thirty dollars more per night. Shall I go ahead with the upgrade? Excellent!', modelEs:'¡Buenas noches! Veo que reservó una habitación estándar, pero esta noche tenemos una mejora disponible — una suite de lujo con vista al océano y balcón privado. Son solo treinta dólares más por noche. ¿Procedo con la mejora? ¡Excelente!'},
{icon:'🛎️', type:'Concierge Assistance', prompt:'A guest asks for help with: 1) a restaurant recommendation, 2) arranging a taxi for tomorrow morning, and 3) a late checkout request. Respond to each request professionally.', promptEs:'Un huésped pide ayuda con: 1) una recomendación de restaurante, 2) organizar un taxi para mañana por la mañana, y 3) una solicitud de salida tardía. Respondé a cada solicitud profesionalmente.', model:'For dinner, I recommend La Vista — it\'s five minutes away. I can arrange a taxi for 8 AM tomorrow — what time does your flight leave? And for late checkout, I can extend until 1 PM at no charge. Is there anything else?', modelEs:'Para cenar, recomiendo La Vista — está a cinco minutos. Puedo organizar un taxi para las 8 AM de mañana — ¿a qué hora sale su vuelo? Y para la salida tardía, puedo extender hasta la 1 PM sin cargo. ¿Hay algo más?'}
],
review:[
{sentence:'To make a restaurant booking by phone is to make a ___.', options:['cancellation','confirmation','reservation'], correct:2},
{sentence:'\"How many in your party?\" is asking about the number of ___.', options:['rooms','guests','tables'], correct:1},
{sentence:'To say something is definitely happening is to ___ it.', options:['cancel','confirm','check'], correct:1},
{sentence:'A seating area outside the restaurant or hotel is called ___.', options:['indoor','outdoor','lobby'], correct:1},
{sentence:'\"___ you like me to check availability?\" — professional offer.', options:['Could','Would','Should'], correct:1}
],
videos:[
{title:'Hotel English — Room Types and Amenities', channel:'Hospitality English', duration:'6:00', url:'https://www.youtube.com/watch?v=3nhWVTxVTcE'},
{title:'English for Hotels — Front Desk Conversations', channel:'Learn English with TV Series', duration:'7:00', url:'https://www.youtube.com/watch?v=G-Lp_rR49jU'}
],
videoExercise:{
title:'🎬 Video Quiz — Hotel Rooms & Amenities',
instruction:'Watch the videos and choose the correct answer for each question.',
instructionEs:'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
questions:[
{q:'A room with two separate single beds is called a:', qEs:'Una habitación con dos camas individuales se llama:', options:['twin room','suite','double room'], optionsEs:['habitación twin','suite','habitación doble'], correct:0},
{q:'The hotel staff member who helps with special requests is the:', qEs:'El empleado del hotel que ayuda con solicitudes especiales es el/la:', options:['concierge','housekeeper','receptionist'], optionsEs:['conserje','mucama','recepcionista'], correct:0},
{q:'A \"late check-out\" means leaving the hotel:', qEs:'Un \"late check-out\" significa salir del hotel:', options:['after the standard time','before breakfast','at midnight'], optionsEs:['después del horario estándar','antes del desayuno','a medianoche'], correct:0},
{q:'Hotel \"amenities\" include:', qEs:'Las \"amenities\" del hotel incluyen:', options:['pool, gym, restaurant','the room number','the key card'], optionsEs:['piscina, gimnasio, restaurante','el número de habitación','la tarjeta llave'], correct:0},
{q:'A platform outside a hotel room where guests can sit is a:', qEs:'Una plataforma fuera de la habitación del hotel donde los huéspedes pueden sentarse es un/una:', options:['balcony','lobby','corridor'], optionsEs:['balcón','vestíbulo','corredor'], correct:0}
]
}
},
{
id:4, emoji:'🧹',
title:'Advanced Cleaning Protocols',
topic:'Cleaning deep-clean procedures, safety, and communicating with guests at A2 level',
revision:[
{eng:'We have a deluxe suite with an ocean view.', template:'We have a [deluxe] suite with an ocean [view].', esp:'Tenemos una suite de lujo con vista al océano.'},
{eng:'The minibar is restocked every day.', template:'The [minibar] is [restocked] every day.', esp:'El minibar se repone todos los días.'},
{eng:'Could I request a late checkout until noon?', template:'Could I [request] a late [checkout] until noon?', esp:'¿Podría solicitar una salida tardía hasta el mediodía?'},
{eng:'The concierge can help with restaurant recommendations.', template:'The [concierge] can help with restaurant [recommendations].', esp:'El conserje puede ayudar con recomendaciones de restaurantes.'},
{eng:'I would like a room with a balcony, please.', template:'I [would] like a room with a [balcony], please.', esp:'Quisiera una habitación con balcón, por favor.'},
{eng:'The hotel has excellent amenities for guests.', template:'The hotel has excellent [amenities] for [guests].', esp:'El hotel tiene excelentes servicios para los huéspedes.'},
{eng:'Could you arrange a taxi for tomorrow morning?', template:'Could you [arrange] a taxi for [tomorrow] morning?', esp:'¿Podría organizar un taxi para mañana por la mañana?'},
{eng:'I will arrange a late checkout at no extra charge.', template:'I [will] arrange a late checkout at no extra [charge].', esp:'Organizaré una salida tardía sin cargo adicional.'},
{eng:'Do you prefer a twin room or a double room?', template:'Do you [prefer] a [twin] room or a double room?', esp:'¿Prefiere una habitación twin o una habitación doble?'},
{eng:'The upgrade includes access to the executive lounge.', template:'The [upgrade] includes access to the [executive] lounge.', esp:'La mejora incluye acceso al salón ejecutivo.'}
],
vocabulary:[
{word:'Deep clean', ipa:'diːp kliːn', def:'A thorough, detailed cleaning of an entire area', def_es:'limpieza profunda', example:'Room 204 needs a deep clean after the long-stay guest.'},
{word:'PPE', ipa:'piː piː iː', def:'Personal Protective Equipment (gloves, mask, etc.)', def_es:'EPP — equipo de protección personal', example:'Always wear PPE when using chemical cleaners.'},
{word:'Sanitize', ipa:'ˈsænɪtaɪz', def:'To make a surface very clean and free of germs', def_es:'higienizar / sanitizar', example:'Sanitize all high-touch surfaces after each guest.'},
{word:'Linen', ipa:'ˈlɪnən', def:'Bed sheets, pillowcases, and towels', def_es:'ropa de cama / lencería', example:'Please replace the linen in all rooms on floor three.'},
{word:'Turndown service', ipa:'ˈtɜːrndaʊn ˈsɜːrvɪs', def:'An evening service where beds are prepared for sleeping', def_es:'servicio de preparación nocturna', example:'Turndown service is provided at seven PM.'},
{word:'Cross-contamination', ipa:'krɒs kənˌtæmɪˈneɪʃən', def:'The spread of germs from one surface to another', def_es:'contaminación cruzada', example:'Use separate cloths to avoid cross-contamination.'},
{word:'Log', ipa:'lɒɡ', def:'A written record of tasks completed', def_es:'registro / planilla', example:'Sign the cleaning log after each room.'},
{word:'Occupied / Vacant', ipa:'ˈɒkjʊpaɪd / ˈveɪkənt', def:'Room currently used / Room with no guest', def_es:'ocupada / vacante', example:'Check if the room is occupied before entering.'}
],
listening:{
title:'Cleaning Team Briefing — Advanced Protocols',
preListening:'A housekeeping manager is briefing the team on a special cleaning protocol for a VIP guest arrival. Listen for the specific tasks and safety rules.',
transcript:'Good morning, team. Today we have a VIP guest checking in at two PM, so I need rooms four ten and four twelve to be perfect. Please follow the deep clean protocol. Start by removing all used linen and replacing it with fresh sets. Sanitize all high-touch surfaces — door handles, light switches, remote controls, the minibar, and the telephone. Use the green label spray for bathrooms — it\'s our strongest sanitizer. Always wear your PPE — gloves and mask — when using chemicals. Remember: use separate cloths for the bathroom and the bedroom to avoid cross-contamination. After cleaning, sign the log and leave it at the door. Turndown service for these rooms will begin at six PM. Any questions? Great — let\'s make these rooms absolutely perfect!',
transcriptEs:'Buenos días, equipo. Hoy tenemos un huésped VIP que hace check-in a las dos de la tarde, así que necesito que las habitaciones 410 y 412 estén perfectas. Por favor, sigan el protocolo de limpieza profunda. Comiencen retirando toda la ropa de cama usada y reemplácenla con juegos frescos. Higienicen todas las superficies de alto contacto — manijas de puertas, interruptores de luz, controles remotos, el minibar y el teléfono. Usen el spray de etiqueta verde para los baños — es nuestro sanitizante más potente. Usen siempre el EPP — guantes y mascarilla — cuando usen químicos. Recuerden: usen trapos separados para el baño y el dormitorio para evitar contaminación cruzada. Después de limpiar, firmen la planilla y déjenla en la puerta. El servicio de preparación nocturna para estas habitaciones comenzará a las seis de la tarde. ¿Alguna pregunta? Muy bien — ¡hagamos que estas habitaciones queden absolutamente perfectas!',
questions:[
{q:'What time does the VIP guest check in?', options:['12 PM','2 PM','4 PM'], correct:1},
{q:'What must be sanitized first?', options:['Windows and mirrors','High-touch surfaces','The carpet'], correct:1},
{q:'Why must you use separate cloths for bathroom and bedroom?', options:['To save time','To avoid cross-contamination','Because the manager prefers it'], correct:1}
]
},
dialogue:{
title:'Informing a Guest During Cleaning',
situation:'📍 A housekeeper knocks on the door and speaks with the guest about cleaning the room.',
lines:[
{speaker:'HOUSEKEEPER', text:'Housekeeping! Good morning — is this a good time?'},
{speaker:'GUEST', text:'Yes, please come in. How long will it take?'},
{speaker:'HOUSEKEEPER', text:'About twenty minutes for the full clean. Shall I start with the bathroom?'},
{speaker:'GUEST', text:'Yes, please. Can you also replace the towels and the linen?'},
{speaker:'HOUSEKEEPER', text:'Of course! I will change everything and sanitize all surfaces.'},
{speaker:'GUEST', text:'Great. And could you please not move my papers on the desk?'},
{speaker:'HOUSEKEEPER', text:'Absolutely. I will clean around your belongings carefully.'},
{speaker:'GUEST', text:'Thank you so much. You can leave the minibar as it is.'},
{speaker:'HOUSEKEEPER', text:'Understood. I will note that in the cleaning log. Have a wonderful morning!'}
],
practicePrompt:'Practice communicating with guests during cleaning. Use: Shall I start with...? I will change/replace/sanitize... Could you please...? I will note that.'
},
grammar:{
title:'Must / Mustn\'t & Have To — Rules and Obligations',
explanation:'At A2, we use MUST and HAVE TO to talk about rules and obligations at work. MUST is stronger and often comes from authority. HAVE TO describes external requirements. MUSTN\'T means it is forbidden.',
examples:['You must wear PPE when using chemicals.','Housekeepers have to sign the log after each room.','You mustn\'t enter an occupied room without knocking.'],
exercises:[
{question:'You ___ wear gloves when using chemical cleaners.', options:['mustn\'t','have to','could'], correct:1},
{question:'Staff ___ knock before entering a guest room.', options:['must','mustn\'t','could'], correct:0},
{question:'You ___ use the bathroom cloth in the bedroom — it\'s against protocol.', options:['must','have to','mustn\'t'], correct:2},
{question:'The housekeeper ___ sign the cleaning log after every room.', options:['has to','mustn\'t','could'], correct:0},
{question:'Guests ___ be disturbed during the night. It\'s hotel policy.', options:['must not','have to','could'], correct:0}
]
},
oralPractice:{
title:'Cleaning Communication — Practice',
instruction:'Practice the housekeeping dialogue. Fill in the blanks and respond like a professional housekeeper.',
exercises:[
{type:'fill', sentence:'Housekeeping! Good morning — is this a good ____?', options:['time','moment','place'], correct:0, answer:'time', translation:'¡Limpieza! Buenos días — ¿es un buen momento?'},
{type:'fill', sentence:'About twenty minutes for the full ____. Shall I start with the bathroom?', options:['clean','check','service'], correct:0, answer:'clean', translation:'Unos veinte minutos para la limpieza completa. ¿Comienzo por el baño?'},
{type:'match', speaker:'GUEST', prompt:'Could you please not move my papers on the desk?', options:['Absolutely. I will clean around your belongings carefully.','Sorry, I have to move everything.','I will call my supervisor.'], correct:0, answer:'Absolutely. I will clean around your belongings carefully.', translation:'¿Podría por favor no mover mis papeles del escritorio? — Por supuesto. Limpiaré alrededor de sus pertenencias con cuidado.'},
{type:'fill', sentence:'I will note that in the cleaning ____. Have a wonderful morning!', options:['log','book','form'], correct:0, answer:'log', translation:'Lo anotaré en la planilla de limpieza. ¡Que tenga una maravillosa mañana!'}
]
},
speaking:[
{icon:'📋', type:'Cleaning Briefing', prompt:'You are the housekeeping supervisor. Give your team the morning briefing. Tell them: which rooms to clean, what the priority tasks are, which PPE to use, and what to sign after finishing.', promptEs:'Sos el/la supervisor/a de mucamas. Dales el briefing matutino a tu equipo. Deciles: qué habitaciones limpiar, cuáles son las tareas prioritarias, qué EPP usar y qué firmar al terminar.', model:'Good morning, team! Today our priority rooms are 310 and 312 — VIP checkout. Please deep clean both rooms. Replace all linen, sanitize all surfaces, and restock the minibar. Always wear gloves and mask with chemicals. Sign the log after each room. Let\'s do an excellent job!', modelEs:'¡Buenos días, equipo! Hoy nuestras habitaciones prioritarias son 310 y 312 — salida VIP. Hagan una limpieza profunda en ambas. Reemplacen toda la ropa de cama, higienicen todas las superficies y repongan el minibar. Usen siempre guantes y mascarilla con productos químicos. Firmen la planilla después de cada habitación. ¡Hagamos un trabajo excelente!'},
{icon:'🗣️', type:'Guest Communication', prompt:'A guest stops you in the hallway and says their room was not properly cleaned. Apologize professionally, ask what was missed, and explain what you will do to fix it immediately.', promptEs:'Un huésped te detiene en el pasillo y dice que su habitación no fue limpiada correctamente. Disculpate profesionalmente, preguntá qué faltó y explicá lo que harás para solucionarlo de inmediato.', model:'I\'m so sorry to hear that! Could you tell me what was missed? I will go back to your room right now and complete the cleaning. I will also replace the towels and sanitize the bathroom completely. Thank you for letting me know!', modelEs:'¡Lo siento mucho! ¿Podría decirme qué faltó? Voy a su habitación ahora mismo y termino la limpieza. También reemplazaré las toallas y sanitizaré el baño completamente. ¡Gracias por avisarme!'}
],
review:[
{sentence:'To welcome a guest to a hotel room type, you describe the ___ first.', options:['amenities','price','reservation'], correct:0},
{sentence:'A large luxurious hotel room is called a ___.', options:['twin','suite','single'], correct:1},
{sentence:'Staff use ___ (gloves, mask) when working with chemicals.', options:['PPE','PPT','PEE'], correct:0},
{sentence:'You ___ enter a guest\'s room without knocking. It\'s forbidden.', options:['must','have to','mustn\'t'], correct:2},
{sentence:'A written record of tasks completed is called a cleaning ___.', options:['list','log','note'], correct:1}
],
videos:[
{title:'Hotel Housekeeping — Professional Standards', channel:'Master Everyday English', duration:'6:00', url:'https://www.youtube.com/watch?v=DIve4BzWz_k'},
{title:'Cleaning Vocabulary in English — Advanced', channel:'English with Kateryna', duration:'5:00', url:'https://www.youtube.com/watch?v=uG_Fx0db4JU'}
],
videoExercise:{
title:'🎬 Video Quiz — Advanced Cleaning & Hotel Protocols',
instruction:'Watch the videos and choose the correct answer for each question.',
instructionEs:'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
questions:[
{q:'A thorough, detailed cleaning of a room is called a:', qEs:'Una limpieza detallada y completa de una habitación se llama:', options:['deep clean','light clean','quick clean'], optionsEs:['limpieza profunda','limpieza ligera','limpieza rápida'], correct:0},
{q:'\"Linen\" in a hotel refers to:', qEs:'En un hotel, \"linen\" se refiere a:', options:['bed sheets and towels','cleaning products','the minibar items'], optionsEs:['sábanas y toallas','productos de limpieza','artículos del minibar'], correct:0},
{q:'\"Cross-contamination\" means:', qEs:'\"Contaminación cruzada\" significa:', options:['spreading germs from one surface to another','cleaning two rooms at once','using one cloth for everything'], optionsEs:['propagar gérmenes de una superficie a otra','limpiar dos habitaciones a la vez','usar un trapo para todo'], correct:0},
{q:'PPE stands for:', qEs:'EPP significa:', options:['Personal Protective Equipment','Professional Participation Exercise','Private Property Equipment'], optionsEs:['Equipo de Protección Personal','Ejercicio de Participación Profesional','Equipo de Propiedad Privada'], correct:0},
{q:'You ___ enter an occupied room without knocking — it is against the rules.', qEs:'___ entrar en una habitación ocupada sin llamar — está en contra de las reglas.', options:['mustn\'t','must','have to'], optionsEs:['no se debe','se debe','hay que'], correct:0}
]
},
progressTest:{
title:'Progress Test 1 — A2 (Units 1–4)',
listening:{
transcript:'Listen to the restaurant manager briefing the evening team: Good evening, team. Tonight we have a full house — sixty-eight covers. Our signature dish is the grilled sea bass — it\'s made with lemon butter and comes with a side of seasonal vegetables. Please remember: if a guest mentions a dietary restriction, note it immediately and inform the kitchen. We have three vegan guests at table twelve, and one guest with a severe nut allergy at table five. Always confirm the order before sending it to the kitchen. Let\'s have an excellent service tonight!',
questions:[
{q:'How many covers does the restaurant have tonight?', options:['58','68','78'], correct:1},
{q:'What must staff do if a guest mentions a dietary restriction?', options:['Tell the manager','Note it and inform the kitchen','Ask the guest to leave'], correct:1}
],
},
speaking:{
prompt:'Oral Situation: You are a hotel front desk agent. A guest arrives wanting to upgrade their standard room to a suite. The suite costs $60 more per night and includes an ocean view, a balcony, and access to the executive lounge. Describe the upgrade professionally and confirm the booking.',
promptEs:'Situación oral: Sos recepcionista de hotel. Un huésped llega y quiere mejorar su habitación estándar a una suite. La suite cuesta $60 más por noche e incluye vista al mar, balcón y acceso al salón ejecutivo. Describí la mejora profesionalmente y confirmá la reserva.',
model:'Good afternoon! I see you\'d like to upgrade to our suite. It\'s a beautiful room with an ocean view, a private balcony, and exclusive access to our executive lounge. The rate is sixty dollars more per night. Shall I go ahead with the upgrade? Wonderful — your suite is confirmed!'
},
questions:[
{q:'Which structure describes what a dish contains?', options:['It comes with...','It goes to...','It makes with...'], correct:0},
{q:'A dish the restaurant is most famous for is called a:', options:['side dish','signature dish','garnish'], correct:1},
{q:'\"Gluten-free\" means the food has no:', options:['meat','sugar','wheat or gluten'], correct:2},
{q:'A \"portion\" is:', options:['the price of a dish','the amount of food for one person','a type of decoration'], correct:1},
{q:'To say a reservation is definite, you ___ it.', options:['cancel','confirm','book'], correct:1},
{q:'\"Would you like me to check availability?\" is an example of using:', options:['must','would','have to'], correct:1},
{q:'A room with two separate single beds is a:', options:['suite','double room','twin room'], correct:2},
{q:'The hotel staff who helps guests with special requests is the:', options:['concierge','housekeeper','maintenance'], correct:0},
{q:'\"Late check-out\" means leaving:', options:['before breakfast','after the standard checkout time','at midnight'], correct:1},
{q:'PPE stands for:', options:['Personal Protective Equipment','Public Party Event','Professional Practice Exercise'], correct:0},
{q:'To make a surface clean and free of germs is to:', options:['vacuum','sanitize','sweep'], correct:1},
{q:'You ___ use the same cloth in the bathroom and bedroom — it causes cross-contamination.', options:['must','mustn\'t','have to'], correct:1},
{q:'Bed sheets and towels in a hotel are called:', options:['supplies','linen','amenities'], correct:1},
{q:'To \"log\" something at work means to:', options:['clean it','write a record of it','report a problem'], correct:1},
{q:'A \"party\" in a restaurant context is:', options:['a celebration','a group of diners','a special event'], correct:1},
{q:'A dietary restriction based on eating no animal products at all is called:', options:['vegetarian','vegan','gluten-free'], correct:1},
{q:'When a guest calls to cancel a reservation, this is called a:', options:['confirmation','booking','cancellation'], correct:2},
{q:'\"___ I have an extra pillow, please?\" — polite request.', options:['Would','Could','Must'], correct:1},
{q:'Turndown service is provided:', options:['in the morning','in the evening','at checkout'], correct:1},
{q:'A written record of tasks completed by housekeeping is called a cleaning:', options:['form','note','log'], correct:2}
]
},
progressTestB:{
title:'Progress Test 1 — Version B (Units 1–4)',
listening:{
transcript:'Good afternoon, team. For tonight\\'s dinner service, our special is the grilled salmon — it is served with mashed potatoes and asparagus. Please pay attention to dietary needs. Table 7 has a guest with a severe seafood allergy, so they will need the vegan pasta. Also, table 10 needs a high chair for a toddler. Let\\'s make sure everything runs smoothly!',
questions:[
{q:'What is the special for tonight\\'s dinner?', options:['Grilled salmon','Vegan pasta','Mashed potatoes'], correct:0},
{q:'What does table 7 need?', options:['A high chair','A seafood-free option','More asparagus'], correct:1}
]
},
speaking:{
prompt:'Oral Situation: You are a restaurant server. A guest asks for a recommendation but mentions they are allergic to dairy. Recommend a dish that is dairy-free, explain what it contains, and ask if they would like to start with a drink.',
promptEs:'Situación oral: Sos un mesero/a de restaurante. Un cliente pide una recomendación pero menciona que es alérgico a los lácteos. Recomendá un plato sin lácteos, explicá qué contiene y preguntá si quieren empezar con una bebida.',
model:'Good evening! Since you are allergic to dairy, I highly recommend our roasted chicken. It\\'s made with herbs and lemon, and it comes with a side of grilled vegetables. It\\'s completely dairy-free. Would you like to start with a drink while you decide?'
},
questions:[
{q:'To give food a flavor using salt and pepper is to:', options:['garnish','season','serve'], correct:1},
{q:'A dish served alongside the main course is called a:', options:['side dish','special','signature dish'], correct:0},
{q:'Food with no animal products is:', options:['gluten-free','vegan','vegetarian'], correct:1},
{q:'When a reservation is cancelled, it is a:', options:['confirmation','cancellation','booking'], correct:1},
{q:'A group of people dining together is called a:', options:['party','team','table'], correct:0},
{q:'\"___ you like me to book a table for you?\" — polite offer.', options:['Would','Must','Do'], correct:0},
{q:'A room with two separate single beds is a:', options:['double room','suite','twin room'], correct:2},
{q:'The hotel staff who helps with restaurant recommendations is the:', options:['receptionist','concierge','manager'], correct:1},
{q:'\"Availability\" in a hotel means:', options:['free rooms or tables','the price of the room','the location'], correct:0},
{q:'A platform outside a room where guests can sit is a:', options:['balcony','lounge','lobby'], correct:0},
{q:'A thorough cleaning of a room is called a:', options:['quick clean','deep clean','room service'], correct:1},
{q:'PPE means:', options:['Public Protective Equipment','Personal Protective Equipment','Private Property Equipment'], correct:1},
{q:'To make a surface free of germs is to:', options:['sanitize','wash','dust'], correct:0},
{q:'Bed sheets and towels are called:', options:['linen','amenities','supplies'], correct:0},
{q:'Using the same cloth for the bathroom and bedroom causes:', options:['cross-contamination','sanitization','cleanliness'], correct:0},
{q:'\"It ___ with a side salad.\"', options:['goes','makes','comes'], correct:2},
{q:'\"You ___ enter an occupied room without knocking.\"', options:['have to','mustn\\'t','could'], correct:1},
{q:'A small refrigerator in a hotel room is a:', options:['minibar','freezer','cooler'], correct:0},
{q:'An evening service to prepare the bed for sleeping is:', options:['turndown service','cleaning service','room service'], correct:0},
{q:'A written record of tasks is a:', options:['note','log','book'], correct:1}
]
}
}
]};
