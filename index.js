// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola, pregúntame que puedo sembrar y te diré los cultivos que se adaptan a cada mes del año.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const SowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SowIntent';
    },
    handle(handlerInput) {
        var d = new Date();
        var n = d.getMonth();
        if(n === 0) {
            const speakOutput = 'En enero ya estamos metidos en pleno invierno, y dependiendo de la zona podemos tener heladas frecuentes, con lo que puede ser conveniente proteger las siembras. Uno de los cultivos que podemos plantar durante todo el año es la acelga. Se siembra directamente en la tierra, necesita suelo húmedo y se puede recolectar a los tres o cuatro meses. Otro de los cultivos que podemos sembrar todo el año son las espinacas. También se realiza siembra directa. Necesitan riego ligero y frecuente, y podemos cosechar a los dos o tres meses. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Necesitan riego ligero y se pueden recoger entre los dos y los cuatro meses. También se pueden sembrar rabanitos directamente en la tierra, necesitan riego a diario, y se pueden cosechar a las cuatro o cinco semanas. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa y con un riego diario las podremos recolectar a los tres o cuatro meses. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Necesita riego frecuente y si lo plantamos durante el mes de enero se recogera hacia el verano. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento. Necesita riego generoso y se trasplanta cuando tiene tres o cuatro hojas. Se recogen a los cinco o seis meses. También podemos sembrar berejena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Requiere tierra húmeda y se cosecha a los cinco meses. Si no lo hemos hecho ya, es buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. El riego, tiene que ser escaso y espaciado, y las podemos cosechar a los cinco meses. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa y necesitan que mantegamos la tierra húmeda. Los podremos empezar a recoger a los cuatro o cinco meses. Este es el último mes de la temporada para plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba. Si mantenemos la tierra húmeda en un par de semanas empiezan a germinar y los podemos recoger a los cuatro meses. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 1) {
            const speakOutput = 'En febrero podemos seguir teniendo heladas, si es nuestro caso, puede ser conveniente proteger las siembras. Uno de los cultivos que podemos plantar durante todo el año es la acelga. Se siembra directamente en la tierra, necesita suelo húmedo y se puede recolectar a los tres o cuatro meses. Otro de los cultivos que podemos sembrar todo el año son las espinacas. También se realiza siembra directa. Necesitan riego ligero y frecuente, y podemos cosechar a los dos o tres meses. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Necesitan riego ligero y se pueden recoger entre los dos y los cuatro meses. También se pueden sembrar rabanitos directamente en la tierra, necesitan riego a diario, y se pueden cosechar a las cuatro o cinco semanas. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa y con un riego diario las podremos recolectar a los tres o cuatro meses. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Necesita riego frecuente y si lo plantamos durante el mes de enero se recogera hacia el verano. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento. Necesita riego generoso y se trasplanta cuando tiene tres o cuatro hojas. Se recogen a los cinco o seis meses. También podemos sembrar berejena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Requiere tierra húmeda y se cosecha a los cinco meses. Si no lo hemos hecho ya, es buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. El riego, tiene que ser escaso y espaciado, y las podemos cosechar a los cinco meses. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa y necesitan que mantegamos la tierra húmeda. Los podremos empezar a recoger a los cuatro o cinco meses. Otros cultivos que podemos empezar a sembrar en febrero son la rúcula y el canónigo. Ambos se siembran directamente en la tierra y si mantenemos la tierra húmeda los podemos empezar a recoger a partir de mes y medio. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 2) {
            const speakOutput = 'En Marzo podemos sembrar Acelga, Ajo, Apio, Berenjena, Berro, Berza, Calabaza, Calabacín, Cebolla, Col Repollo, Endivia, Espárrago, Espinaca, Lechuga, Melón,  Nabo, Patata, Pepino, Pepinillo, Pimiento, Puerro, Rábano, Tomate, Zanahoria, Altramuz, Garbanzo, Guisante, Haba, judía, Lenteja y Soja.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 3) {
            const speakOutput = 'En Abril podemos sembrar Acelga, Ajo, Apio, Berenjena, Berro, Berza, Brécol, Cacahuete, Calabaza, Calabacín, Cebolla, Col Repollo, Endivia, Escarola, Fresón, Lechuga, Melón, Nabo, Patata, Pepino, Pepinillo, Pimiento, Puerro, Rábano, Remolacha, Sandía, Tomate, Zanahoria, Garbanzo, Guisante, Haba, judía, Lenteja y Soja.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 4) {
            const speakOutput = 'En Mayo podemos sembrar Acelga, Apio, Berenjena, Berro, Berza, Brécol, Cacahuete, Calabaza, Calabacín, Cebolla, Col Repollo, Coliflor, Escarola, Fresón, Lechuga, Melón,  Nabo, Patata, Pepino, Pepinillo, Pimiento, Rábano, Remolacha, Sandía, Tomate, Zanahoria, Guisante, judía, Lenteja y  Soja.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 5) {
            const speakOutput = 'En Junio podemos sembrar Acelga, Berenjena, Berro, Brécol, Cacahuete, Calabaza, Cardo, Cebolla, Col Repollo, Col Bruselas, Coliflor, Escarola, Fresa, Fresón,  Lechuga, Melón,  Nabo, Patata, Pepino, Pimiento, Rábano, Remolacha, Tomate, judía y Soja.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 6) {
            const speakOutput = 'En Julio podemos sembrar Acelga, Alcachofa, Apio, Berenjena, Berro, Berza, Brécol, Cacahuete, Cardo, Col Bruselas, Coliflor, Escarola, Espinaca, Fresa, Fresón, Lechuga, Nabo, Patata, Pepino, Tomate, Zanahoria y judías.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 7) {
            const speakOutput = 'En Agosto podemos sembrar Acelga, Alcachofa, Apio, Berro, Berza, Brécol, Col Repollo, Col Bruselas, Coliflor, Escarola, Espinaca, Fresa, Lechuga, Nabo, Patata, Pepino, Puerro, Rábano, Remolacha, Zanahoria, Haba y judía.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 8) {
            const speakOutput = 'En Septiembre podemos sembrar Acelga, Alcachofa, Apio, Berro, Berza, Brécol, Col Repollo, Coliflor, Escarola, Espinaca,  Fresa, Lechuga, Nabo, Puerro, Rábano, Remolacha, Zanahoria, Guisante y Haba.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 9) {
            const speakOutput = 'En Octubre podemos sembrar Acelga, Ajo, Apio, Berro, Berza, Cebolla, Col Repollo, Coliflor, Escarola, Espinaca, Fresón, Lechuga, Nabo, Puerro, Rábano, Remolacha, Zanahoria, Guisante, Haba y Lenteja.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 10) {
            const speakOutput = 'En Noviembre podemos sembrar Acelga, Ajo, Berro, Berza, Cebolla, Col Repollo, Coliflor, Escarola, Espinaca, Fresón, Lechuga, Nabo, Puerro, Rábano, Zanahoria, Garbanzo, Guisante, Haba y Lenteja.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 11) {
            const speakOutput = 'En Diciembre podemos sembrar Ajo, Berza, Cebolla, Col Repollo, Coliflor, Espinaca, Fresón, Lechuga, Nabo, Patata, Rábano, Zanahoria, Garbanzo, Guisante, Haba y Lenteja.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
    }
};

const JanuarySowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'JanuarySowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En enero ya estamos metidos en pleno invierno, y dependiendo de la zona podemos tener heladas frecuentes, con lo que puede ser conveniente proteger las siembras. Uno de los cultivos que podemos plantar durante todo el año es la acelga. Se siembra directamente en la tierra, necesita suelo húmedo y se puede recolectar a los tres o cuatro meses. Otro de los cultivos que podemos sembrar todo el año son las espinacas. También se realiza siembra directa. Necesitan riego ligero y frecuente, y podemos cosechar a los dos o tres meses. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Necesitan riego ligero y se pueden recoger entre los dos y los cuatro meses. Los rabanitos se siembran directamente en la tierra, necesitan riego a diario, y se pueden cosechar a las cuatro o cinco semanas. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa y con un riego diario las podremos recolectar a los tres o cuatro meses. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Necesita riego frecuente y si lo plantamos durante el mes de enero se recogerá hacia el verano. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento. Necesita riego generoso y se trasplanta cuando tiene tres o cuatro hojas. Se recogen a los cinco o seis meses. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Requiere tierra húmeda y se cosecha a los cinco meses. Si no lo hemos hecho ya, es buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. El riego, tiene que ser escaso y espaciado, y las podemos cosechar a los cinco meses. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa y necesitan que mantengamos la tierra húmeda. Los podremos empezar a recoger a los cuatro o cinco meses. Este es el último mes de la temporada para plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba. Si mantenemos la tierra húmeda en un par de semanas empiezan a germinar y los podemos recoger a los cuatro meses. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const FebruarySowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FebruarySowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En febrero dependiendo de la zona podemos seguir teniendo heladas. Uno de los cultivos que podemos plantar durante todo el año es la acelga. Se siembra directamente en la tierra, necesita suelo húmedo y se puede recolectar a los tres o cuatro meses. Otro de los cultivos que podemos sembrar todo el año son las espinacas. También se realiza siembra directa. Necesitan riego ligero y frecuente, y podemos cosechar a los dos o tres meses. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Necesitan riego ligero y se pueden recoger entre los dos y los cuatro meses. También se pueden sembrar rabanitos directamente en la tierra, necesitan riego a diario, y se pueden cosechar a las cuatro o cinco semanas. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa y con un riego diario las podremos recolectar a los tres o cuatro meses. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Necesita riego frecuente y si lo plantamos durante el mes de enero se recogerá hacia el verano. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento. Necesita riego generoso y se trasplanta cuando tiene tres o cuatro hojas. Se recogen a los cinco o seis meses. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Requiere tierra húmeda y se cosecha a los cinco meses. Si no lo hemos hecho ya, es buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. El riego, tiene que ser escaso y espaciado, y las podemos cosechar a los cinco meses. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa y necesitan que mantengamos la tierra húmeda. Los podremos empezar a recoger a los cuatro o cinco meses. Otros cultivos que podemos empezar a sembrar en febrero son la rúcula y el canónigo. Ambos se siembran directamente en la tierra y los podemos empezar a recoger a partir de mes y medio. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MarchSowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MarchSowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Marzo podemos sembrar Acelga, Ajo, Apio, Berenjena, Berro, Berza, Calabaza, Calabacín, Cebolla, Col Repollo, Endivia, Espárrago, Espinaca, Lechuga, Melón,  Nabo, Patata, Pepino, Pepinillo, Pimiento, Puerro, Rábano, Tomate, Zanahoria, Altramuz, Garbanzo, Guisante, Haba, judía, Lenteja y Soja.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AprilSowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AprilSowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Abril podemos sembrar Acelga, Ajo, Apio, Berenjena, Berro, Berza, Brécol, Cacahuete, Calabaza, Calabacín, Cebolla, Col Repollo, Endivia, Escarola, Fresón, Lechuga, Melón, Nabo, Patata, Pepino, Pepinillo, Pimiento, Puerro, Rábano, Remolacha, Sandía, Tomate, Zanahoria, Garbanzo, Guisante, Haba, judía, Lenteja y Soja.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MaySowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MaySowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Mayo podemos sembrar Acelga, Apio, Berenjena, Berro, Berza, Brécol, Cacahuete, Calabaza, Calabacín, Cebolla, Col Repollo, Coliflor, Escarola, Fresón, Lechuga, Melón,  Nabo, Patata, Pepino, Pepinillo, Pimiento, Rábano, Remolacha, Sandía, Tomate, Zanahoria, Guisante, judía, Lenteja y  Soja.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const JuneSowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'JuneSowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Junio podemos sembrar Acelga, Berenjena, Berro, Brécol, Cacahuete, Calabaza, Cardo, Cebolla, Col Repollo, Col Bruselas, Coliflor, Escarola, Fresa, Fresón,  Lechuga, Melón,  Nabo, Patata, Pepino, Pimiento, Rábano, Remolacha, Tomate, judía y Soja.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const JulySowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'JulySowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Julio podemos sembrar Acelga, Alcachofa, Apio, Berenjena, Berro, Berza, Brécol, Cacahuete, Cardo, Col Bruselas, Coliflor, Escarola, Espinaca, Fresa, Fresón, Lechuga, Nabo, Patata, Pepino, Tomate, Zanahoria y judías.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AugustSowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AugustSowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Agosto podemos sembrar Acelga, Alcachofa, Apio, Berro, Berza, Brécol, Col Repollo, Col Bruselas, Coliflor, Escarola, Espinaca, Fresa, Lechuga, Nabo, Patata, Pepino, Puerro, Rábano, Remolacha, Zanahoria, Haba y judía.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SeptemberSowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SeptemberSowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Septiembre podemos sembrar Acelga, Alcachofa, Apio, Berro, Berza, Brécol, Col Repollo, Coliflor, Escarola, Espinaca,  Fresa, Lechuga, Nabo, Puerro, Rábano, Remolacha, Zanahoria, Guisante y Haba.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const OctoberSowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OctoberSowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Octubre podemos sembrar Acelga, Ajo, Apio, Berro, Berza, Cebolla, Col Repollo, Coliflor, Escarola, Espinaca, Fresón, Lechuga, Nabo, Puerro, Rábano, Remolacha, Zanahoria, Guisante, Haba y Lenteja.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const NovemberSowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NovemberSowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Noviembre podemos sembrar Acelga, Ajo, Berro, Berza, Cebolla, Col Repollo, Coliflor, Escarola, Espinaca, Fresón, Lechuga, Nabo, Puerro, Rábano, Zanahoria, Garbanzo, Guisante, Haba y Lenteja.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const DecemberSowIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DecemberSowIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En Diciembre podemos sembrar Ajo, Berza, Cebolla, Col Repollo, Coliflor, Espinaca, Fresón, Lechuga, Nabo, Patata, Rábano, Zanahoria, Garbanzo, Guisante, Haba y Lenteja.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes preguntarme que puedes sembrar en cada época del año.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Hasta la próxima!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SowIntentHandler,
        JanuarySowIntentHandler,
        FebruarySowIntentHandler,
        MarchSowIntentHandler,
        AprilSowIntentHandler,
        MaySowIntentHandler,
        JuneSowIntentHandler,
        JulySowIntentHandler,
        AugustSowIntentHandler,
        SeptemberSowIntentHandler,
        OctoberSowIntentHandler,
        NovemberSowIntentHandler,
        DecemberSowIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
