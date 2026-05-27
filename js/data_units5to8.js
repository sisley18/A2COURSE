courseData.units = courseData.units.concat([
{
id:5, emoji:'🍷',
title:'Wine, Beverages & Upselling',
topic:'Recommending drinks, upselling techniques, and pairing food with beverages at A2 level',
revision:[
{eng:'Our deep clean protocol includes sanitizing all surfaces.', template:'Our [deep] clean protocol includes [sanitizing] all surfaces.', esp:'Nuestro protocolo de limpieza profunda incluye higienizar todas las superficies.'},
{eng:'You must wear PPE when using chemical cleaners.', template:'You [must] wear PPE when using [chemical] cleaners.', esp:'Debes usar EPP cuando uses productos de limpieza químicos.'},
{eng:'Please replace the linen in all rooms on floor three.', template:'Please [replace] the [linen] in all rooms on floor three.', esp:'Por favor reemplaza la ropa de cama en todas las habitaciones del tercer piso.'},
{eng:'Always sign the cleaning log after every room.', template:'Always sign the cleaning [log] after every [room].', esp:'Siempre firma la planilla de limpieza después de cada habitación.'},
{eng:'Use separate cloths to avoid cross-contamination.', template:'Use [separate] cloths to avoid [cross-contamination].', esp:'Usa trapos separados para evitar la contaminación cruzada.'},
{eng:'Turndown service begins at seven PM tonight.', template:'[Turndown] service begins at seven PM [tonight].', esp:'El servicio de preparación nocturna comienza a las siete de la noche.'},
{eng:'You mustn\'t enter an occupied room without knocking.', template:'You [mustn\'t] enter an [occupied] room without knocking.', esp:'No se debe entrar en una habitación ocupada sin llamar.'},
{eng:'A vacant room is ready for the new guest.', template:'A [vacant] room is ready for the [new] guest.', esp:'Una habitación vacante está lista para el nuevo huésped.'},
{eng:'The housekeeper must sanitize high-touch surfaces.', template:'The [housekeeper] must [sanitize] high-touch surfaces.', esp:'La mucama debe higienizar las superficies de alto contacto.'},
{eng:'Please check if the room is occupied before entering.', template:'Please check if the room is [occupied] before [entering].', esp:'Por favor verifica si la habitación está ocupada antes de entrar.'}
],
vocabulary:[
{word:'Upsell', ipa:'ˈʌpsel', def:'To suggest a more expensive or premium product', def_es:'vender más / mejorar la venta', example:'A good server always upsells the wine.'},
{word:'Pairing', ipa:'ˈpɛərɪŋ', def:'Matching food with a suitable drink', def_es:'maridaje', example:'The chef recommends a red wine pairing with the steak.'},
{word:'Still / Sparkling', ipa:'stɪl / ˈspɑːrklɪŋ', def:'Still = no bubbles; Sparkling = with bubbles', def_es:'sin gas / con gas', example:'Would you prefer still or sparkling water tonight?'},
{word:'By the glass / By the bottle', ipa:'baɪ ðə ɡlɑːs / baɪ ðə ˈbɒtl', def:'Options to order wine individually or as a full bottle', def_es:'por copa / por botella', example:'Would you like the wine by the glass or by the bottle?'},
{word:'Craft beer', ipa:'krɑːft bɪər', def:'Beer made by a small, independent brewery', def_es:'cerveza artesanal', example:'We have four local craft beers on tap.'},
{word:'Aperitif', ipa:'əˌpɛrɪˈtiːf', def:'A drink served before a meal to stimulate appetite', def_es:'aperitivo', example:'Can I offer you an aperitif while you look at the menu?'},
{word:'Non-alcoholic', ipa:'ˌnɒn ælkəˈhɒlɪk', def:'A drink without alcohol', def_es:'sin alcohol', example:'We have an excellent non-alcoholic sangria.'},
{word:'Complements', ipa:'ˈkɒmplɪments', def:'Goes well with; enhances the flavor of', def_es:'combina bien con / realza', example:'The Malbec complements the lamb perfectly.'}
],
listening:{
title:'The Sommelier\'s Recommendation',
preListening:'A sommelier (wine expert) is advising a couple on wine choices. Listen for the wine recommendations and why they are suggested.',
transcript:'Good evening! I\'m Carlos, the sommelier here at La Vigne. I see you\'ve ordered the grilled sea bass and the lamb. Excellent choices! For the sea bass, I highly recommend our Chardonnay from Mendoza — it\'s a crisp, dry white wine that complements the delicate flavor of the fish beautifully. By the glass, it\'s twelve dollars, or we have the full bottle for forty-five. For the lamb, our house Malbec is outstanding — it\'s a bold red wine with notes of cherry and chocolate. It pairs perfectly with the rosemary seasoning on your lamb. It\'s available by the glass for fourteen dollars. Would you like to try a small taste before deciding? And can I offer you an aperitif to start? We have a lovely Prosecco or a non-alcoholic sparkling grape juice if you prefer. Excellent — I\'ll be right back!',
transcriptEs:'¡Buenas noches! Soy Carlos, el sommelier aquí en La Vigne. Veo que han pedido el lenguado a la parrilla y el cordero. ¡Excelentes elecciones! Para el lenguado, les recomiendo mucho nuestro Chardonnay de Mendoza — es un vino blanco seco y fresco que realza a la perfección el delicado sabor del pescado. Por copa son doce dólares, o tenemos la botella completa por cuarenta y cinco. Para el cordero, nuestro Malbec de la casa es excepcional — es un vino tinto robusto con notas de cereza y chocolate. Combina perfectamente con el romero del cordero. Está disponible por copa por catorce dólares. ¿Les gustaría probar un pequeño sorbo antes de decidir? ¿Y puedo ofrecerles un aperitivo para comenzar? Tenemos un delicioso Prosecco o un jugo de uva espumante sin alcohol si lo prefieren. Excelente — ¡vuelvo enseguida!',
questions:[
{q:'What wine is recommended with the sea bass?', options:['Malbec','Chardonnay','Prosecco'], correct:1},
{q:'How much is the Chardonnay by the bottle?', options:['$12','$45','$14'], correct:1},
{q:'What non-alcoholic option is offered as an aperitif?', options:['Water','Lemonade','Sparkling grape juice'], correct:2}
]
},
dialogue:{
title:'Upselling Beverages at the Table',
situation:'📍 A server approaches a table to take drink orders and upsell premium options.',
lines:[
{speaker:'SERVER', text:'Good evening! Can I start you off with something to drink tonight?'},
{speaker:'GUEST', text:'Just water for now, please.'},
{speaker:'SERVER', text:'Of course! Still or sparkling? We also have a lovely house sangria — it\'s very popular.'},
{speaker:'GUEST', text:'Tell me more about the sangria.'},
{speaker:'SERVER', text:'It\'s made with red wine, fresh orange, and a touch of cinnamon. It\'s absolutely delicious!'},
{speaker:'GUEST', text:'That sounds great. We\'ll have a jug of that!'},
{speaker:'SERVER', text:'Excellent choice! And would you like to see our craft beer selection? We have four local options on tap.'},
{speaker:'GUEST', text:'Maybe after. Let\'s start with the sangria.'},
{speaker:'SERVER', text:'Perfect! I\'ll bring that right out.'}
],
practicePrompt:'Practice upselling drinks. Use: It\'s made with... It\'s very popular. Would you like to try...? We also have... I highly recommend...'
},
grammar:{
title:'Comparative Adjectives — Describing and Recommending',
explanation:'At A2, we use comparative adjectives to compare drinks and dishes. Add -ER to short adjectives (dry → drier). Use MORE before longer adjectives (complex → more complex). Use THAN to compare two things.',
examples:['Our Malbec is bolder than the Chardonnay.','The sparkling water is more refreshing than still.','This craft beer is lighter than a regular lager.'],
exercises:[
{question:'The red wine is ___ than the white wine. (bold)', options:['more bold','bolder','boldest'], correct:1},
{question:'Our cocktails are ___ than the house wines. (expensive)', options:['expensiver','more expensive','most expensive'], correct:1},
{question:'The sparkling water is ___ than the juice. (light)', options:['lighter','more light','lightest'], correct:0},
{question:'Our sommelier is ___ than the average waiter. (knowledgeable)', options:['more knowledgeable','knowledgeabler','most knowledgeable'], correct:0},
{question:'This pairing is ___ for the lamb. (suitable)', options:['suitabler','most suitable','more suitable'], correct:2}
]
},
oralPractice:{
title:'Beverages & Upselling — Practice',
instruction:'Use the drinks dialogue. Fill in the blanks and choose the best upselling response.',
exercises:[
{type:'fill', sentence:'Good evening! Can I start you off with something to ____ tonight?', options:['drink','eat','order'], correct:0, answer:'drink', translation:'¡Buenas noches! ¿Puedo traerles algo de beber esta noche?'},
{type:'fill', sentence:'It\'s made with red wine, fresh orange, and a touch of ____.', options:['cinnamon','lemon','pepper'], correct:0, answer:'cinnamon', translation:'Está hecho con vino tinto, naranja fresca y un toque de canela.'},
{type:'match', speaker:'GUEST', prompt:'Tell me more about the sangria.', options:['It\'s made with red wine and orange. Very popular!','I don\'t know much about it.','We don\'t have sangria tonight.'], correct:0, answer:'It\'s made with red wine and orange. Very popular!', translation:'Cuénteme más sobre la sangría. — Está hecha con vino tinto y naranja. ¡Es muy popular!'},
{type:'fill', sentence:'Would you like to see our ____ beer selection? We have four local options.', options:['craft','cold','cheap'], correct:0, answer:'craft', translation:'¿Le gustaría ver nuestra selección de cervezas artesanales? Tenemos cuatro opciones locales.'}
]
},
speaking:[
{icon:'🍷', type:'Sommelier Role Play', prompt:'You are the sommelier. A guest has ordered grilled chicken and a vegetable pasta. Recommend a wine for each dish. Explain WHY you recommend it (flavor, pairing). Offer it by the glass or bottle.', promptEs:'Sos el sommelier. Un huésped pidió pollo a la parrilla y pasta de vegetales. Recomendá un vino para cada plato. Explicá POR QUÉ lo recomendás (sabor, maridaje). Ofrecélo por copa o botella.', model:'For the chicken, I recommend our Sauvignon Blanc — it\'s a light, crisp white wine that complements the herbs beautifully. For the pasta, our Pinot Noir is a lighter red — it\'s more delicate and won\'t overpower the vegetables. Would you prefer by the glass or by the bottle?', modelEs:'Para el pollo, recomiendo nuestro Sauvignon Blanc — es un vino blanco ligero y fresco que combina perfectamente con las hierbas. Para la pasta, nuestro Pinot Noir es un tinto más ligero — es más delicado y no opacará las verduras. ¿Lo prefiere por copa o por botella?'},
{icon:'💰', type:'Upselling Practice', prompt:'A customer orders \"just water.\" Upsell by offering: 1) a sparkling option, 2) a house cocktail, 3) an aperitif. Describe each option with one key detail. Be enthusiastic and professional.', promptEs:'Un cliente pide \"solo agua\". Hacé un upsell ofreciendo: 1) una opción con gas, 2) un cóctel de la casa, 3) un aperitivo. Describí cada opción con un detalle clave. Sé entusiasta y profesional.', model:'Of course! We have still or sparkling water. Also, our house cocktail tonight is a passion fruit mojito — it\'s incredibly refreshing! And can I offer you an aperitif? Our Aperol Spritz is a very popular choice to start. Would you like to try something?', modelEs:'¡Por supuesto! Tenemos agua sin gas o con gas. Además, nuestro cóctel de la casa esta noche es un mojito de maracuyá — ¡es increíblemente refrescante! ¿Y puedo ofrecerle un aperitivo? Nuestro Aperol Spritz es una opción muy popular para comenzar. ¿Le gustaría probar algo?'}
],
review:[
{sentence:'To enter a guest room safely, you must ___ before opening the door.', options:['clean','knock','sanitize'], correct:1},
{sentence:'The cleaning ___ is a record of tasks completed that housekeepers must sign.', options:['schedule','log','supply'], correct:1},
{sentence:'A thorough cleaning of an entire area is called a ___ clean.', options:['light','surface','deep'], correct:2},
{sentence:'You ___ use the same cloth in the bathroom and kitchen — it spreads germs.', options:['must','have to','mustn\'t'], correct:2},
{sentence:'PPE includes gloves, mask, and other ___ equipment.', options:['protective','professional','personal protective'], correct:2}
],
videos:[
{title:'Wine Vocabulary in English — Sommelier Tips', channel:'English with Lucy', duration:'7:00', url:'https://www.youtube.com/watch?v=3uMKyPpFLw4'},
{title:'Restaurant English — Upselling Techniques', channel:'Oxford Online English', duration:'6:00', url:'https://www.youtube.com/watch?v=Zy1h49_L8ME'}
],
videoExercise:{
title:'🎬 Video Quiz — Beverages & Upselling',
instruction:'Watch the videos and choose the correct answer for each question.',
instructionEs:'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
questions:[
{q:'To \"upsell\" means to:', qEs:'\"Upsell\" significa:', options:['suggest a better or more expensive option','lower the price','cancel an order'], optionsEs:['sugerir una opción mejor o más cara','bajar el precio','cancelar un pedido'], correct:0},
{q:'A \"pairing\" in food service is:', qEs:'Un \"maridaje\" en gastronomía es:', options:['matching food with the right drink','taking an order','splitting the bill'], optionsEs:['combinar comida con la bebida adecuada','tomar un pedido','dividir la cuenta'], correct:0},
{q:'\"Still water\" means water that is:', qEs:'\"Still water\" significa agua que es:', options:['without bubbles','very cold','with ice'], optionsEs:['sin burbujas','muy fría','con hielo'], correct:0},
{q:'An \"aperitif\" is served:', qEs:'Un \"aperitivo\" se sirve:', options:['before the meal','after the dessert','with the main course'], optionsEs:['antes de la comida','después del postre','con el plato principal'], correct:0},
{q:'\"This wine is bolder ___ the Chardonnay.\" Which word completes this?', qEs:'\"Este vino es más robusto ___ el Chardonnay.\" ¿Qué palabra completa esto?', options:['than','then','that'], optionsEs:['que','luego','eso'], correct:0}
]
}
},
{
id:6, emoji:'🏃',
title:'Handling Complaints & Difficult Situations',
topic:'Managing guest complaints, de-escalating situations, and offering solutions at A2 level',
revision:[
{eng:'I highly recommend our house Malbec with the lamb.', template:'I [highly] recommend our house [Malbec] with the lamb.', esp:'Les recomiendo mucho nuestro Malbec de la casa con el cordero.'},
{eng:'The Chardonnay complements the sea bass perfectly.', template:'The [Chardonnay] [complements] the sea bass perfectly.', esp:'El Chardonnay combina perfectamente con el lenguado.'},
{eng:'Would you like the wine by the glass or by the bottle?', template:'Would you like the wine by the [glass] or by the [bottle]?', esp:'¿Le gustaría el vino por copa o por botella?'},
{eng:'Can I offer you an aperitif to start your evening?', template:'Can I offer you an [aperitif] to [start] your evening?', esp:'¿Puedo ofrecerle un aperitivo para comenzar la noche?'},
{eng:'We have four local craft beers on tap tonight.', template:'We have four local [craft] beers on [tap] tonight.', esp:'Tenemos cuatro cervezas artesanales locales de barril esta noche.'},
{eng:'The sparkling water is more refreshing than still.', template:'The [sparkling] water is more [refreshing] than still.', esp:'El agua con gas es más refrescante que el agua sin gas.'},
{eng:'This Malbec is bolder than our house Cabernet.', template:'This [Malbec] is [bolder] than our house Cabernet.', esp:'Este Malbec es más robusto que nuestro Cabernet de la casa.'},
{eng:'Our non-alcoholic sangria is very popular tonight.', template:'Our [non-alcoholic] sangria is very [popular] tonight.', esp:'Nuestra sangría sin alcohol es muy popular esta noche.'},
{eng:'I recommend a light wine to pair with the chicken.', template:'I recommend a [light] wine to [pair] with the chicken.', esp:'Recomiendo un vino ligero para maridar con el pollo.'},
{eng:'Would you like to try a small taste before deciding?', template:'Would you like to try a [small] taste before [deciding]?', esp:'¿Le gustaría probar un pequeño sorbo antes de decidir?'}
],
vocabulary:[
{word:'Dissatisfied', ipa:'dɪsˈsætɪsfaɪd', def:'Not happy with a service or product', def_es:'insatisfecho', example:'The guest was clearly dissatisfied with the wait time.'},
{word:'Empathize', ipa:'ˈɛmpəθaɪz', def:'To understand and share someone\'s feelings', def_es:'empatizar', example:'Always empathize with a dissatisfied guest first.'},
{word:'Compensation', ipa:'ˌkɒmpənˈseɪʃən', def:'Something given to make up for a problem', def_es:'compensación', example:'We offered the guest a complimentary dessert as compensation.'},
{word:'Escalate', ipa:'ˈɛskəleɪt', def:'To make a problem worse or pass it to a higher authority', def_es:'escalar / agravar', example:'If you cannot solve it, escalate to the manager.'},
{word:'Unacceptable', ipa:'ˌʌnəkˈsɛptəbəl', def:'Not good enough; below standard', def_es:'inaceptable', example:'The noise level in the room was unacceptable.'},
{word:'Alternative', ipa:'ɔːlˈtɜːrnətɪv', def:'Another option or solution', def_es:'alternativa', example:'Can I offer you an alternative dish?'},
{word:'Miscommunication', ipa:'ˌmɪskəˌmjuːnɪˈkeɪʃən', def:'A failure in communication that caused a problem', def_es:'malentendido / falla de comunicación', example:'There was a miscommunication about the reservation time.'},
{word:'Refund', ipa:'ˈriːfʌnd', def:'Money returned to a customer for a problem', def_es:'reembolso', example:'We will process a full refund for the inconvenience.'}
],
listening:{
title:'Handling an Angry Guest',
preListening:'A guest is very angry about their hotel room. The front desk manager handles the situation. Listen for the complaint, the solution offered, and how the manager de-escalates the situation.',
transcript:'Excuse me — I need to speak with someone in charge right now! Of course, Sir. I\'m the duty manager. How can I help you? This is unacceptable! My room is next to the elevator and the noise is constant. I haven\'t slept at all! I completely understand your frustration, and I sincerely apologize for the inconvenience. That is absolutely not the experience we want you to have. Let me find you a quieter room right away. I can offer you a room on the fifth floor, which overlooks the garden — it\'s much quieter, I promise. And as compensation for your experience tonight, I would like to offer you complimentary breakfast for tomorrow and a discount on your bill. I truly value your feedback, and I want to make this right for you. Shall I have someone help you move your bags? Once again, I am deeply sorry for this, and I hope the rest of your stay will be excellent.',
transcriptEs:'¡Disculpe — necesito hablar con alguien a cargo ahora mismo! Por supuesto, señor. Soy el gerente de turno. ¿En qué puedo ayudarle? ¡Esto es inaceptable! Mi habitación está al lado del ascensor y el ruido es constante. ¡No he dormido nada! Entiendo completamente su frustración y me disculpo sinceramente por el inconveniente. Eso no es para nada la experiencia que queremos que tenga. Permítame encontrarle una habitación más tranquila de inmediato. Puedo ofrecerle una habitación en el quinto piso, con vista al jardín — es mucho más tranquila, se lo prometo. Y como compensación por su experiencia esta noche, me gustaría ofrecerle desayuno de cortesía para mañana y un descuento en su factura. Realmente valoro su opinión y quiero solucionar esto para usted. ¿Quiere que alguien le ayude a mover su equipaje? Una vez más, lo siento profundamente y espero que el resto de su estadía sea excelente.',
questions:[
{q:'What is the guest\'s complaint?', options:['Cold room','Too much noise near the elevator','Broken TV'], correct:1},
{q:'What alternative room is offered?', options:['Ocean view on floor three','Garden view on floor five','Suite on floor seven'], correct:1},
{q:'What compensation does the manager offer?', options:['Full refund','Complimentary breakfast and a discount','Free room upgrade'], correct:1}
]
},
dialogue:{
title:'Resolving a Complaint at the Restaurant',
situation:'📍 A customer complains to the manager about their food and service.',
lines:[
{speaker:'CUSTOMER', text:'Excuse me. I\'ve been waiting forty minutes and my food still hasn\'t arrived.'},
{speaker:'MANAGER', text:'I\'m so sorry to hear that. I completely understand how frustrating that must be.'},
{speaker:'CUSTOMER', text:'This is unacceptable. I have a meeting in thirty minutes.'},
{speaker:'MANAGER', text:'You are absolutely right, and I sincerely apologize. Let me check with the kitchen immediately.'},
{speaker:'CUSTOMER', text:'I just wanted the grilled chicken — it\'s not complicated!'},
{speaker:'MANAGER', text:'I will personally bring it to your table in five minutes. As compensation, your meal will be complimentary tonight.'},
{speaker:'CUSTOMER', text:'Well... thank you. I appreciate that.'},
{speaker:'MANAGER', text:'I truly value your feedback. This will not happen again. Enjoy your meal!'}
],
practicePrompt:'Practice handling complaints. Use: I understand..., I sincerely apologize..., Let me..., As compensation..., I will personally...'
},
grammar:{
title:'Past Simple — Describing What Happened',
explanation:'At A2, we use the Past Simple to describe what happened — important for explaining complaints. Regular verbs: add -ED. Irregular verbs: learn the forms (wait → waited, bring → brought, say → said, have → had).',
examples:['The guest waited forty minutes for the food.','We moved him to a quieter room on the fifth floor.','She said the service was slow and the food was cold.'],
exercises:[
{question:'The guest ___ for forty minutes before the food arrived.', options:['wait','waited','waiting'], correct:1},
{question:'I ___ the manager and she resolved the problem quickly.', options:['call','called','calling'], correct:1},
{question:'The housekeeper ___ the wrong room by mistake.', options:['clean','cleaned','cleaning'], correct:1},
{question:'The chef ___ a completely new dish as compensation.', options:['prepare','preparing','prepared'], correct:2},
{question:'There ___ a miscommunication about the reservation time.', options:['is','was','were'], correct:1}
]
},
oralPractice:{
title:'Complaint Handling — Practice',
instruction:'Use the complaint dialogue. Fill in the blanks and choose the best manager response.',
exercises:[
{type:'fill', sentence:'I\'m so sorry to hear that. I completely understand how ____ that must be.', options:['frustrating','wonderful','exciting'], correct:0, answer:'frustrating', translation:'Lo siento mucho. Entiendo completamente lo frustrante que debe ser.'},
{type:'fill', sentence:'You are absolutely right, and I sincerely ____. Let me check with the kitchen.', options:['apologize','agree','understand'], correct:0, answer:'apologize', translation:'Tiene usted toda la razón, y me disculpo sinceramente. Déjeme verificar con la cocina.'},
{type:'match', speaker:'CUSTOMER', prompt:'I just wanted the grilled chicken — it\'s not complicated!', options:['I will personally bring it in five minutes. Your meal is complimentary.','I understand, but the kitchen is busy.','Would you like something else?'], correct:0, answer:'I will personally bring it in five minutes. Your meal is complimentary.', translation:'¡Solo quería el pollo a la parrilla — no es complicado! — Lo traeré personalmente en cinco minutos. Su comida es cortesía de la casa.'},
{type:'fill', sentence:'I truly value your ____. This will not happen again.', options:['feedback','order','time'], correct:0, answer:'feedback', translation:'Realmente valoro su opinión. Esto no volverá a ocurrir.'}
]
},
speaking:[
{icon:'😤', type:'De-escalation Role Play', prompt:'A guest is angry because: 1) their room had no hot water, 2) housekeeping entered without knocking. You are the manager. Empathize, apologize, offer two solutions, and thank the guest for their feedback.', promptEs:'Un huésped está enojado porque: 1) su habitación no tenía agua caliente, 2) limpieza entró sin llamar. Sos el gerente. Empatizá, disculpate, ofrecé dos soluciones y agradecé al huésped por su opinión.', model:'I am so sorry — that is absolutely unacceptable, and I completely understand your frustration. We will move you to a room on the top floor immediately, with guaranteed hot water. I will also personally speak with the housekeeping team about knocking. As compensation, tonight\'s stay is complimentary. Thank you so much for bringing this to our attention.', modelEs:'Lo siento mucho — eso es absolutamente inaceptable y entiendo completamente su frustración. Le mudaremos a una habitación en el último piso de inmediato, con agua caliente garantizada. También hablaré personalmente con el equipo de limpieza sobre llamar antes de entrar. Como compensación, la estadía de esta noche es cortesía de la casa. Muchas gracias por traernos esto a la atención.'},
{icon:'📞', type:'Phone Complaint', prompt:'A guest calls the front desk to complain that: the internet is not working, and the minibar was not restocked. Apologize, explain what you will do, give a timeline, and offer something extra.', promptEs:'Un huésped llama a la recepción para quejarse de que: el internet no funciona y el minibar no fue repuesto. Disculpate, explicá lo que harás, da un tiempo estimado y ofrece algo extra.', model:'I\'m very sorry for the inconvenience! I will send our IT team to your room within fifteen minutes to fix the internet. For the minibar, housekeeping will restock it in the next ten minutes. As an apology, I\'d like to offer you a complimentary drink from the bar. Is there anything else I can help you with?', modelEs:'¡Lo siento mucho por el inconveniente! Enviaré a nuestro equipo de IT a su habitación en quince minutos para arreglar el internet. Para el minibar, mucamas lo repondrá en los próximos diez minutos. Como disculpa, me gustaría ofrecerle una bebida de cortesía del bar. ¿Hay algo más en lo que pueda ayudarle?'}
],
review:[
{sentence:'To suggest a more expensive option is to ___ a product.', options:['upsell','cancel','describe'], correct:0},
{sentence:'A wine that goes well with a dish ___ the food.', options:['pairs','complements','describes'], correct:1},
{sentence:'\"The red wine is ___ than the white wine.\" (bold)', options:['more bold','bolder','boldest'], correct:1},
{sentence:'An aperitif is served ___ the meal.', options:['during','after','before'], correct:2},
{sentence:'\"By the ___\" means ordering one glass, not the whole bottle.', options:['cup','glass','jug'], correct:1}
],
videos:[
{title:'Handling Complaints in English — Customer Service', channel:'Oxford Online English', duration:'8:00', url:'https://www.youtube.com/watch?v=Zy1h49_L8ME'},
{title:'Professional English — Dealing with Difficult Customers', channel:'Business English Pod', duration:'7:00', url:'https://www.youtube.com/watch?v=BN-Lmqt0JLI'}
],
videoExercise:{
title:'🎬 Video Quiz — Complaints & Problem Solving',
instruction:'Watch the videos and choose the correct answer for each question.',
instructionEs:'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
questions:[
{q:'To \"empathize\" with a guest means to:', qEs:'\"Empatizar\" con un huésped significa:', options:['understand and share their feelings','give them a discount','call the manager'], optionsEs:['entender y compartir sus sentimientos','darles un descuento','llamar al gerente'], correct:0},
{q:'\"Compensation\" in a complaint situation is:', qEs:'La \"compensación\" en una situación de queja es:', options:['something offered to make up for a problem','an apology letter','a refund policy'], optionsEs:['algo que se ofrece para compensar un problema','una carta de disculpa','una política de reembolso'], correct:0},
{q:'If you cannot solve a problem, you should ___ it to a manager.', qEs:'Si no puedes resolver un problema, debes ___ al gerente.', options:['escalate','apologize','ignore'], optionsEs:['escalar','disculparse','ignorar'], correct:0},
{q:'\"The guest waited forty minutes.\" This uses the ___ tense.', qEs:'\"El cliente esperó cuarenta minutos.\" Esto usa el tiempo ___', options:['past simple','present simple','future'], optionsEs:['pasado simple','presente simple','futuro'], correct:0},
{q:'A \"refund\" is:', qEs:'Un \"reembolso\" es:', options:['money returned for a problem','a free dessert','an apology'], optionsEs:['dinero devuelto por un problema','un postre gratis','una disculpa'], correct:0}
]
}
},
{
id:7, emoji:'💼',
title:'Job Interviews & Workplace Communication',
topic:'Answering interview questions, describing experience, and professional workplace language at A2 level',
revision:[
{eng:'I sincerely apologize for the inconvenience tonight.', template:'I [sincerely] apologize for the [inconvenience] tonight.', esp:'Me disculpo sinceramente por el inconveniente esta noche.'},
{eng:'I completely understand your frustration with the wait.', template:'I [completely] understand your [frustration] with the wait.', esp:'Entiendo completamente su frustración con la espera.'},
{eng:'As compensation, I will offer you a complimentary meal.', template:'As [compensation], I will offer you a [complimentary] meal.', esp:'Como compensación, le ofreceré una comida cortesía de la casa.'},
{eng:'The guest was clearly dissatisfied with the service.', template:'The guest was clearly [dissatisfied] with the [service].', esp:'El huésped estaba claramente insatisfecho con el servicio.'},
{eng:'Can I offer you an alternative dish tonight?', template:'Can I offer you an [alternative] [dish] tonight?', esp:'¿Puedo ofrecerle un plato alternativo esta noche?'},
{eng:'I will escalate this issue to the manager now.', template:'I will [escalate] this issue to the [manager] now.', esp:'Escalaré este problema al gerente ahora.'},
{eng:'There was a miscommunication about the reservation.', template:'There was a [miscommunication] about the [reservation].', esp:'Hubo un malentendido sobre la reserva.'},
{eng:'We will process a full refund for your trouble.', template:'We will process a full [refund] for your [trouble].', esp:'Procesaremos un reembolso completo por su inconveniente.'},
{eng:'The guest waited forty-five minutes for the food.', template:'The guest [waited] forty-five minutes for the [food].', esp:'El huésped esperó cuarenta y cinco minutos por la comida.'},
{eng:'We moved her to a quieter room on the fifth floor.', template:'We [moved] her to a quieter [room] on the fifth floor.', esp:'La mudamos a una habitación más tranquila en el quinto piso.'}
],
vocabulary:[
{word:'Experience', ipa:'ɪkˈspɪəriəns', def:'Work done in the past in a job or field', def_es:'experiencia', example:'I have two years of experience in hotel reception.'},
{word:'Responsible for', ipa:'rɪˈspɒnsɪbl fɔːr', def:'In charge of a task or area', def_es:'responsable de', example:'I was responsible for training new staff.'},
{word:'Teamwork', ipa:'ˈtiːmwɜːrk', def:'Working well with other people', def_es:'trabajo en equipo', example:'I believe teamwork is essential in hospitality.'},
{word:'Shift', ipa:'ʃɪft', def:'A period of time worked, like a morning or night shift', def_es:'turno', example:'I am available for morning and evening shifts.'},
{word:'References', ipa:'ˈrɛfrənsɪz', def:'People who can confirm your work experience', def_es:'referencias', example:'I can provide two references from my previous job.'},
{word:'Initiative', ipa:'ɪˈnɪʃətɪv', def:'The ability to take action without being told', def_es:'iniciativa', example:'She always takes initiative when problems arise.'},
{word:'Bilingual', ipa:'baɪˈlɪŋɡwəl', def:'Able to speak two languages well', def_es:'bilingüe', example:'Being bilingual is a great advantage in tourism.'},
{word:'Professional development', ipa:'prəˈfɛʃənl dɪˈvɛləpmənt', def:'Activities that improve your skills for work', def_es:'desarrollo profesional', example:'I am always looking for professional development opportunities.'}
],
listening:{
title:'A Job Interview at a Hotel',
preListening:'Listen to a job interview for a front desk position at a hotel. Notice how the applicant describes their experience and skills.',
transcript:'Good morning! Please, have a seat. Thank you for coming in. Can you start by telling me a little about yourself? Of course. My name is Valentina Ruiz and I have three years of experience working in hospitality. I started as a waitress at a café and then worked as a receptionist at a small hotel. I\'m bilingual — I speak Spanish and English fluently. That\'s excellent. What would you say is your strongest quality? I think my strongest quality is my ability to stay calm under pressure. In hospitality, difficult situations happen, and I always try to listen first, empathize with the guest, and find the best solution quickly. Can you give me an example? Yes — last year, a guest was very upset about a noisy room. I moved them to a quieter room, offered a complimentary breakfast, and they left a five-star review. I believe teamwork and initiative are also very important. I\'m available for all shifts. When can you start?',
transcriptEs:'¡Buenos días! Por favor, tome asiento. Gracias por venir. ¿Puede comenzar contándome un poco sobre usted? Por supuesto. Me llamo Valentina Ruiz y tengo tres años de experiencia en hotelería. Empecé como moza en un café y luego trabajé como recepcionista en un hotel pequeño. Soy bilingüe — hablo español e inglés con fluidez. Excelente. ¿Cuál diría que es su mayor fortaleza? Creo que mi mayor fortaleza es mi capacidad para mantenerme tranquila bajo presión. En hotelería, ocurren situaciones difíciles y siempre trato de escuchar primero, empatizar con el huésped y encontrar la mejor solución rápidamente. ¿Puede darme un ejemplo? Sí — el año pasado, un huésped estaba muy molesto por una habitación ruidosa. Lo mudé a una habitación más tranquila, le ofrecí un desayuno de cortesía y dejó una reseña de cinco estrellas. Creo que el trabajo en equipo y la iniciativa también son muy importantes. Estoy disponible para todos los turnos. ¿Cuándo puede empezar?',
questions:[
{q:'How many years of experience does Valentina have?', options:['One year','Two years','Three years'], correct:2},
{q:'What does she say is her strongest quality?', options:['Speed','Staying calm under pressure','Her cooking skills'], correct:1},
{q:'What did she offer the unhappy guest?', options:['A refund','A quieter room and complimentary breakfast','A free upgrade'], correct:1}
]
},
dialogue:{
title:'Job Interview — Restaurant Position',
situation:'📍 A job interview for a server position at an upscale restaurant.',
lines:[
{speaker:'MANAGER', text:'Good afternoon! Thank you for coming in. Have you worked in a restaurant before?'},
{speaker:'APPLICANT', text:'Yes, I have. I worked as a waiter at La Pergola for eighteen months.'},
{speaker:'MANAGER', text:'Excellent! What were you responsible for there?'},
{speaker:'APPLICANT', text:'I was responsible for taking orders, serving food, and handling payments. I also trained two new staff members.'},
{speaker:'MANAGER', text:'How do you handle a difficult customer?'},
{speaker:'APPLICANT', text:'I always listen carefully, stay calm, and apologize sincerely. Then I offer a solution — for example, a replacement dish or a complimentary drink.'},
{speaker:'MANAGER', text:'Very good. Are you available for evening shifts?'},
{speaker:'APPLICANT', text:'Yes, I\'m available every evening and on weekends.'},
{speaker:'MANAGER', text:'Perfect. We\'ll be in touch by Friday. Thank you!'}
],
practicePrompt:'Practice answering interview questions. Use: I have experience in... I was responsible for... I believe... I am available for...'
},
grammar:{
title:'Present Perfect — Talking About Experience',
explanation:'At A2, we use the PRESENT PERFECT to talk about life experience. Use HAVE + PAST PARTICIPLE. Key phrases: I have worked... I have trained... I have never... Have you ever...? This is very common in job interviews.',
examples:['I have worked in three hotels in two years.','I have trained new staff members.','Have you ever managed a restaurant team?'],
exercises:[
{question:'I ___ worked in hospitality for three years.', options:['have','had','am'], correct:0},
{question:'She ___ trained new staff at her previous job.', options:['has','have','had'], correct:0},
{question:'Have you ever ___ a complaint from a VIP guest?', options:['handle','handled','handling'], correct:1},
{question:'We ___ never had a guest leave a one-star review.', options:['has','had','have'], correct:2},
{question:'___ he ever worked the night shift?', options:['Have','Has','Did'], correct:1}
]
},
oralPractice:{
title:'Interview Language — Practice',
instruction:'Practice answering interview questions. Fill in the blanks and choose the best professional answer.',
exercises:[
{type:'fill', sentence:'I have ___ years of experience working in hospitality.', options:['three','many','some'], correct:0, answer:'three', translation:'Tengo tres años de experiencia trabajando en hotelería.'},
{type:'fill', sentence:'I was responsible for taking orders, serving food, and handling ____.', options:['payments','people','problems'], correct:0, answer:'payments', translation:'Era responsable de tomar pedidos, servir comida y manejar pagos.'},
{type:'match', speaker:'MANAGER', prompt:'How do you handle a difficult customer?', options:['I listen carefully, stay calm, and offer a solution.','I call the police immediately.','I ignore them and continue working.'], correct:0, answer:'I listen carefully, stay calm, and offer a solution.', translation:'¿Cómo maneja a un cliente difícil? — Escucho con atención, me mantengo tranquilo/a y ofrezco una solución.'},
{type:'fill', sentence:'I\'m available every evening and on ____.', options:['weekends','holidays','Mondays'], correct:0, answer:'weekends', translation:'Estoy disponible todas las noches y los fines de semana.'}
]
},
speaking:[
{icon:'🎯', type:'Self-Introduction for an Interview', prompt:'Introduce yourself for a job interview at a hotel or restaurant. Say your name, how many years of experience you have, where you worked before, and your two strongest qualities.', promptEs:'Preséntate para una entrevista de trabajo en un hotel o restaurante. Di tu nombre, cuántos años de experiencia tenés, dónde trabajaste antes y tus dos cualidades más fuertes.', model:'Good morning! My name is Lucas Fernandez. I have two years of experience in hospitality. I worked as a receptionist at the Plaza Hotel and as a server at Café Moderno. My strongest qualities are my bilingual communication skills and my ability to stay calm and professional under pressure.', modelEs:'¡Buenos días! Mi nombre es Lucas Fernández. Tengo dos años de experiencia en hotelería. Trabajé como recepcionista en el Hotel Plaza y como mesero en el Café Moderno. Mis cualidades más fuertes son mis habilidades de comunicación bilingüe y mi capacidad para mantenerme tranquilo y profesional bajo presión.'},
{icon:'❓', type:'Interview Q&A', prompt:'Answer these typical hospitality interview questions: 1) Why do you want to work here? 2) Describe a time you solved a customer problem. 3) How do you handle working under pressure?', promptEs:'Respondé estas preguntas típicas de entrevista en hotelería: 1) ¿Por qué quiere trabajar aquí? 2) Describe una vez que resolviste un problema de cliente. 3) ¿Cómo manejas trabajar bajo presión?', model:'1) I want to work here because this hotel has an excellent reputation for service. 2) Once, a guest\'s food arrived cold. I apologized, brought a fresh dish, and offered a complimentary dessert. They left very happy. 3) Under pressure, I focus on one task at a time and communicate with my team.', modelEs:'1) Quiero trabajar aquí porque este hotel tiene una excelente reputación por su servicio. 2) Una vez, la comida de un huésped llegó fría. Me disculpé, traje un plato fresco y ofrecí un postre de cortesía. Se fue muy satisfecho. 3) Bajo presión, me concentro en una tarea a la vez y me comunico con mi equipo.'}
],
review:[
{sentence:'A guest was unhappy because there was constant ___ near the elevator.', options:['music','light','noise'], correct:2},
{sentence:'To make a problem worse or pass it to a higher authority is to ___ it.', options:['resolve','escalate','handle'], correct:1},
{sentence:'Something given to make up for a problem is called ___.', options:['feedback','compensation','a refund'], correct:1},
{sentence:'The guest ___ forty minutes for the food (past simple of wait).', options:['wait','waiting','waited'], correct:2},
{sentence:'If a situation cannot be solved, you should ___ to the manager.', options:['complain','escalate','apologize'], correct:1}
],
videos:[
{title:'English Job Interview — Hospitality Questions', channel:'Business English Pod', duration:'8:00', url:'https://www.youtube.com/watch?v=BN-Lmqt0JLI'},
{title:'Describe Your Experience in English — Work Vocabulary', channel:'Oxford Online English', duration:'7:00', url:'https://www.youtube.com/watch?v=Wjy2OT6KZSI'}
],
videoExercise:{
title:'🎬 Video Quiz — Job Interviews & Work Language',
instruction:'Watch the videos and choose the correct answer for each question.',
instructionEs:'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
questions:[
{q:'In an interview, \"experience\" means:', qEs:'En una entrevista, \"experiencia\" significa:', options:['work done in the past','a diploma or degree','a skill test'], optionsEs:['trabajo realizado en el pasado','un diploma o título','una prueba de habilidades'], correct:0},
{q:'\"I have worked in three hotels.\" This uses the:', qEs:'\"He trabajado en tres hoteles.\" Esto usa el:', options:['present simple','present perfect','past simple'], optionsEs:['presente simple','presente perfecto','pasado simple'], correct:1},
{q:'\"Teamwork\" means:', qEs:'\"Trabajo en equipo\" significa:', options:['working well with others','working alone efficiently','being a team leader'], optionsEs:['trabajar bien con otros','trabajar solo eficientemente','ser líder de equipo'], correct:0},
{q:'A \"shift\" at work is:', qEs:'Un \"turno\" en el trabajo es:', options:['a period of time worked','a job title','a uniform'], optionsEs:['un período de tiempo trabajado','un título de trabajo','un uniforme'], correct:0},
{q:'\"Have you ever managed a team?\" This is asking about:', qEs:'\"¿Ha manejado alguna vez un equipo?\" Esto pregunta sobre:', options:['past experience','future plans','current job'], optionsEs:['experiencia pasada','planes futuros','trabajo actual'], correct:0}
]
}
},
{
id:8, emoji:'🌟',
title:'Professional Communication & Career Growth',
topic:'Written communication, professional emails, performance reviews, and career development at A2 level',
revision:[
{eng:'I have three years of experience in hospitality.', template:'I have [three] years of [experience] in hospitality.', esp:'Tengo tres años de experiencia en hotelería.'},
{eng:'I was responsible for training the new staff.', template:'I was [responsible] for [training] the new staff.', esp:'Era responsable de capacitar al nuevo personal.'},
{speaker:'I believe teamwork is essential in our industry.', template:'I believe [teamwork] is [essential] in our industry.', esp:'Creo que el trabajo en equipo es esencial en nuestra industria.'},
{eng:'I am available for morning and evening shifts.', template:'I am [available] for morning and [evening] shifts.', esp:'Estoy disponible para los turnos de mañana y de noche.'},
{eng:'Have you ever handled a VIP guest complaint?', template:'Have you [ever] handled a VIP guest [complaint]?', esp:'¿Alguna vez manejaste una queja de un huésped VIP?'},
{eng:'She takes initiative when problems arise at work.', template:'She takes [initiative] when [problems] arise at work.', esp:'Ella toma la iniciativa cuando surgen problemas en el trabajo.'},
{eng:'Being bilingual is a great advantage in tourism.', template:'Being [bilingual] is a great [advantage] in tourism.', esp:'Ser bilingüe es una gran ventaja en el turismo.'},
{eng:'I can provide two references from my previous job.', template:'I can provide two [references] from my [previous] job.', esp:'Puedo proveer dos referencias de mi trabajo anterior.'},
{eng:'My professional development is very important to me.', template:'My [professional] [development] is very important to me.', esp:'Mi desarrollo profesional es muy importante para mí.'},
{eng:'I always listen carefully before offering a solution.', template:'I always [listen] carefully before [offering] a solution.', esp:'Siempre escucho con atención antes de ofrecer una solución.'}
],
vocabulary:[
{word:'Performance review', ipa:'pəˈfɔːrməns rɪˈvjuː', def:'A formal evaluation of an employee\'s work', def_es:'evaluación de desempeño', example:'My performance review is next week.'},
{word:'Goal', ipa:'ɡoʊl', def:'Something you want to achieve in the future', def_es:'meta / objetivo', example:'My goal is to become a head waiter by next year.'},
{word:'Strengths', ipa:'strɛŋkθs', def:'Things you do very well', def_es:'fortalezas', example:'One of my strengths is excellent customer communication.'},
{word:'Area for improvement', ipa:'ˈɛəriə fɔːr ɪmˈpruːvmənt', def:'A skill or area where you can get better', def_es:'área de mejora', example:'My area for improvement is my knowledge of wine.'},
{word:'Promotion', ipa:'prəˈmoʊʃən', def:'Moving to a higher position or level at work', def_es:'ascenso / promoción', example:'She received a promotion to head receptionist.'},
{word:'Certificate', ipa:'sərˈtɪfɪkɪt', def:'An official document that proves a skill or training', def_es:'certificado', example:'I have a certificate in food safety.'},
{word:'Reliable', ipa:'rɪˈlaɪəbl', def:'Can be trusted to do a job well and on time', def_es:'confiable', example:'She is one of our most reliable employees.'},
{word:'Commitment', ipa:'kəˈmɪtmənt', def:'A strong dedication to your work or responsibilities', def_es:'compromiso', example:'His commitment to excellent service is impressive.'}
],
listening:{
title:'A Performance Review Meeting',
preListening:'A hotel manager is conducting a performance review with a receptionist. Listen for the strengths mentioned, the area for improvement, and the employee\'s goal.',
transcript:'Come in, Rosa! Please have a seat. I\'d like to talk about your performance over the last six months. Overall, I am very impressed. Your customer communication skills are outstanding — guests regularly mention your name in their positive reviews. You are reliable, always punctual, and you have shown great initiative in solving problems independently. You have grown a lot this year and I can see your commitment to this hotel. Now, one area for improvement: your knowledge of our food and beverage menu could be stronger. I\'d recommend taking our internal training course. Also, your spoken English in complex situations could be more confident. What are your goals for the next year? My goal is to become a senior receptionist and eventually manage the front desk team. I think that\'s absolutely achievable. Let\'s set a plan together. Keep up the excellent work, Rosa!',
transcriptEs:'¡Adelante, Rosa! Por favor, tome asiento. Me gustaría hablar sobre su desempeño en los últimos seis meses. En general, estoy muy impresionado. Sus habilidades de comunicación con los clientes son sobresalientes — los huéspedes mencionan su nombre regularmente en sus reseñas positivas. Es confiable, siempre puntual y ha demostrado gran iniciativa para resolver problemas de forma independiente. Ha crecido mucho este año y puedo ver su compromiso con este hotel. Ahora, un área de mejora: su conocimiento de nuestro menú de comida y bebidas podría ser más sólido. Le recomendaría tomar nuestro curso de capacitación interno. Además, su inglés hablado en situaciones complejas podría ser más seguro. ¿Cuáles son sus objetivos para el próximo año? Mi objetivo es convertirme en recepcionista senior y eventualmente gestionar el equipo de recepción. Creo que eso es absolutamente alcanzable. Tracemos un plan juntos. ¡Sigue haciendo un excelente trabajo, Rosa!',
questions:[
{q:'What does the manager say about Rosa\'s customer communication?', options:['It needs improvement','It is outstanding','It is average'], correct:1},
{q:'What is Rosa\'s area for improvement?', options:['Punctuality','Food and beverage menu knowledge','Her initiative'], correct:1},
{q:'What is Rosa\'s career goal?', options:['To become a chef','To manage the front desk team','To work in another hotel'], correct:2}
]
},
dialogue:{
title:'A Professional Conversation About Career Goals',
situation:'📍 An employee talks to their supervisor about professional growth and opportunities.',
lines:[
{speaker:'SUPERVISOR', text:'Hi Daniel! I wanted to speak with you about your progress. You\'ve been doing really well lately.'},
{speaker:'DANIEL', text:'Thank you! I\'ve been working hard and I really enjoy the job.'},
{speaker:'SUPERVISOR', text:'I can see that. What are your career goals for the next year?'},
{speaker:'DANIEL', text:'My goal is to improve my English and get a certificate in hospitality management.'},
{speaker:'SUPERVISOR', text:'That\'s excellent! We actually have an internal training program. Would you be interested?'},
{speaker:'DANIEL', text:'Absolutely! I believe professional development is really important.'},
{speaker:'SUPERVISOR', text:'Wonderful. I\'ll also recommend you for the team leader position next quarter.'},
{speaker:'DANIEL', text:'That would be amazing! Thank you for believing in me.'},
{speaker:'SUPERVISOR', text:'Your commitment and reliability have not gone unnoticed. Keep it up!'}
],
practicePrompt:'Practice talking about career goals. Use: My goal is to... I believe... I\'d like to improve... I am interested in... Thank you for the opportunity.'
},
grammar:{
title:'Would Like To / Want To / Plan To — Talking About Goals',
explanation:'At A2, we use WOULD LIKE TO, WANT TO, and PLAN TO to talk about future goals and ambitions — very useful in performance reviews and interviews. WOULD LIKE TO is more formal and polite.',
examples:['I would like to become a supervisor next year.','I plan to take the hospitality certificate course.','I want to improve my English communication skills.'],
exercises:[
{question:'I ___ like to become the head receptionist by next year.', options:['am','would','will'], correct:1},
{question:'She ___ to take an online hospitality certificate course.', options:['plan','plans','planning'], correct:1},
{question:'We ___ to improve our response time for guest complaints.', options:['want','would','plan'], correct:0},
{question:'I ___ like to learn more about wine pairing and upselling.', options:['am going','would','will'], correct:1},
{question:'He ___ to speak with the manager about a promotion next month.', options:['plans','planning','plan'], correct:0}
]
},
oralPractice:{
title:'Career Communication — Practice',
instruction:'Practice the performance review dialogue. Fill in the blanks and choose the best professional response.',
exercises:[
{type:'fill', sentence:'Your customer communication skills are ____. Guests mention your name in reviews.', options:['outstanding','average','improving'], correct:0, answer:'outstanding', translation:'Tus habilidades de comunicación con clientes son sobresalientes. Los huéspedes mencionan tu nombre en las reseñas.'},
{type:'fill', sentence:'One area for improvement: your knowledge of our food and beverage ____ could be stronger.', options:['menu','team','schedule'], correct:0, answer:'menu', translation:'Un área de mejora: tu conocimiento de nuestro menú de comida y bebidas podría ser más sólido.'},
{type:'match', speaker:'SUPERVISOR', prompt:'What are your career goals for the next year?', options:['My goal is to get a certificate and improve my English.','I don\'t have any goals.','I want a raise.'], correct:0, answer:'My goal is to get a certificate and improve my English.', translation:'¿Cuáles son tus metas profesionales para el próximo año? — Mi objetivo es obtener un certificado y mejorar mi inglés.'},
{type:'fill', sentence:'Your ____ and reliability have not gone unnoticed. Keep it up!', options:['commitment','attitude','appearance'], correct:0, answer:'commitment', translation:'Tu compromiso y confiabilidad no han pasado desapercibidos. ¡Sigue así!'}
]
},
speaking:[
{icon:'📊', type:'My Performance Review', prompt:'Imagine your manager is reviewing your work. Describe: 1) two of your strengths at work, 2) one area you want to improve, 3) your goal for the next six months. Use: My strength is... My area for improvement is... My goal is to...', promptEs:'Imaginá que tu gerente está evaluando tu trabajo. Describí: 1) dos de tus fortalezas en el trabajo, 2) un área que querés mejorar, 3) tu meta para los próximos seis meses. Usá: My strength is... My area for improvement is... My goal is to...', model:'Thank you for the opportunity! My two main strengths are my ability to stay calm with difficult guests and my attention to detail in cleaning protocols. My area for improvement is my English vocabulary for complex situations. My goal for the next six months is to complete the hospitality management certificate and become team leader.', modelEs:'¡Gracias por la oportunidad! Mis dos principales fortalezas son mi capacidad para mantenerme tranquilo/a con huéspedes difíciles y mi atención al detalle en los protocolos de limpieza. Mi área de mejora es mi vocabulario en inglés para situaciones complejas. Mi objetivo para los próximos seis meses es completar el certificado de gestión hotelera y convertirme en líder de equipo.'},
{icon:'✉️', type:'Professional Message', prompt:'Write a short professional message (spoken or written) to your manager asking: 1) for time off next Friday, 2) to attend a training course, 3) to discuss a promotion opportunity. Be polite and formal.', promptEs:'Escribí un mensaje profesional corto (hablado o escrito) a tu gerente pidiendo: 1) día libre el próximo viernes, 2) asistir a un curso de capacitación, 3) hablar sobre una oportunidad de ascenso. Sé educado y formal.', model:'Dear Manager, I would like to request next Friday off for a personal matter. I would also like to attend the hospitality training course next month — I believe it will improve my service skills. Finally, I would like to discuss a promotion opportunity when you have time. Thank you for your support. Best regards, Lucas.', modelEs:'Estimado/a Gerente, me gustaría solicitar el próximo viernes libre por un asunto personal. También me gustaría asistir al curso de capacitación en hotelería el próximo mes — creo que mejorará mis habilidades de servicio. Por último, me gustaría hablar sobre una oportunidad de ascenso cuando tenga tiempo. Gracias por su apoyo. Saludos, Lucas.'}
],
review:[
{sentence:'A formal evaluation of an employee\'s work is called a performance ___.', options:['test','review','certificate'], correct:1},
{sentence:'Something you want to achieve at work is called a ___.', options:['promotion','goal','strength'], correct:1},
{sentence:'An employee who can be trusted to work well is described as ___.', options:['reliable','competitive','bilingual'], correct:0},
{sentence:'\"I ___ like to become a supervisor.\" — future goal, polite form.', options:['would','will','am'], correct:0},
{sentence:'Moving to a higher position at work is called a ___.', options:['certificate','goal','promotion'], correct:2}
],
videos:[
{title:'English for Career Development — Work Vocabulary', channel:'Oxford Online English', duration:'7:00', url:'https://www.youtube.com/watch?v=Wjy2OT6KZSI'},
{title:'Performance Review English — Professional Phrases', channel:'Business English Pod', duration:'8:00', url:'https://www.youtube.com/watch?v=BN-Lmqt0JLI'}
],
videoExercise:{
title:'🎬 Video Quiz — Professional Communication & Career',
instruction:'Watch the videos and choose the correct answer for each question.',
instructionEs:'Mirá los videos y elegí la respuesta correcta para cada pregunta.',
questions:[
{q:'A formal evaluation of an employee\'s work is a:', qEs:'Una evaluación formal del trabajo de un empleado es una:', options:['performance review','job interview','training course'], optionsEs:['evaluación de desempeño','entrevista de trabajo','curso de capacitación'], correct:0},
{q:'\"Reliable\" means an employee who can be:', qEs:'\"Confiable\" significa un empleado que puede ser:', options:['trusted to do the job well','very fast at work','very creative'], optionsEs:['en quien se puede confiar para hacer el trabajo bien','muy rápido en el trabajo','muy creativo'], correct:0},
{q:'A \"promotion\" at work means:', qEs:'Un \"ascenso\" en el trabajo significa:', options:['moving to a higher position','getting a certificate','starting a new job'], optionsEs:['pasar a una posición más alta','obtener un certificado','comenzar un nuevo trabajo'], correct:0},
{q:'\"I would like to improve my English.\" This uses:', qEs:'\"Me gustaría mejorar mi inglés.\" Esto usa:', options:['would like to (future goal)','past simple','present perfect'], optionsEs:['would like to (meta futura)','pasado simple','presente perfecto'], correct:0},
{q:'\"Commitment\" to work means:', qEs:'\"Compromiso\" con el trabajo significa:', options:['strong dedication to responsibilities','working long hours','being bilingual'], optionsEs:['fuerte dedicación a las responsabilidades','trabajar largas horas','ser bilingüe'], correct:0}
]
},
progressTest:{
title:'Progress Test 2 — A2 (Units 5–8)',
listening:{
transcript:'Listen to the hotel manager running the evening briefing: Good evening, team. Tonight we are fully booked — one hundred and twelve guests. I need everyone at their best. At table seven, we have a couple celebrating their anniversary — please make sure their experience is exceptional. Upsell tonight: our house Malbec pairs beautifully with the lamb, and we have a special dessert platter for celebrations. For complaints — remember to empathize first, then offer an alternative. If you cannot resolve a situation, escalate to me immediately. Any staff who wants to discuss their performance review or career goals can see me after the shift. Let\'s have a wonderful evening!',
questions:[
{q:'How many guests does the hotel have tonight?', options:['100','112','120'], correct:1},
{q:'What should staff do first when handling a complaint?', options:['Escalate to the manager','Offer a refund','Empathize with the guest'], correct:2}
],
},
speaking:{
prompt:'Oral Situation: You are in a performance review. Your manager asks you two questions: 1) What are your two greatest strengths? 2) Where do you see yourself in one year? Answer both questions professionally in English, using at least one example for your strengths.',
promptEs:'Situación oral: Estás en una evaluación de desempeño. Tu gerente te hace dos preguntas: 1) ¿Cuáles son tus dos mayores fortalezas? 2) ¿Dónde te ves en un año? Respondé ambas preguntas profesionalmente en inglés, usando al menos un ejemplo para tus fortalezas.',
model:'My two greatest strengths are my communication skills and my reliability. For example, last month a guest was very upset about their room, and I resolved the situation calmly — they left a five-star review. In one year, I would like to become a team leader and complete my hospitality management certificate.'
},
questions:[
{q:'Matching food with the right drink is called a:', options:['pairing','garnish','portion'], correct:0},
{q:'To suggest a more expensive option to a customer is to:', options:['upsell','discount','cancel'], correct:0},
{q:'\"The Malbec is bolder ___ the Chardonnay.\" — correct word:', options:['then','than','that'], correct:1},
{q:'An aperitif is a drink served:', options:['after dessert','before the meal','with the main course'], correct:1},
{q:'\"Still\" water means water that is:', options:['very cold','carbonated','without bubbles'], correct:2},
{q:'To understand and share a guest\'s feelings is to:', options:['escalate','empathize','compensate'], correct:1},
{q:'Something offered to make up for a poor experience is:', options:['feedback','compensation','a menu'], correct:1},
{q:'\"The guest waited forty minutes.\" The verb \"waited\" is in the:', options:['present simple','past simple','present perfect'], correct:1},
{q:'A \"miscommunication\" caused a problem. This means there was a failure in:', options:['communication','cleaning','service'], correct:0},
{q:'A \"refund\" is:', options:['money returned to the customer','a complimentary meal','an apology letter'], correct:0},
{q:'In a job interview, \"I have worked in hotels\" uses the:', options:['past simple','present perfect','future with will'], correct:1},
{q:'\"Teamwork\" is the ability to:', options:['work alone efficiently','work well with other people','lead a team'], correct:1},
{q:'A \"shift\" at work is:', options:['a period of time worked','a type of uniform','a work schedule'], correct:0},
{q:'Being able to speak two languages is called being:', options:['bilingual','multilingual','reliable'], correct:0},
{q:'A performance ___ is a formal evaluation of an employee\'s work.', options:['test','interview','review'], correct:2},
{q:'\"I would like to become a supervisor.\" This expresses a:', options:['complaint','future goal','past experience'], correct:1},
{q:'An employee who can be trusted and always does their job well is:', options:['reliable','committed','available'], correct:0},
{q:'A \"certificate\" is an official document that proves:', options:['a skill or training','work experience','a promotion'], correct:0},
{q:'\"Area for improvement\" means:', options:['something you are best at','a skill you can develop further','your career goal'], correct:1},
{q:'A \"promotion\" at work means:', options:['getting a certificate','moving to a higher position','changing your shift'], correct:1}
]
}
}
]);
