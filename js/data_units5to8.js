courseData.units = courseData.units.concat([
    {
        id: 5, emoji: '💳',
        title: 'Complaints & Closing the Table',
        topic: 'Handling simple complaints, apologizing, offering solutions, and managing the bill/check at an easy level',
        revision: [
            { eng: 'Here is your menu, sir.', template: '[Here] is your menu, [sir].', esp: 'Aquí tiene su menú, señor.' },
            { eng: 'Are you ready to order?', template: 'Are you [ready] to [order]?', esp: '¿Están listos para ordenar?' },
            { eng: 'Would you like some water?', template: '[Would] you like some [water]?', esp: '¿Desea un poco de agua?' },
            { eng: 'Enjoy your meal!', template: '[Enjoy] your [meal]!', esp: '¡Disfrute su comida!' },
            { eng: 'Can I take your plates?', template: '[Can] I take your [plates]?', esp: '¿Puedo retirar sus platos?' },
            { eng: 'Would you like to see the dessert menu?', template: 'Would you like to [see] the [dessert] menu?', esp: '¿Les gustaría ver el menú de postres?' },
            { eng: 'Is everything okay with your food?', template: 'Is [everything] okay with your [food]?', esp: '¿Está todo bien con su comida?' },
            { eng: 'The bathroom is on the right.', template: 'The [bathroom] is on the [right].', esp: 'El baño está a la derecha.' },
            { eng: 'Thank you for coming today.', template: '[Thank] you for [coming] today.', esp: 'Gracias por venir hoy.' },
            { eng: 'Have a wonderful evening.', template: 'Have a [wonderful] [evening].', esp: 'Que tengan una noche maravillosa.' }
        ],
        vocabulary: [
            { word: 'Bill / Check', ipa: 'bɪl / tʃɛk', def: 'The document showing how much to pay', def_es: 'la cuenta', example: 'Could we have the bill, please?' },
            { word: 'Cash / Card', ipa: 'kæʃ / kɑːrd', def: 'Ways to pay for the meal', def_es: 'efectivo / tarjeta', example: 'Are you paying with cash or card?' },
            { word: 'Tip / Gratuity', ipa: 'tɪp / ɡrəˈtuːɪti', def: 'Extra money given for good service', def_es: 'propina', example: 'Service is not included, so you can leave a tip.' },
            { word: 'Apologize', ipa: 'əˈpɒlədʒaɪz', def: 'To say sorry for a mistake', def_es: 'pedir disculpas', example: 'I apologize for the delay.' },
            { word: 'Mistake', ipa: 'mɪˈsteɪk', def: 'Something that is incorrect', def_es: 'error', example: 'There is a mistake on the bill.' },
            { word: 'Right away', ipa: 'raɪt əˈweɪ', def: 'Immediately', def_es: 'enseguida', example: 'I will fix that right away.' },
            { word: 'Cold', ipa: 'koʊld', def: 'Not hot; having a low temperature', def_es: 'frío/a', example: 'My soup is cold.' },
            { word: 'Included', ipa: 'ɪnˈkluːdɪd', def: 'Part of the total price', def_es: 'incluido/a', example: 'Is the tip included?' }
        ],
        listening: {
            title: 'Closing the Table and A Small Problem',
            preListening: 'A guest asks for the bill, but finds a small mistake. Listen to how the waiter handles it simply and politely.',
            transcript: 'Guest: Excuse me, could we have the bill, please?\nWaiter: Of course, sir. I will bring it right away.\nGuest: Thank you. Oh, wait... I think there is a mistake. We didn\'t order two coffees. We only had one.\nWaiter: I am very sorry about that. Let me check... You are right. I apologize. I will correct the bill right away.\nGuest: Thank you.\nWaiter: Here is the correct bill. How would you like to pay, cash or card?\nGuest: Card, please. Is the tip included?\nWaiter: No, the tip is not included.\nGuest: Okay, please add ten percent.\nWaiter: Thank you very much! Have a great evening!',
            transcriptEs: 'Huésped: Disculpe, ¿nos podría traer la cuenta, por favor?\nMesero: Por supuesto, señor. Se la traigo enseguida.\nHuésped: Gracias. Oh, espere... Creo que hay un error. No pedimos dos cafés. Solo tomamos uno.\nMesero: Lo siento mucho. Déjeme verificar... Tiene razón. Pido disculpas. Corregiré la cuenta enseguida.\nHuésped: Gracias.\nMesero: Aquí tiene la cuenta correcta. ¿Cómo le gustaría pagar, en efectivo o con tarjeta?\nHuésped: Tarjeta, por favor. ¿La propina está incluida?\nMesero: No, la propina no está incluida.\nHuésped: Bien, por favor agregue un diez por ciento.\nMesero: ¡Muchas gracias! ¡Que tenga una excelente noche!',
            questions: [
                { q: 'What mistake was on the bill?', options: ['Extra water', 'Extra coffee', 'Extra dessert'], correct: 1 },
                { q: 'How does the guest want to pay?', options: ['Cash', 'Card', 'Mobile app'], correct: 1 },
                { q: 'Is the tip included in the bill?', options: ['Yes', 'No', 'Only 5%'], correct: 1 }
            ]
        },
        dialogue: {
            title: 'Asking for the Bill and Paying',
            situation: '📍 A guest finishes their meal and asks to pay.',
            lines: [
                { speaker: 'WAITER', text: 'Did you enjoy your meal?' },
                { speaker: 'GUEST', text: 'Yes, it was delicious. Could we have the bill, please?' },
                { speaker: 'WAITER', text: 'Certainly. I will bring it right away.' },
                { speaker: 'GUEST', text: 'Thank you. Can I pay with card?' },
                { speaker: 'WAITER', text: 'Yes, of course. We accept all major cards.' },
                { speaker: 'GUEST', text: 'Great. Here you go.' },
                { speaker: 'WAITER', text: 'Thank you. If you need to add a tip, you can enter it on the machine.' },
                { speaker: 'GUEST', text: 'Done.' },
                { speaker: 'WAITER', text: 'Thank you very much. Have a wonderful day!' }
            ],
            practicePrompt: 'Practice closing the table. Use: Did you enjoy... Could we have the bill... I will bring it... Can I pay with... Have a wonderful day!'
        },
        grammar: {
            title: 'Future Simple (Will) — Promises and Quick Decisions',
            explanation: 'At level A1/A2, we use "will" (or \'ll) to make a promise or a quick decision at the moment of speaking. It is very useful when solving a problem or saying what you are going to do next.',
            examples: ['I will bring the bill right away.', 'I will correct the mistake.', 'I will tell the chef.'],
            exercises: [
                { question: 'I am sorry. I ___ bring a new soup right away.', options: ['will', 'am', 'do'], correct: 0 },
                { question: 'There is a mistake? Let me check. I ___ fix it for you.', options: ['will', 'want', 'can'], correct: 0 },
                { question: 'Thank you for telling me. I ___ change your plate.', options: ['are', 'will', 'do'], correct: 1 },
                { question: 'Guest: "Could we have the bill?" Waiter: "Yes, I ___ bring it now."', options: ['will', 'was', 'have'], correct: 0 },
                { question: 'I ___ ask the manager to come to your table.', options: ['will', 'did', 'does'], correct: 0 }
            ]
        },
        oralPractice: {
            title: 'Closing the Table — Practice',
            instruction: 'Use the dialogue vocabulary to fill in the blanks.',
            exercises: [
                { type: 'fill', sentence: 'Excuse me, could we have the ____, please?', options: ['menu', 'bill', 'water'], correct: 1, answer: 'bill', translation: 'Disculpe, ¿nos podría traer la cuenta, por favor?' },
                { type: 'fill', sentence: 'I am very sorry. I will correct the ____ right away.', options: ['mistake', 'table', 'food'], correct: 0, answer: 'mistake', translation: 'Lo siento mucho. Corregiré el error enseguida.' },
                { type: 'match', speaker: 'GUEST', prompt: 'Can I pay with card?', options: ['Yes, we accept all cards.', 'No, I don\'t have a card.', 'You can eat now.'], correct: 0, answer: 'Yes, we accept all cards.', translation: '¿Puedo pagar con tarjeta? — Sí, aceptamos todas las tarjetas.' },
                { type: 'fill', sentence: 'Is the ____ included in the bill?', options: ['tip', 'food', 'plate'], correct: 0, answer: 'tip', translation: '¿La propina está incluida en la cuenta?' }
            ]
        },
        speaking: [
            { icon: '💸', type: 'Closing the Table Role Play', prompt: 'You are the waiter. Ask if the guests enjoyed the meal, bring the bill, ask if they want to pay with cash or card, and say goodbye.', promptEs: 'Sos el mesero. Preguntá si los invitados disfrutaron la comida, traé la cuenta, preguntá si quieren pagar en efectivo o con tarjeta, y despedite.', model: 'Did you enjoy your meal? Here is your bill. Would you like to pay with cash or card? Thank you very much, have a wonderful evening!', modelEs: '¿Disfrutaron su comida? Aquí tiene su cuenta. ¿Le gustaría pagar en efectivo o con tarjeta? ¡Muchas gracias, que tenga una noche maravillosa!' },
            { icon: '🙏', type: 'Simple Apology', prompt: 'A guest says their soup is cold. Apologize and promise to bring a hot one right away.', promptEs: 'Un huésped dice que su sopa está fría. Disculpate y prometé traer una caliente enseguida.', model: 'I am very sorry about that. I will bring you a hot soup right away.', modelEs: 'Lo siento mucho. Le traeré una sopa caliente enseguida.' }
        ],
        review: [
            { sentence: 'When a guest wants to pay, they ask for the ___.', options: ['menu', 'bill', 'fork'], correct: 1 },
            { sentence: 'If there is a problem, you should say "I ___".', options: ['apologize', 'smile', 'run'], correct: 0 },
            { sentence: 'Extra money for good service is called a ___.', options: ['bill', 'mistake', 'tip'], correct: 2 },
            { sentence: '"I ___ bring the menu right away." (future promise)', options: ['will', 'am', 'have'], correct: 0 },
            { sentence: 'To pay with plastic, you use a ___.', options: ['cash', 'card', 'coin'], correct: 1 }
        ],
        videos: [
            { title: 'How to Ask for the Bill in English', channel: 'English Speaking Success', duration: '5:00', url: 'https://www.youtube.com/watch?v=3uMKyPpFLw4' },
            { title: 'Restaurant English - Dealing with Complaints', channel: 'Oxford Online English', duration: '6:00', url: 'https://www.youtube.com/watch?v=Zy1h49_L8ME' }
        ],
        videoExercise: {
            title: '🎬 Video Quiz — Bills & Problems',
            instruction: 'Watch the videos and choose the correct answer for each question.',
            instructionEs: 'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
            questions: [
                { q: '"Could we have the bill, please?" means:', qEs: '"Could we have the bill, please?" significa:', options: ['We want more food', 'We want to pay', 'We want water'], optionsEs: ['Queremos más comida', 'Queremos pagar', 'Queremos agua'], correct: 1 },
                { q: 'If a customer says "keep the change", they are leaving a:', qEs: 'Si un cliente dice "keep the change" (quédese con el vuelto), está dejando una:', options: ['complaint', 'tip', 'mistake'], optionsEs: ['queja', 'propina', 'error'], correct: 1 },
                { q: '"I\'ll fix that right away" means:', qEs: '"I\'ll fix that right away" significa:', options: ['I will repair it tomorrow', 'I will solve it immediately', 'I don\'t know'], optionsEs: ['Lo repararé mañana', 'Lo solucionaré inmediatamente', 'No lo sé'], correct: 1 },
                { q: 'When paying, "cash" means:', qEs: 'Al pagar, "cash" significa:', options: ['paper money and coins', 'credit card', 'a check'], optionsEs: ['dinero en billetes y monedas', 'tarjeta de crédito', 'un cheque'], correct: 0 },
                { q: 'If you "apologize", you say:', qEs: 'Si te "apologize" (disculpas), dices:', options: ['Thank you', 'I am sorry', 'Hello'], optionsEs: ['Gracias', 'Lo siento', 'Hola'], correct: 1 }
            ]
        }
    },
    {
        id: 6, emoji: '🔁',
        title: 'Review: Units 3, 4 & 5 — Hotel Services, Housekeeping & Complaints',
        topic: 'Repaso de las Unidades 3, 4 y 5: registro de huéspedes (check-in), protocolos de limpieza (housekeeping), y resolución de quejas sencillas en el restaurante o recepción',
        revision: [
            { eng: 'I would like to check in, please.', template: 'I would [like] to [check] in, please.', esp: 'Me gustaría registrarme, por favor.' },
            { eng: 'Breakfast is served from 7 to 10 AM on the second floor.', template: 'Breakfast is [served] from 7 to 10 AM on the [second] floor.', esp: 'El desayuno se sirve de 7 a 10 AM en el segundo piso.' },
            { eng: 'Could I have a wake-up call at 6:30 AM tomorrow?', template: '[Could] I have a wake-up [call] at 6:30 AM tomorrow?', esp: '¿Podría tener un servicio de despertador a las 6:30 AM mañana?' },
            { eng: 'Always wear gloves and a mask when using chemical products.', template: 'Always [wear] gloves and a [mask] when using chemical products.', esp: 'Siempre use guantes y mascarilla al usar productos químicos.' },
            { eng: 'Please sign the cleaning log after sanitizing the room.', template: 'Please [sign] the cleaning [log] after sanitizing the room.', esp: 'Por favor, firme el registro de limpieza después de desinfectar la habitación.' },
            { eng: 'Do not use the same cloth for the bathroom and bedroom.', template: 'Do [not] use the same [cloth] for the bathroom and bedroom.', esp: 'No use el mismo trapo para el baño y el dormitorio.' },
            { eng: 'Excuse me, there is a mistake on our bill.', template: 'Excuse me, there is a [mistake] on our [bill].', esp: 'Disculpe, hay un error en nuestra cuenta.' },
            { eng: 'I apologize for the delay, I will bring it right away.', template: 'I [apologize] for the delay, I will bring it [right] away.', esp: 'Pido disculpas por la demora, lo traeré enseguida.' },
            { eng: 'Is the tip included or can I pay with card?', template: 'Is the [tip] included or can I [pay] with card?', esp: '¿La propina está incluida o puedo pagar con tarjeta?' },
            { eng: 'I will check with the kitchen and correct the bill for you.', template: 'I will [check] with the kitchen and [correct] the bill for you.', esp: 'Verificaré con la cocina y corregiré la cuenta por usted.' }
        ],
        vocabulary: [
            { word: 'Check-in / Check-out', ipa: 'ˈtʃɛk ɪn / ˈtʃɛk aʊt', def: 'The processes of registering arrival and departure at a hotel', def_es: 'registro de entrada / salida', example: 'The standard check-in time is 3 PM.' },
            { word: 'Wake-up call', ipa: 'ˈweɪk ʌp kɔːl', def: 'A telephone call requested to wake a guest up', def_es: 'servicio de despertador', example: 'I requested a wake-up call for 6 AM.' },
            { word: 'Sanitize', ipa: 'ˈsænɪtaɪz', def: 'To clean something thoroughly, making it free of germs', def_es: 'desinfectar / sanitizar', example: 'Please sanitize the TV remote and doorknobs.' },
            { word: 'PPE', ipa: 'ˌpiː piː ˈiː', def: 'Personal Protective Equipment (gloves, masks, etc.)', def_es: 'EPP (Equipo de Protección Personal)', example: 'Staff must wear PPE when handling chemical products.' },
            { word: 'Bill / Check', ipa: 'bɪl / tʃɛk', def: 'A written statement showing the cost of food or services', def_es: 'cuenta / factura', example: 'Could we have the bill, please?' },
            { word: 'Apologize', ipa: 'əˈpɒlədʒaɪz', def: 'To express regret for something done wrong', def_es: 'pedir disculpas', example: 'I apologize for the cold food.' },
            { word: 'Tip / Gratuity', ipa: 'tɪp / ɡrəˈtuːɪti', def: 'A small amount of extra money given for good service', def_es: 'propina', example: 'We left a ten percent tip for the waiter.' },
            { word: 'Right away', ipa: 'raɪt əˈweɪ', def: 'Immediately; without delay', def_es: 'enseguida / de inmediato', example: 'I will bring some fresh towels right away.' }
        ],
        listening: {
            title: 'Review Listening — Hotel Stay & Restaurant Problems',
            preListening: 'Listen to a guest checking in and later complaining about a bill mistake at the restaurant. Focus on how staff respond professionally.',
            transcript: 'Receptionist: Good afternoon! Welcome to the Grand Plaza Hotel. How can I help you?\nGuest: Hello, I have a reservation under the name John Smith. I would like to check in.\nReceptionist: Yes, Mr. Smith. I see your booking for a twin room. Here is your keycard, room 305 on the third floor. Breakfast is served from seven to ten AM in the main dining room. Would you like a wake-up call for tomorrow?\nGuest: Yes, please, at seven AM. Thank you.\n[Later, at the hotel restaurant]\nGuest: Excuse me, waiter. I think there is a mistake on the bill. We ordered one salad, not two.\nWaiter: I am very sorry about that, sir. Let me check... you are correct. I apologize. I will correct the bill right away.\nGuest: Thank you. Can I pay with card?\nWaiter: Yes, of course. Here is the card reader. Thank you very much, have a wonderful evening!',
            transcriptEs: 'Recepcionista: ¡Buenas tardes! Bienvenido al Grand Plaza Hotel. ¿Cómo puedo ayudarle?\nHuésped: Hola, tengo una reserva a nombre de John Smith. Me gustaría registrarme.\nRecepcionista: Sí, Sr. Smith. Veo su reserva para una habitación doble con dos camas. Aquí tiene su tarjeta llave, habitación 305 en el tercer piso. El desayuno se sirve de siete a diez de la mañana en el comedor principal. ¿Le gustaría un servicio de despertador para mañana?\nHuésped: Sí, por favor, a las siete de la mañana. Gracias.\n[Más tarde, en el restaurante del hotel]\nHuésped: Disculpe, mesero. Creo que hay un error en la cuenta. Pedimos una ensalada, no dos.\nMesero: Lo siento mucho por eso, señor. Déjeme verificar... tiene razón. Pido disculpas. Corregiré la cuenta enseguida.\nHuésped: Gracias. ¿Puedo pagar con tarjeta?\nMesero: Sí, por supuesto. Aquí tiene el lector de tarjetas. ¡Muchas gracias, que tenga una noche maravillosa!',
            questions: [
                { q: 'What room type did Mr. Smith reserve?', options: ['Single room', 'Twin room', 'Suite'], correct: 1 },
                { q: 'What time is the requested wake-up call?', options: ['6:00 AM', '7:00 AM', '8:00 AM'], correct: 1 },
                { q: 'What was the mistake on the restaurant bill?', options: ['Extra coffee', 'Extra salad', 'Wrong total amount'], correct: 1 }
            ]
        },
        dialogue: {
            title: 'Review Dialogue — Services and Complaints',
            situation: '📍 A guest interacts with hotel reception and restaurant staff.',
            lines: [
                { speaker: 'RECEPTIONIST', text: 'Good morning! Are you ready to check out?' },
                { speaker: 'GUEST', text: 'Yes, I am. Here is my keycard for room 305.' },
                { speaker: 'RECEPTIONIST', text: 'Excellent. Did you enjoy your stay with us?' },
                { speaker: 'GUEST', text: 'Yes, the room was very clean. The housekeeping team did a wonderful job.' },
                { speaker: 'RECEPTIONIST', text: 'Thank you! They always sanitize everything and sign the log daily.' },
                { speaker: 'GUEST', text: 'Great. Oh, I have the restaurant bill here, but there is a mistake.' },
                { speaker: 'RECEPTIONIST', text: 'I apologize. Let me correct the charge for you right away.' },
                { speaker: 'GUEST', text: 'Thank you. I appreciate your help.' }
            ],
            practicePrompt: 'Review services. Use: Are you ready to... Did you enjoy... I apologize... Let me correct... right away.'
        },
        grammar: {
            title: 'Review: Can, Could, Must & Will',
            explanation: 'We use "can" and "could" for requests (could is more polite). We use "must" and "mustn\'t" for rules and obligations. We use "will" for spontaneous decisions and promises.',
            examples: ['Could I have a wake-up call?', 'You mustn\'t use the same cloth for the bathroom.', 'I will correct the bill right away.'],
            exercises: [
                { question: '___ I have an extra towel for room 204, please?', options: ['Could', 'Must', 'Will'], correct: 0 },
                { question: 'Staff ___ sign the housekeeping log after cleaning.', options: ['will', 'must', 'could'], correct: 1 },
                { question: 'There is a mistake? I ___ fix it for you immediately.', options: ['will', 'must', 'can'], correct: 0 },
                { question: 'You ___ enter an occupied room without knocking.', options: ['must', 'couldn\'t', 'mustn\'t'], correct: 2 },
                { question: '___ you show me where the gym is?', options: ['Could', 'Must', 'Will'], correct: 0 }
            ]
        },
        oralPractice: {
            title: 'Review Services Practice',
            instruction: 'Choose the correct option to complete the sentences.',
            exercises: [
                { type: 'fill', sentence: 'Could I have a ____ call at 6:30 AM?', options: ['wake-up', 'morning', 'breakfast'], correct: 0, answer: 'wake-up', translation: '¿Podría recibir una llamada de despertador a las 6:30 AM?' },
                { type: 'fill', sentence: 'Always wear ____ when using chemical cleaning products.', options: ['aprons', 'shoes', 'PPE'], correct: 2, answer: 'PPE', translation: 'Siempre use EPP cuando use productos químicos de limpieza.' },
                { type: 'match', speaker: 'GUEST', prompt: 'There is a mistake on the bill. We ordered one coffee.', options: ['I apologize. I will correct the bill right away.', 'No, we don\'t have coffee.', 'The bill is correct.'], correct: 0, answer: 'I apologize. I will correct the bill right away.', translation: 'Hay un error en la cuenta. Pedimos un café. — Pido disculpas. Corregiré la cuenta enseguida.' },
                { type: 'fill', sentence: 'We always ____ all surfaces to keep them clean.', options: ['sanitize', 'look', 'sign'], correct: 0, answer: 'sanitize', translation: 'Siempre desinfectamos todas las superficies para mantenerlas limpias.' }
            ]
        },
        speaking: [
            { icon: '🔑', type: 'Hotel Check-in and Request', prompt: 'You are the receptionist. Check the guest in, tell them their room number and breakfast times, and ask if they need a wake-up call.', promptEs: 'Sos el recepcionista. Registrá al huésped, decile su número de habitación y horarios de desayuno, y preguntale si necesita servicio de despertador.', model: 'Good afternoon! I have your reservation for a twin room. Here is your keycard, room 305. Breakfast is served from seven to ten AM. Would you like a wake-up call for tomorrow morning?', modelEs: '¡Buenas tardes! Tengo su reserva para una habitación doble. Aquí tiene su tarjeta llave, habitación 305. El desayuno se sirve de siete a diez de la mañana. ¿Le gustaría una llamada de despertador para mañana por la mañana?' },
            { icon: '💳', type: 'Restaurant Bill Problem', prompt: 'A guest complains about an extra item on the bill. Apologize, offer to check with the kitchen, and promise to correct it right away using will.', promptEs: 'Un cliente se queja de un cargo extra en la cuenta. Disculpate, ofrecé verificar con la cocina y prometé corregirlo enseguida usando will.', model: 'I am very sorry about that mistake, sir. Let me check with the kitchen. You are correct, I will correct the bill right away.', modelEs: 'Lo siento mucho por ese error, señor. Déjeme verificar con la cocina. Tiene razón, corregiré la cuenta de inmediato.' }
        ],
        review: [
            { sentence: 'To register your arrival at a hotel is to ___.', options: ['check in', 'check out', 'wake up'], correct: 0 },
            { sentence: 'Housekeepers must use ___ to protect themselves.', options: ['PPE', 'tip', 'bill'], correct: 0 },
            { sentence: '"I ___ bring some fresh towels right away."', options: ['will', 'must', 'could'], correct: 0 },
            { sentence: '"Could you ___ the bill, please?"', options: ['correct', 'sanitize', 'apologize'], correct: 0 },
            { sentence: 'To make a room free of germs is to ___ it.', options: ['sanitize', 'sign', 'check'], correct: 0 }
        ],
        videos: [
            { title: 'Hotel English - Checking In and Out', channel: 'Oxford Online English', duration: '8:00', url: 'https://www.youtube.com/watch?v=3uMKyPpFLw4' },
            { title: 'Dealing with Complaints in English', channel: 'English with Lucy', duration: '9:00', url: 'https://www.youtube.com/watch?v=Zy1h49_L8ME' }
        ],
        videoExercise: {
            title: '🎬 Video Quiz — Services and Complaints Review',
            instruction: 'Watch the videos and choose the correct answer for each question.',
            instructionEs: 'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
            questions: [
                { q: 'When registering at a hotel, you:', qEs: 'Al registrarse en un hotel, usted:', options: ['check in', 'check out', 'sign a bill'], optionsEs: ['hace el check-in', 'hace el check-out', 'firma una cuenta'], correct: 0 },
                { q: '"PPE" is used in housekeeping to:', qEs: 'El "EPP" se usa en limpieza para:', options: ['protect the staff', 'charge the guests', 'make wake-up calls'], optionsEs: ['proteger al personal', 'cobrar a los huéspedes', 'hacer llamadas de despertador'], correct: 0 },
                { q: 'To resolve a bill mistake, the waiter should:', qEs: 'Para resolver un error de cuenta, el mesero debe:', options: ['apologize and correct it immediately', 'ignore the guest', 'charge more'], optionsEs: ['disculparse y corregirlo de inmediato', 'ignorar al cliente', 'cobrar más'], correct: 0 },
                { q: '"I will bring the towels." This is a:', qEs: '"Traeré las toallas." Esto es:', options: ['spontaneous promise', 'rule', 'request'], optionsEs: ['promesa espontánea', 'regla', 'solicitud'], correct: 0 },
                { q: 'A wake-up call is used to:', qEs: 'Una llamada de despertador se usa para:', options: ['wake a guest up', 'order food', 'pay the bill'], optionsEs: ['despertar al huésped', 'pedir comida', 'pagar la cuenta'], correct: 0 }
            ]
        }
    },
    {
        id: 7, emoji: '🏃',
        title: 'Handling Complaints & Difficult Situations',
        topic: 'Managing guest complaints, de-escalating situations, and offering solutions at A2 level',
        revision: [
            { eng: 'I highly recommend our house Malbec with the lamb.', template: 'I [highly] recommend our house [Malbec] with the lamb.', esp: 'Les recomiendo mucho nuestro Malbec de la casa con el cordero.' },
            { eng: 'The Chardonnay complements the sea bass perfectly.', template: 'The [Chardonnay] [complements] the sea bass perfectly.', esp: 'El Chardonnay combina perfectamente con el lenguado.' },
            { eng: 'Would you like the wine by the glass or by the bottle?', template: 'Would you like the wine by the [glass] or by the [bottle]?', esp: '¿Le gustaría el vino por copa o por botella?' },
            { eng: 'Can I offer you an aperitif to start your evening?', template: 'Can I offer you an [aperitif] to [start] your evening?', esp: '¿Puedo ofrecerle un aperitivo para comenzar la noche?' },
            { eng: 'We have four local craft beers on tap tonight.', template: 'We have four local [craft] beers on [tap] tonight.', esp: 'Tenemos cuatro cervezas artesanales locales de barril esta noche.' },
            { eng: 'The sparkling water is more refreshing than still.', template: 'The [sparkling] water is more [refreshing] than still.', esp: 'El agua con gas es más refrescante que el agua sin gas.' },
            { eng: 'This Malbec is bolder than our house Cabernet.', template: 'This [Malbec] is [bolder] than our house Cabernet.', esp: 'Este Malbec es más robusto que nuestro Cabernet de la casa.' },
            { eng: 'Our non-alcoholic sangria is very popular tonight.', template: 'Our [non-alcoholic] sangria is very [popular] tonight.', esp: 'Nuestra sangría sin alcohol es muy popular esta noche.' },
            { eng: 'I recommend a light wine to pair with the chicken.', template: 'I recommend a [light] wine to [pair] with the chicken.', esp: 'Recomiendo un vino ligero para maridar con el pollo.' },
            { eng: 'Would you like to try a small taste before deciding?', template: 'Would you like to try a [small] taste before [deciding]?', esp: '¿Le gustaría probar un pequeño sorbo antes de decidir?' }
        ],
        vocabulary: [
            { word: 'Dissatisfied', ipa: 'dɪsˈsætɪsfaɪd', def: 'Not happy with a service or product', def_es: 'insatisfecho', example: 'The guest was clearly dissatisfied with the wait time.' },
            { word: 'Empathize', ipa: 'ˈɛmpəθaɪz', def: 'To understand and share someone\'s feelings', def_es: 'empatizar', example: 'Always empathize with a dissatisfied guest first.' },
            { word: 'Compensation', ipa: 'ˌkɒmpənˈseɪʃən', def: 'Something given to make up for a problem', def_es: 'compensación', example: 'We offered the guest a complimentary dessert as compensation.' },
            { word: 'Escalate', ipa: 'ˈɛskəleɪt', def: 'To make a problem worse or pass it to a higher authority', def_es: 'escalar / agravar', example: 'If you cannot solve it, escalate to the manager.' },
            { word: 'Unacceptable', ipa: 'ˌʌnəkˈsɛptəbəl', def: 'Not good enough; below standard', def_es: 'inaceptable', example: 'The noise level in the room was unacceptable.' },
            { word: 'Alternative', ipa: 'ɔːlˈtɜːrnətɪv', def: 'Another option or solution', def_es: 'alternativa', example: 'Can I offer you an alternative dish?' },
            { word: 'Miscommunication', ipa: 'ˌmɪskəˌmjuːnɪˈkeɪʃən', def: 'A failure in communication that caused a problem', def_es: 'malentendido / falla de comunicación', example: 'There was a miscommunication about the reservation time.' },
            { word: 'Refund', ipa: 'ˈriːfʌnd', def: 'Money returned to a customer for a problem', def_es: 'reembolso', example: 'We will process a full refund for the inconvenience.' }
        ],
        listening: {
            title: 'Handling an Angry Guest',
            preListening: 'A guest is very angry about their hotel room. The front desk manager handles the situation. Listen for the complaint, the solution offered, and how the manager de-escalates the situation.',
            transcript: 'Excuse me — I need to speak with someone in charge right now! Of course, Sir. I\'m the duty manager. How can I help you? This is unacceptable! My room is next to the elevator and the noise is constant. I haven\'t slept at all! I completely understand your frustration, and I sincerely apologize for the inconvenience. That is absolutely not the experience we want you to have. Let me find you a quieter room right away. I can offer you a room on the fifth floor, which overlooks the garden — it\'s much quieter, I promise. And as compensation for your experience tonight, I would like to offer you complimentary breakfast for tomorrow and a discount on your bill. I truly value your feedback, and I want to make this right for you. Shall I have someone help you move your bags? Once again, I am deeply sorry for this, and I hope the rest of your stay will be excellent.',
            transcriptEs: '¡Disculpe — necesito hablar con alguien a cargo ahora mismo! Por supuesto, señor. Soy el gerente de turno. ¿En qué puedo ayudarle? ¡Esto es inaceptable! Mi habitación está al lado del ascensor y el ruido es constante. ¡No he dormido nada! Entiendo completamente su frustración y me disculpo sinceramente por el inconveniente. Eso no es para nada la experiencia que queremos que tenga. Permítame encontrarle una habitación más tranquila de inmediato. Puedo ofrecerle una habitación en el quinto piso, con vista al jardín — es mucho más tranquila, se lo prometo. Y como compensación por su experiencia esta noche, me gustaría ofrecerle desayuno de cortesía para mañana y un descuento en su factura. Realmente valoro su opinión y quiero solucionar esto para usted. ¿Quiere que alguien le ayude a mover su equipaje? Una vez más, lo siento profundamente y espero que el resto de su estadía sea excelente.',
            questions: [
                { q: 'What is the guest\'s complaint?', options: ['Cold room', 'Too much noise near the elevator', 'Broken TV'], correct: 1 },
                { q: 'What alternative room is offered?', options: ['Ocean view on floor three', 'Garden view on floor five', 'Suite on floor seven'], correct: 1 },
                { q: 'What compensation does the manager offer?', options: ['Full refund', 'Complimentary breakfast and a discount', 'Free room upgrade'], correct: 1 }
            ]
        },
        dialogue: {
            title: 'Resolving a Complaint at the Restaurant',
            situation: '📍 A customer complains to the manager about their food and service.',
            lines: [
                { speaker: 'CUSTOMER', text: 'Excuse me. I\'ve been waiting forty minutes and my food still hasn\'t arrived.' },
                { speaker: 'MANAGER', text: 'I\'m so sorry to hear that. I completely understand how frustrating that must be.' },
                { speaker: 'CUSTOMER', text: 'This is unacceptable. I have a meeting in thirty minutes.' },
                { speaker: 'MANAGER', text: 'You are absolutely right, and I sincerely apologize. Let me check with the kitchen immediately.' },
                { speaker: 'CUSTOMER', text: 'I just wanted the grilled chicken — it\'s not complicated!' },
                { speaker: 'MANAGER', text: 'I will personally bring it to your table in five minutes. As compensation, your meal will be complimentary tonight.' },
                { speaker: 'CUSTOMER', text: 'Well... thank you. I appreciate that.' },
                { speaker: 'MANAGER', text: 'I truly value your feedback. This will not happen again. Enjoy your meal!' }
            ],
            practicePrompt: 'Practice handling complaints. Use: I understand..., I sincerely apologize..., Let me..., As compensation..., I will personally...'
        },
        grammar: {
            title: 'Past Simple — Describing What Happened',
            explanation: 'At A2, we use the Past Simple to describe what happened — important for explaining complaints. Regular verbs: add -ED. Irregular verbs: learn the forms (wait → waited, bring → brought, say → said, have → had).',
            examples: ['The guest waited forty minutes for the food.', 'We moved him to a quieter room on the fifth floor.', 'She said the service was slow and the food was cold.'],
            exercises: [
                { question: 'The guest ___ for forty minutes before the food arrived.', options: ['wait', 'waited', 'waiting'], correct: 1 },
                { question: 'I ___ the manager and she resolved the problem quickly.', options: ['call', 'called', 'calling'], correct: 1 },
                { question: 'The housekeeper ___ the wrong room by mistake.', options: ['clean', 'cleaned', 'cleaning'], correct: 1 },
                { question: 'The chef ___ a completely new dish as compensation.', options: ['prepare', 'preparing', 'prepared'], correct: 2 },
                { question: 'There ___ a miscommunication about the reservation time.', options: ['is', 'was', 'were'], correct: 1 }
            ]
        },
        oralPractice: {
            title: 'Complaint Handling — Practice',
            instruction: 'Use the complaint dialogue. Fill in the blanks and choose the best manager response.',
            exercises: [
                { type: 'fill', sentence: 'I\'m so sorry to hear that. I completely understand how ____ that must be.', options: ['frustrating', 'wonderful', 'exciting'], correct: 0, answer: 'frustrating', translation: 'Lo siento mucho. Entiendo completamente lo frustrante que debe ser.' },
                { type: 'fill', sentence: 'You are absolutely right, and I sincerely ____. Let me check with the kitchen.', options: ['apologize', 'agree', 'understand'], correct: 0, answer: 'apologize', translation: 'Tiene usted toda la razón, y me disculpo sinceramente. Déjeme verificar con la cocina.' },
                { type: 'match', speaker: 'CUSTOMER', prompt: 'I just wanted the grilled chicken — it\'s not complicated!', options: ['I will personally bring it in five minutes. Your meal is complimentary.', 'I understand, but the kitchen is busy.', 'Would you like something else?'], correct: 0, answer: 'I will personally bring it in five minutes. Your meal is complimentary.', translation: '¡Solo quería el pollo a la parrilla — no es complicado! — Lo traeré personalmente en cinco minutos. Su comida es cortesía de la casa.' },
                { type: 'fill', sentence: 'I truly value your ____. This will not happen again.', options: ['feedback', 'order', 'time'], correct: 0, answer: 'feedback', translation: 'Realmente valoro su opinión. Esto no volverá a ocurrir.' }
            ]
        },
        speaking: [
            { icon: '😤', type: 'De-escalation Role Play', prompt: 'A guest is angry because: 1) their room had no hot water, 2) housekeeping entered without knocking. You are the manager. Empathize, apologize, offer two solutions, and thank the guest for their feedback.', promptEs: 'Un huésped está enojado porque: 1) su habitación no tenía agua caliente, 2) limpieza entró sin llamar. Sos el gerente. Empatizá, disculpate, ofrecé dos soluciones y agradecé al huésped por su opinión.', model: 'I am so sorry — that is absolutely unacceptable, and I completely understand your frustration. We will move you to a room on the top floor immediately, with guaranteed hot water. I will also personally speak with the housekeeping team about knocking. As compensation, tonight\'s stay is complimentary. Thank you so much for bringing this to our attention.', modelEs: 'Lo siento mucho — eso es absolutamente inaceptable y entiendo completamente su frustración. Le mudaremos a una habitación en el último piso de inmediato, con agua caliente garantizada. También hablaré personalmente con el equipo de limpieza sobre llamar antes de entrar. Como compensación, la estadía de esta noche es cortesía de la casa. Muchas gracias por traernos esto a la atención.' },
            { icon: '📞', type: 'Phone Complaint', prompt: 'A guest calls the front desk to complain that: the internet is not working, and the minibar was not restocked. Apologize, explain what you will do, give a timeline, and offer something extra.', promptEs: 'Un huésped llama a la recepción para quejarse de que: el internet no funciona y el minibar no fue repuesto. Disculpate, explicá lo que harás, da un tiempo estimado y ofrece algo extra.', model: 'I\'m very sorry for the inconvenience! I will send our IT team to your room within fifteen minutes to fix the internet. For the minibar, housekeeping will restock it in the next ten minutes. As an apology, I\'d like to offer you a complimentary drink from the bar. Is there anything else I can help you with?', modelEs: '¡Lo siento mucho por el inconveniente! Enviaré a nuestro equipo de IT a su habitación en quince minutos para arreglar el internet. Para el minibar, mucamas lo repondrá en los próximos diez minutos. Como disculpa, me gustaría ofrecerle una bebida de cortesía del bar. ¿Hay algo más en lo que pueda ayudarle?' }
        ],
        review: [
            { sentence: 'To suggest a more expensive option is to ___ a product.', options: ['upsell', 'cancel', 'describe'], correct: 0 },
            { sentence: 'A wine that goes well with a dish ___ the food.', options: ['pairs', 'complements', 'describes'], correct: 1 },
            { sentence: '\"The red wine is ___ than the white wine.\" (bold)', options: ['more bold', 'bolder', 'boldest'], correct: 1 },
            { sentence: 'An aperitif is served ___ the meal.', options: ['during', 'after', 'before'], correct: 2 },
            { sentence: '\"By the ___\" means ordering one glass, not the whole bottle.', options: ['cup', 'glass', 'jug'], correct: 1 }
        ],
        videos: [
            { title: 'Handling Complaints in English — Customer Service', channel: 'Oxford Online English', duration: '8:00', url: 'https://www.youtube.com/watch?v=Zy1h49_L8ME' },
            { title: 'Professional English — Dealing with Difficult Customers', channel: 'Business English Pod', duration: '7:00', url: 'https://www.youtube.com/watch?v=BN-Lmqt0JLI' }
        ],
        videoExercise: {
            title: '🎬 Video Quiz — Complaints & Problem Solving',
            instruction: 'Watch the videos and choose the correct answer for each question.',
            instructionEs: 'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
            questions: [
                { q: 'To \"empathize\" with a guest means to:', qEs: '\"Empatizar\" con un huésped significa:', options: ['understand and share their feelings', 'give them a discount', 'call the manager'], optionsEs: ['entender y compartir sus sentimientos', 'darles un descuento', 'llamar al gerente'], correct: 0 },
                { q: '\"Compensation\" in a complaint situation is:', qEs: 'La \"compensación\" en una situación de queja es:', options: ['something offered to make up for a problem', 'an apology letter', 'a refund policy'], optionsEs: ['algo que se ofrece para compensar un problema', 'una carta de disculpa', 'una política de reembolso'], correct: 0 },
                { q: 'If you cannot solve a problem, you should ___ it to a manager.', qEs: 'Si no puedes resolver un problema, debes ___ al gerente.', options: ['escalate', 'apologize', 'ignore'], optionsEs: ['escalar', 'disculparse', 'ignorar'], correct: 0 },
                { q: '\"The guest waited forty minutes.\" This uses the ___ tense.', qEs: '\"El cliente esperó cuarenta minutos.\" Esto usa el tiempo ___', options: ['pasado simple', 'presente simple', 'futuro'], optionsEs: ['pasado simple', 'presente simple', 'futuro'], correct: 0 },
                { q: 'A \"refund\" is:', qEs: 'Un \"reembolso\" es:', options: ['money returned for a problem', 'a free dessert', 'an apology'], optionsEs: ['dinero devuelto por un problema', 'un postre gratis', 'una disculpa'], correct: 0 }
            ]
        }
    },
    {
        id: 8, emoji: '🎓',
        title: 'Comprehensive Review: Units 1 to 7',
        topic: 'Repaso general: descripciones de menú, reservas, habitaciones, limpieza y resolución de problemas',
        revision: [
            { eng: 'The signature dish comes with seasonal vegetables.', template: 'The [signature] dish [comes] with seasonal [vegetables].', esp: 'El plato estrella viene con verduras de temporada.' },
            { eng: 'Do you have any dietary restrictions today?', template: 'Do you [have] any [dietary] [restrictions] today?', esp: '¿Tienen alguna restricción alimentaria hoy?' },
            { eng: 'Your reservation for the suite is confirmed.', template: 'Your [reservation] for the [suite] is [confirmed].', esp: 'Su reserva para la suite está confirmada.' },
            { eng: 'Could I request a late check-out until 2 PM?', template: '[Could] I request a late [check-out] until 2 PM?', esp: '¿Podría solicitar una salida tardía hasta las 2 PM?' },
            { eng: 'Staff must always wear PPE to sanitize rooms.', template: 'Staff [must] always wear [PPE] to [sanitize] rooms.', esp: 'El personal siempre debe usar EPP para desinfectar habitaciones.' },
            { eng: 'I will personally correct the mistake on the bill.', template: 'I [will] personally [correct] the [mistake] on the bill.', esp: 'Corregiré personalmente el error en la cuenta.' },
            { eng: 'I sincerely apologize for the unacceptable wait time.', template: 'I [sincerely] [apologize] for the unacceptable wait [time].', esp: 'Me disculpo sinceramente por el tiempo de espera inaceptable.' },
            { eng: 'The manager offered a complimentary breakfast as compensation.', template: 'The manager [offered] a [complimentary] breakfast as [compensation].', esp: 'El gerente ofreció un desayuno de cortesía como compensación.' },
            { eng: 'The Chardonnay complements the grilled salmon perfectly.', template: 'The [Chardonnay] [complements] the grilled [salmon] perfectly.', esp: 'El Chardonnay combina perfectamente con el salmón asado.' },
            { eng: 'The guest waited forty minutes because of a miscommunication.', template: 'The guest [waited] forty minutes because of a [miscommunication].', esp: 'El huésped esperó cuarenta minutos debido a un malentendido.' }
        ],
        vocabulary: [
            { word: 'Signature dish', ipa: 'ˈsɪɡnətʃər dɪʃ', def: 'A dish the restaurant is famous for', def_es: 'plato estrella', example: 'Our signature dish is very popular tonight.' },
            { word: 'Dietary restriction', ipa: 'ˈdaɪətri rɪˈstrɪkʃən', def: 'A food rule based on health or preference', def_es: 'restricción alimentaria', example: 'Do any guests have dietary restrictions?' },
            { word: 'Amenities', ipa: 'əˈmiːnɪtiz', def: 'Facilities and services available to guests', def_es: 'comodidades / servicios', example: 'The hotel has excellent amenities.' },
            { word: 'Sanitize', ipa: 'ˈsænɪtaɪz', def: 'To clean something thoroughly, making it free of germs', def_es: 'desinfectar / sanitizar', example: 'Please sanitize all surfaces carefully.' },
            { word: 'PPE', ipa: 'ˌpiː piː ˈiː', def: 'Personal Protective Equipment', def_es: 'EPP', example: 'You must wear PPE when cleaning.' },
            { word: 'Apologize', ipa: 'əˈpɒlədʒaɪz', def: 'To express regret for a mistake', def_es: 'pedir disculpas', example: 'I sincerely apologize for the delay.' },
            { word: 'Compensation', ipa: 'ˌkɒmpənˈseɪʃən', def: 'Something given to make up for a problem', def_es: 'compensación', example: 'We offered a free dessert as compensation.' },
            { word: 'Escalate', ipa: 'ˈɛskəleɪt', def: 'To pass a problem to a higher authority', def_es: 'escalar', example: 'If the guest is angry, escalate it to the manager.' }
        ],
        listening: {
            title: 'A Busy Day in Hospitality',
            preListening: 'Listen to a front desk manager handling three different situations: a room upgrade, a restaurant reservation, and a noise complaint.',
            transcript: 'Scene 1: Front Desk\nManager: Good afternoon, Mrs. Allen. I see you booked a twin room. For just thirty dollars more, we can upgrade you to a deluxe suite with an ocean view. Would you be interested? Mrs. Allen: Yes, that sounds wonderful!\nScene 2: Phone Reservation\nManager: Grand Hotel, how can I help you? Yes, a table for four tonight at 8 PM. Are there any dietary restrictions? One vegan guest? I will note that for the chef. Your reservation is confirmed.\nScene 3: Complaint Resolution\nManager: I sincerely apologize for the noise from the elevator, Mr. Smith. It is unacceptable. I will move you to a quieter room on the top floor immediately. And as compensation, your dinner tonight will be complimentary.',
            transcriptEs: 'Escena 1: Recepción\nGerente: Buenas tardes, Sra. Allen. Veo que reservó una habitación doble con dos camas. Por solo treinta dólares más, podemos mejorarla a una suite de lujo con vista al océano. ¿Estaría interesada? Sra. Allen: ¡Sí, suena maravilloso!\nEscena 2: Reserva Telefónica\nGerente: Grand Hotel, ¿en qué puedo ayudarle? Sí, una mesa para cuatro esta noche a las 8 PM. ¿Hay alguna restricción alimentaria? ¿Un invitado vegano? Lo anotaré para el chef. Su reserva está confirmada.\nEscena 3: Resolución de Quejas\nGerente: Me disculpo sinceramente por el ruido del ascensor, Sr. Smith. Es inaceptable. Lo mudaré a una habitación más tranquila en el último piso de inmediato. Y como compensación, su cena de esta noche será de cortesía.',
            questions: [
                { q: 'What room does Mrs. Allen upgrade to?', options: ['A twin room', 'A standard double', 'A deluxe suite with an ocean view'], correct: 2 },
                { q: 'What is the dietary restriction for the restaurant reservation?', options: ['Gluten-free', 'Vegan', 'Allergic to nuts'], correct: 1 },
                { q: 'How does the manager compensate Mr. Smith for the noise?', options: ['A full refund', 'A complimentary dinner and a quieter room', 'A free massage'], correct: 1 }
            ]
        },
        dialogue: {
            title: 'Mixed Situations: Reservations & Complaints',
            situation: '📍 A guest changes their reservation and reports a cleaning issue.',
            lines: [
                { speaker: 'GUEST', text: 'Hi, I have a reservation for a standard room, but I want to upgrade to a suite with a balcony.' },
                { speaker: 'STAFF', text: 'I can certainly help with that. Let me check our availability. Yes, we have one suite available.' },
                { speaker: 'GUEST', text: 'Great. Also, I was just at the restaurant and there was a mistake on my bill. They charged me for two coffees.' },
                { speaker: 'STAFF', text: 'I apologize for the miscommunication. I will call the restaurant and correct that right away.' },
                { speaker: 'GUEST', text: 'Thank you. Oh, and I forgot to mention — my room needs extra towels.' },
                { speaker: 'STAFF', text: 'Not a problem. I will have housekeeping bring fresh towels to your new suite immediately.' },
                { speaker: 'GUEST', text: 'Excellent service, thank you so much.' }
            ],
            practicePrompt: 'Practice handling mixed requests. Use: Let me check our availability... I apologize for... I will correct that... I will have housekeeping bring...'
        },
        grammar: {
            title: 'Grammar Review: Present, Past, and Modals',
            explanation: 'Review of key structures: Present Simple (It comes with...), Past Simple (The guest waited...), Could/Would for requests (Could I have...?), Must for rules (You must sanitize...), and Will for promises (I will fix it).',
            examples: ['The soup contains dairy. (Present)', 'The guest complained about the noise. (Past)', 'Could you bring the bill? (Modal request)', 'I will check availability. (Will promise)'],
            exercises: [
                { question: 'Our signature dish ___ with seasonal vegetables. (Present Simple)', options: ['come', 'coming', 'comes'], correct: 2 },
                { question: 'Yesterday, a guest ___ forty minutes for their food. (Past Simple)', options: ['waited', 'waits', 'waiting'], correct: 0 },
                { question: '___ I have a room with an ocean view, please? (Polite request)', options: ['Must', 'Will', 'Could'], correct: 2 },
                { question: 'Staff ___ wear PPE when using strong cleaning chemicals. (Rule)', options: ['must', 'will', 'could'], correct: 0 },
                { question: 'I sincerely apologize. I ___ correct the bill right away. (Promise)', options: ['must', 'could', 'will'], correct: 2 }
            ]
        },
        oralPractice: {
            title: 'Comprehensive Practice',
            instruction: 'Choose the best word or phrase to complete these professional responses.',
            exercises: [
                { type: 'fill', sentence: 'We have a wonderful gluten-free ____ on the menu tonight.', options: ['option', 'restriction', 'garnish'], correct: 0, answer: 'option', translation: 'Tenemos una maravillosa opción sin gluten en el menú esta noche.' },
                { type: 'match', speaker: 'GUEST', prompt: 'This is unacceptable. My room is very noisy!', options: ['I sincerely apologize. I will find you a quieter room.', 'You must stay in that room.', 'I don\'t know what to do.'], correct: 0, answer: 'I sincerely apologize. I will find you a quieter room.', translation: 'Esto es inaceptable. ¡Mi habitación es muy ruidosa! — Me disculpo sinceramente. Le encontraré una habitación más tranquila.' },
                { type: 'fill', sentence: 'As ____ for the cold food, your dessert is complimentary.', options: ['compensation', 'escalation', 'reservation'], correct: 0, answer: 'compensation', translation: 'Como compensación por la comida fría, su postre es de cortesía.' },
                { type: 'fill', sentence: 'Please ____ all high-touch surfaces like doorknobs and remotes.', options: ['sanitize', 'garnish', 'confirm'], correct: 0, answer: 'sanitize', translation: 'Por favor, desinfecte todas las superficies de alto contacto como pomos de puertas y controles remotos.' }
            ]
        },
        speaking: [
            { icon: '⭐', type: 'Full Service Challenge', prompt: 'You are the hotel manager. A guest arrives: 1) Check them in and offer a room upgrade. 2) Take their dinner reservation and ask about dietary restrictions. 3) They complain that the room is cold. Apologize and offer a solution using will.', promptEs: 'Sos el gerente del hotel. Llega un huésped: 1) Registralo y ofrécele una mejora de habitación. 2) Tomá su reserva para la cena y preguntá por restricciones alimentarias. 3) Se queja de que la habitación está fría. Disculpate y ofrecé una solución usando will.', model: 'Welcome! I have your reservation for a standard room. For just twenty dollars, I can upgrade you to a suite with a balcony. Would you like to reserve a table for dinner? Do you have any dietary restrictions? ... I sincerely apologize that your room is cold. I will send extra blankets and a portable heater right away.', modelEs: '¡Bienvenido! Tengo su reserva para una habitación estándar. Por solo veinte dólares, puedo mejorarla a una suite con balcón. ¿Le gustaría reservar una mesa para cenar? ¿Tiene alguna restricción alimentaria? ... Me disculpo sinceramente de que su habitación esté fría. Enviaré mantas adicionales y un calentador portátil de inmediato.' },
            { icon: '📞', type: 'Restaurant Phone Challenge', prompt: 'A guest calls the restaurant: 1) They want to book a table for six. Check availability. 2) They ask about the signature dish. Describe it. 3) They ask if you have vegan options. Respond professionally.', promptEs: 'Un cliente llama al restaurante: 1) Quiere reservar una mesa para seis. Revisá disponibilidad. 2) Pregunta por el plato estrella. Describilo. 3) Pregunta si tenés opciones veganas. Respondé profesionalmente.', model: 'Thank you for calling! Let me check availability... Yes, we have a table for six at eight PM. Our signature dish is the slow-roasted lamb with seasonal vegetables. And yes, we have two excellent vegan options, including a grilled vegetable tower.', modelEs: '¡Gracias por llamar! Déjeme verificar disponibilidad... Sí, tenemos una mesa para seis a las ocho de la tarde. Nuestro plato estrella es el cordero asado lentamente con verduras de temporada. Y sí, tenemos dos excelentes opciones veganas, incluyendo una torre de vegetales a la parrilla.' }
        ],
        review: [
            { sentence: '\"Do you have any dietary ___?\" (e.g., vegan, gluten-free)', options: ['restrictions', 'amenities', 'portions'], correct: 0 },
            { sentence: '\"Could I request a late ___?\"', options: ['check-out', 'check-in', 'compensation'], correct: 0 },
            { sentence: 'Staff must wear ___ to protect themselves when cleaning.', options: ['PPE', 'a minibar', 'a log'], correct: 0 },
            { sentence: 'To understand a guest\'s frustration is to ___ with them.', options: ['empathize', 'escalate', 'sanitize'], correct: 0 },
            { sentence: '\"The guest ___ (wait) thirty minutes.\" (past simple)', options: ['waited', 'waiting', 'waits'], correct: 0 }
        ],
        videos: [
            { title: 'Hotel & Restaurant English Review', channel: 'English with Lucy', duration: '10:00', url: 'https://www.youtube.com/watch?v=3uMKyPpFLw4' },
            { title: 'Dealing with Customer Complaints', channel: 'Oxford Online English', duration: '8:00', url: 'https://www.youtube.com/watch?v=Zy1h49_L8ME' }
        ],
        videoExercise: {
            title: '🎬 Video Quiz — Comprehensive Review',
            instruction: 'Watch the videos and choose the correct answer for each question.',
            instructionEs: 'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
            questions: [
                { q: 'If a guest has a "dietary restriction", they:', qEs: 'Si un huésped tiene una "restricción alimentaria", él/ella:', options: ['cannot eat certain foods', 'wants a cheaper meal', 'wants a larger portion'], optionsEs: ['no puede comer ciertos alimentos', 'quiere una comida más barata', 'quiere una porción más grande'], correct: 0 },
                { q: 'A "complimentary" item is:', qEs: 'Un artículo "de cortesía" (complimentary) es:', options: ['free of charge', 'very expensive', 'spicy'], optionsEs: ['gratis', 'muy caro', 'picante'], correct: 0 },
                { q: 'To "sanitize" means to:', qEs: '"Desinfectar" (sanitize) significa:', options: ['clean thoroughly to remove germs', 'decorate a room', 'make a bed'], optionsEs: ['limpiar a fondo para eliminar gérmenes', 'decorar una habitación', 'hacer una cama'], correct: 0 },
                { q: 'When a waiter says "I will bring it right away," they are:', qEs: 'Cuando un mesero dice "Lo traeré enseguida", está:', options: ['making a spontaneous promise', 'stating a rule', 'making a request'], optionsEs: ['haciendo una promesa espontánea', 'estableciendo una regla', 'haciendo una solicitud'], correct: 0 },
                { q: 'If you "escalate" a problem, you:', qEs: 'Si usted "escala" (escalate) un problema, usted:', options: ['pass it to a manager', 'ignore it completely', 'solve it yourself'], optionsEs: ['lo pasa a un gerente', 'lo ignora por completo', 'lo resuelve usted mismo'], correct: 0 }
            ]
        },
        progressTest: {
            title: 'Progress Test 2 — A2 (Units 5–8)',
            listening: {
                transcript: 'Listen to the manager handling a complex situation: Good evening, Mr. Davis. I understand you had an issue with your dinner and your room. I sincerely apologize for the delay in the restaurant; our signature dish takes a bit longer, but forty minutes is unacceptable. As compensation, we have removed the charge for your meal. Regarding the room, I will upgrade you to a suite with an ocean view immediately, and I will have housekeeping bring fresh amenities and sanitize the new room before you enter. Could I help you with anything else?',
                questions: [
                    { q: 'What is the guest complaining about?', options: ['The price of the room', 'A delay in the restaurant and a room issue', 'The hotel amenities'], correct: 1 },
                    { q: 'What does the manager offer as compensation for the restaurant delay?', options: ['A free dessert', 'They removed the charge for the meal', 'A discount on the next stay'], correct: 1 },
                    { q: 'What is the solution for the room issue?', options: ['A room upgrade and fresh amenities', 'A new bed', 'A refund for the room'], correct: 0 }
                ]
            },
            speaking: {
                prompt: 'Oral Situation: A guest is complaining about a dirty room and cold food from room service. Apologize, offer a solution, and explain what you will do next. Use "I sincerely apologize", "I will", and "compensation".',
                promptEs: 'Situación oral: Un huésped se queja de una habitación sucia y comida fría del servicio de habitaciones. Disculpate, ofrecé una solución y explicá qué harás a continuación. Usá "I sincerely apologize", "I will" y "compensation".',
                model: 'I sincerely apologize for the condition of your room and the cold food. That is unacceptable. I will send housekeeping to sanitize your room immediately. As compensation, I will send a fresh, hot meal right away, completely complimentary. Could I offer you a drink while you wait?'
            },
            questions: [
                { q: 'To express deep regret for a mistake, you say "I sincerely ___."', options: ['empathize', 'apologize', 'escalate'], correct: 1 },
                { q: 'When a guest has a problem you can\'t solve, you should ___ it to a manager.', options: ['escalate', 'sanitize', 'ignore'], correct: 0 },
                { q: 'The extra items and services a hotel provides (like shampoo or a gym) are called:', options: ['portions', 'amenities', 'PPE'], correct: 1 },
                { q: 'A dish the restaurant is famous for is the:', options: ['signature dish', 'dietary restriction', 'complimentary dish'], correct: 0 },
                { q: 'If food is free because of a problem, it is:', options: ['complimentary', 'expensive', 'reserved'], correct: 0 },
                { q: 'To clean a surface completely to kill germs is to:', options: ['upgrade', 'sanitize', 'escalate'], correct: 1 },
                { q: '"The guest ___ (wait) in the lobby for an hour." (Past simple)', options: ['waited', 'waits', 'waiting'], correct: 0 },
                { q: '"Staff ___ wear PPE when using strong chemicals." (Obligation)', options: ['would', 'must', 'could'], correct: 1 },
                { q: '"I ___ personally correct the mistake on your bill." (Promise)', options: ['must', 'will', 'could'], correct: 1 },
                { q: 'A vegan diet is an example of a:', options: ['signature dish', 'dietary restriction', 'complimentary item'], correct: 1 },
                { q: 'Something offered to make up for a problem is called:', options: ['compensation', 'reservation', 'escalation'], correct: 0 },
                { q: '"___ I request a late check-out?" (Polite request)', options: ['Must', 'Will', 'Could'], correct: 2 },
                { q: 'The equipment worn to protect staff (like gloves) is called:', options: ['VIP', 'PPE', 'ETA'], correct: 1 },
                { q: '"The manager ___ (offer) a free breakfast yesterday." (Past simple)', options: ['offers', 'offered', 'offering'], correct: 1 },
                { q: 'When you understand and share a guest\'s feelings, you ___ with them.', options: ['empathize', 'argue', 'escalate'], correct: 0 },
                { q: 'To move a guest to a better room is to give them an:', options: ['upgrade', 'amenity', 'escalation'], correct: 0 },
                { q: 'Money returned to a guest because of a problem is a:', options: ['refund', 'reservation', 'restriction'], correct: 0 },
                { q: '"The wine ___ (complement) the fish perfectly." (Present simple)', options: ['complementing', 'complement', 'complements'], correct: 2 },
                { q: 'If there is a misunderstanding, it is a:', options: ['miscommunication', 'compensation', 'restriction'], correct: 0 },
                { q: '"I ___ check our availability." (Spontaneous decision/promise)', options: ['must', 'will', 'could'], correct: 1 }
            ]
        },
        progressTestB: {
            title: 'Progress Test 2B — A2 (Units 5–8)',
            listening: {
                transcript: 'Listen to the front desk agent: Good morning, Mrs. Smith. We have a problem with your reservation for the deluxe suite tonight. There was a miscommunication and the room is currently out of order due to a maintenance issue. I sincerely apologize for this inconvenience. As compensation, we will upgrade you to our Presidential Suite at no extra charge, and we will offer you a complimentary dinner at our signature restaurant tonight. Is that acceptable?',
                questions: [
                    { q: 'Why is the deluxe suite unavailable?', options: ['It is being sanitized', 'There is a maintenance issue', 'The guest arrived late'], correct: 1 },
                    { q: 'What is the compensation for the room?', options: ['A full refund', 'An upgrade to the Presidential Suite', 'A free night stay'], correct: 1 },
                    { q: 'What else does the hotel offer?', options: ['A free breakfast', 'A complimentary dinner at the signature restaurant', 'A free spa treatment'], correct: 1 }
                ]
            },
            speaking: {
                prompt: 'Oral Situation: You are taking a restaurant reservation over the phone. Confirm a table for two, ask about dietary restrictions, and recommend the signature dish.',
                promptEs: 'Situación oral: Estás tomando una reserva de restaurante por teléfono. Confirmá una mesa para dos, preguntá sobre restricciones alimentarias y recomendá el plato estrella.',
                model: 'Thank you for calling. I can confirm your reservation: a table for two tonight. Do you have any dietary restrictions we should know about? I highly recommend our signature dish, the roasted salmon, it is excellent.'
            },
            questions: [
                { q: 'A rule about what someone can or cannot eat is a:', options: ['dietary restriction', 'signature dish', 'compensation'], correct: 0 },
                { q: 'The most famous dish of a restaurant is the:', options: ['side dish', 'complimentary dish', 'signature dish'], correct: 2 },
                { q: 'A free item given to a guest is:', options: ['expensive', 'complimentary', 'reserved'], correct: 1 },
                { q: 'To make something free from germs is to:', options: ['sanitize', 'escalate', 'upgrade'], correct: 0 },
                { q: 'When a situation is passed to a higher authority, you ___ it.', options: ['empathize', 'escalate', 'apologize'], correct: 1 },
                { q: 'To say you are sorry for a mistake is to:', options: ['apologize', 'compensate', 'escalate'], correct: 0 },
                { q: '"The customer ___ (complain) about the noise yesterday." (Past simple)', options: ['complains', 'complaining', 'complained'], correct: 2 },
                { q: '"You ___ always knock before entering a room." (Strong obligation)', options: ['could', 'will', 'must'], correct: 2 },
                { q: '"I ___ bring you fresh towels immediately." (Promise)', options: ['must', 'could', 'will'], correct: 2 },
                { q: 'Something offered to make up for an error is:', options: ['compensation', 'escalation', 'reservation'], correct: 0 },
                { q: 'Money given back to a customer is a:', options: ['refund', 'restriction', 'miscommunication'], correct: 0 },
                { q: '"___ you bring the menu, please?" (Polite request)', options: ['Must', 'Will', 'Could'], correct: 2 },
                { q: 'Gloves and masks are examples of:', options: ['amenities', 'PPE', 'portions'], correct: 1 },
                { q: 'To share and understand someone\'s feelings is to:', options: ['escalate', 'empathize', 'sanitize'], correct: 1 },
                { q: 'Extra items provided for guest comfort are:', options: ['amenities', 'restrictions', 'compensations'], correct: 0 },
                { q: '"She ___ (apologize) for the delay." (Past simple)', options: ['apologizes', 'apologized', 'apologizing'], correct: 1 },
                { q: 'A failure to communicate clearly is a:', options: ['miscommunication', 'compensation', 'restriction'], correct: 0 },
                { q: 'Moving a guest to a better room is an:', options: ['escalation', 'upgrade', 'amenity'], correct: 1 },
                { q: '"The soup ___ (contain) dairy." (Present simple)', options: ['contains', 'contain', 'containing'], correct: 0 },
                { q: '"I ___ call the manager for you." (Spontaneous decision)', options: ['must', 'will', 'could'], correct: 1 }
            ]
        }
    }
]);
