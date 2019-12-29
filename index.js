// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        if (handlerInput.requestEnvelope.context.System.device.supportedInterfaces['Alexa.Presentation.APL']) { 
            const data = require('./data/main.json');
            const template = require('./templates/main.json');
            
            const speakOutput = 'Hola, pregúntame que puedo sembrar y te diré los cultivos que se adaptan a cada mes del año.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .addDirective({
                   type: "Alexa.Presentation.APL.RenderDocument",
                   version: '1.0',
                   document: template,
                   datasources: data
                })
                .getResponse();
        } else {
            const speakOutput = 'Hola, pregúntame que puedo sembrar y te diré los cultivos que se adaptan a cada mes del año.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
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
            const speakOutput = 'En enero ya estamos metidos en pleno invierno, y dependiendo de la zona podemos tener heladas frecuentes, con lo que puede ser conveniente proteger las siembras. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa. Este es el último mes de la temporada para plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba y en un par de semanas empiezan a germinar. Otros cultivos que podemos empezar a sembrar en enero son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 1) {
            const speakOutput = 'En febrero, dependiendo de la zona, podemos seguir teniendo heladas. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa. Otros cultivos que podemos empezar a sembrar en febrero son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Si la zona en la que nos encontramos tiene un clima suave, también podemos empezar a sembrar los siguientes cultivos. Para las judías se realiza una siembra de asiento. También podemos empezar a sembrar coles y escarolas en semillero. Podemos empezar a sembrar cucurbitáceas mediante siembra directa, como el calabacín, el pepino y el melón. Si queremos sembrar sandía en febrero, mejor hacerlo en semillero, al igual que los tomates. Mientras que el cebollino y la patata podemos empezar a sembrarla directamente en la tierra. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 2) {
            const speakOutput = 'En marzo, da comienzo la primavera, y eso nos va a permitir aumentar el número de cultivos en nuestro huerto. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Los guisantes podemos sembrarlos de forma directa. Otros cultivos que podemos empezar a sembrar en marzo son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos empezar a sembrar coles y escarolas en semillero. Podemos empezar a sembrar cucurbitáceas mediante siembra directa, como son el calabacín, la calabaza, el pepino y el melón. Si queremos sembrar sandía en marzo, mejor hacerlo en semillero, al igual que los tomates. Mientras que el cebollino, la remolacha, el maiz y la patata podemos empezar a sembrarla directamente en la tierra. El puerro en semillero, al igual que la alcachofa que la trasplantaremos una vez tenga unos diez centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 3) {
            const speakOutput = 'En abril se nota la llegada de la primavera. Suben las temperaturas y aumentan las lluvias, por lo que es un momento ideal para trabajar en nuestro huerto. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Es el último mes de la temporada para sembrar cebollas. La siembra la haremos en semillero, y las trasplantaremos cuando tengan el grosor de un lápiz. Otros cultivos que podemos sembrar en abril son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos sembrar coles en semillero y escarolas directamente en la tierra. También es época de siembra de cucurbitáceas, como son el calabacín, la calabaza, el pepino, el melón y la sandía, y se realiza mediante siembra directa. También podemos sembrar en semillero tomates, al igual que la alcachofa que trasplantaremos una vez que la planta tenga unos diez centímetros. Mientras que el cebollino, la remolacha, el maiz, la patata, el puerro o las fresas las podemos empezar a sembrar directamente en la tierra. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 4) {
            const speakOutput = 'En mayo ya estamos metidos de lleno en la primavera, y nuestro huerto empieza a estar a pleno rendimiento. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Si no lo hemos hecho todavía, es el último mes para sembrar pimiento. Se siembra en semillero y se trasplanta cuando tiene tres o cuatro hojas. Otros cultivos que podemos sembrar en mayo son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos sembrar coles en semillero y escarolas directamente en la tierra. También es época de siembra de cucurbitáceas, como son el calabacín, la calabaza, el pepino, el melón y la sandía, y se realiza mediante siembra directa. También podemos sembrar en semillero tomates, al igual que la alcachofa que trasplantaremos una vez que la planta tenga unos diez centímetros. Mientras que el cebollino, la remolacha, el maiz, la patata, el puerro o las fresas las podemos empezar a sembrar directamente en la tierra. En mayo tambien comienza la temporada de siembra del brócoli y la coliflor. Se siembran en semillero y se trasplantan cuando alcancen entre doce y quince centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 5) {
            const speakOutput = 'A finales de junio da comienzo el verano y empezamos a recoger los frutos del trabajo realizado en nuestro huerto durante meses anteriores. Pero hay que seguir preparando cultivos para meses futuros. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. Si no lo hemos hecho todavía, es el último mes de la temporada para sembrar apio. Se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otros cultivos que podemos sembrar en junio son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos sembrar coles en semillero y escarolas directamente en la tierra. Es el último mes de siembra de cucurbitáceas, como son el calabacín, el pepino, el melón y la sandía, y se realiza mediante siembra directa. También podemos sembrar en semillero tomates, al igual que la alcachofa que trasplantaremos una vez que la planta tenga unos diez centímetros. Mientras que la remolacha, el maiz o las fresas las podemos sembrar directamente en la tierra. En junio seguimos con la siembra del brócoli y la coliflor. Se siembran en semillero y se trasplantan cuando alcancen entre doce y quince centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 6) {
            const speakOutput = 'En julio tenemos nuestro huerto a pleno rendimiento, y ya estaremos cosechando muchos de los cultivos que hemos estado cuidando los meses anteriores. Pero podemos seguir sembrando para disponer de cosecha los próximos meses. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. En Julio empieza la temporada de siembra de la cebolla. Se siembran en semillero y las podemos trasplantar cuando tengan el grosor de un lápiz. Otros cultivos que podemos sembrar en julio son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos sembrar coles en semillero y escarolas directamente en la tierra. Mientras que la remolacha, el maiz o las fresas las podemos sembrar directamente en la tierra. En junio seguimos con la siembra del brócoli y la coliflor. Se siembran en semillero y se trasplantan cuando alcancen entre doce y quince centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 7) {
            const speakOutput = 'En agosto es importante revisar los riegos, para que nuestras plantas no sufran por las altas temperaturas. Estos son los cultivos que podemos sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. La cebolla se siembran en semillero y las podemos trasplantar cuando tengan el grosor de un lápiz. Otros cultivos que podemos sembrar en agosto son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. Es el último més de la temporada para sembrar coles en semillero. Mientras que la remolacha y las fresas las podemos sembrar directamente en la tierra. Agosto es también el último mes para sembrar brócoli y coliflor. Se siembran en semillero y se trasplantan cuando alcancen entre doce y quince centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 8) {
            const speakOutput = 'En septiembre es importante preparar los cultivos que recogeremos durante el otoño e inviermo. Estos son los cultivos que podemos sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. En septiembre podemos empezar a sembra de nuevo apio. Se siembran en semillero y se trasplantan cuando tengan unos diez centímetros. También podemos empezar a sembrar haba, guisante y puerro directemente en la tierra. La cebolla se siembran en semillero y las podemos trasplantar cuando tengan el grosor de un lápiz. Otros cultivos que podemos sembrar son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 9) {
            const speakOutput = 'En octubre, ya metidos en pleno otoño, necesitamos plantar cultivos que soporten el frío. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, las habas, y el apio podemos sembrarlos de forma directa. Para las judías se realiza una siembra de asiento. También podemos plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba y en un par de semanas empiezan a germinar. Es el último mes para sembrar la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 10) {
            const speakOutput = 'En noviembre podemos empezar a sufrir heladas, con lo que en algunos casos sea necesario proteger nuestras plantas. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa. Para las judías tenemos que realizar una siembra de asiento. Y si sembramos puerro debemos hacerlo en semillero protegido. También podemos plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba y en un par de semanas empiezan a germinar. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
            return handlerInput.responseBuilder
                .speak(speakOutput)
                //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
                .getResponse();
        }
        if(n === 11) {
            const speakOutput = 'En diciembre da comienzo el invierno, pero eso no significa que nuestro huerto se quede sin actividad. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa. También podemos plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba y en un par de semanas empiezan a germinar. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En enero ya estamos metidos en pleno invierno, y dependiendo de la zona podemos tener heladas frecuentes, con lo que puede ser conveniente proteger las siembras. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa. Este es el último mes de la temporada para plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba y en un par de semanas empiezan a germinar. Otros cultivos que podemos empezar a sembrar en enero son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En febrero, dependiendo de la zona, podemos seguir teniendo heladas. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa. Otros cultivos que podemos empezar a sembrar en febrero son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Si la zona en la que nos encontramos tiene un clima suave, también podemos empezar a sembrar los siguientes cultivos. Para las judías se realiza una siembra de asiento. También podemos empezar a sembrar coles y escarolas en semillero. Podemos empezar a sembrar cucurbitáceas mediante siembra directa, como el calabacín, el pepino y el melón. Si queremos sembrar sandía en febrero, mejor hacerlo en semillero, al igual que los tomates. Mientras que el cebollino y la patata podemos empezar a sembrarla directamente en la tierra. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En marzo, da comienzo la primavera, y eso nos va a permitir aumentar el número de cultivos en nuestro huerto. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Los guisantes podemos sembrarlos de forma directa. Otros cultivos que podemos empezar a sembrar en marzo son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos empezar a sembrar coles y escarolas en semillero. Podemos empezar a sembrar cucurbitáceas mediante siembra directa, como son el calabacín, la calabaza, el pepino y el melón. Si queremos sembrar sandía en marzo, mejor hacerlo en semillero, al igual que los tomates. Mientras que el cebollino, la remolacha, el maiz y la patata podemos empezar a sembrarla directamente en la tierra. El puerro en semillero, al igual que la alcachofa que la trasplantaremos una vez tenga unos diez centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En abril se nota la llegada de la primavera. Suben las temperaturas y aumentan las lluvias, por lo que es un momento ideal para trabajar en nuestro huerto. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Es el último mes de la temporada para sembrar cebollas. La siembra la haremos en semillero, y las trasplantaremos cuando tengan el grosor de un lápiz. Otros cultivos que podemos sembrar en abril son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos sembrar coles en semillero y escarolas directamente en la tierra. También es época de siembra de cucurbitáceas, como son el calabacín, la calabaza, el pepino, el melón y la sandía, y se realiza mediante siembra directa. También podemos sembrar en semillero tomates, al igual que la alcachofa que trasplantaremos una vez que la planta tenga unos diez centímetros. Mientras que el cebollino, la remolacha, el maiz, la patata, el puerro o las fresas las podemos empezar a sembrar directamente en la tierra. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En mayo ya estamos metidos de lleno en la primavera, y nuestro huerto empieza a estar a pleno rendimiento. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Si no lo hemos hecho todavía, es el último mes para sembrar pimiento. Se siembra en semillero y se trasplanta cuando tiene tres o cuatro hojas. Otros cultivos que podemos sembrar en mayo son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos sembrar coles en semillero y escarolas directamente en la tierra. También es época de siembra de cucurbitáceas, como son el calabacín, la calabaza, el pepino, el melón y la sandía, y se realiza mediante siembra directa. También podemos sembrar en semillero tomates, al igual que la alcachofa que trasplantaremos una vez que la planta tenga unos diez centímetros. Mientras que el cebollino, la remolacha, el maiz, la patata, el puerro o las fresas las podemos empezar a sembrar directamente en la tierra. En mayo tambien comienza la temporada de siembra del brócoli y la coliflor. Se siembran en semillero y se trasplantan cuando alcancen entre doce y quince centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'A finales de junio da comienzo el verano y empezamos a recoger los frutos del trabajo realizado en nuestro huerto durante meses anteriores. Pero hay que seguir preparando cultivos para meses futuros. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. Si no lo hemos hecho todavía, es el último mes de la temporada para sembrar apio. Se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otros cultivos que podemos sembrar en junio son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos sembrar coles en semillero y escarolas directamente en la tierra. Es el último mes de siembra de cucurbitáceas, como son el calabacín, el pepino, el melón y la sandía, y se realiza mediante siembra directa. También podemos sembrar en semillero tomates, al igual que la alcachofa que trasplantaremos una vez que la planta tenga unos diez centímetros. Mientras que la remolacha, el maiz o las fresas las podemos sembrar directamente en la tierra. En junio seguimos con la siembra del brócoli y la coliflor. Se siembran en semillero y se trasplantan cuando alcancen entre doce y quince centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En julio tenemos nuestro huerto a pleno rendimiento, y ya estaremos cosechando muchos de los cultivos que hemos estado cuidando los meses anteriores. Pero podemos seguir sembrando para disponer de cosecha los próximos meses. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. En Julio empieza la temporada de siembra de la cebolla. Se siembran en semillero y las podemos trasplantar cuando tengan el grosor de un lápiz. Otros cultivos que podemos sembrar en julio son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. También podemos sembrar coles en semillero y escarolas directamente en la tierra. Mientras que la remolacha, el maiz o las fresas las podemos sembrar directamente en la tierra. En junio seguimos con la siembra del brócoli y la coliflor. Se siembran en semillero y se trasplantan cuando alcancen entre doce y quince centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En agosto es importante revisar los riegos, para que nuestras plantas no sufran por las altas temperaturas. Estos son los cultivos que podemos sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. La cebolla se siembran en semillero y las podemos trasplantar cuando tengan el grosor de un lápiz. Otros cultivos que podemos sembrar en agosto son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. Es el último més de la temporada para sembrar coles en semillero. Mientras que la remolacha y las fresas las podemos sembrar directamente en la tierra. Agosto es también el último mes para sembrar brócoli y coliflor. Se siembran en semillero y se trasplantan cuando alcancen entre doce y quince centímetros. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En septiembre es importante preparar los cultivos que recogeremos durante el otoño e inviermo. Estos son los cultivos que podemos sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. En septiembre podemos empezar a sembra de nuevo apio. Se siembran en semillero y se trasplantan cuando tengan unos diez centímetros. También podemos empezar a sembrar haba, guisante y puerro directemente en la tierra. La cebolla se siembran en semillero y las podemos trasplantar cuando tengan el grosor de un lápiz. Otros cultivos que podemos sembrar son la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Para las judías se realiza una siembra de asiento. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En octubre, ya metidos en pleno otoño, necesitamos plantar cultivos que soporten el frío. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, las habas, y el apio podemos sembrarlos de forma directa. Para las judías se realiza una siembra de asiento. También podemos plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba y en un par de semanas empiezan a germinar. Es el último mes para sembrar la rúcula y el canónigo. Ambos se siembran directamente en la tierra. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En noviembre podemos empezar a sufrir heladas, con lo que en algunos casos sea necesario proteger nuestras plantas. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa. Para las judías tenemos que realizar una siembra de asiento. Y si sembramos puerro debemos hacerlo en semillero protegido. También podemos plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba y en un par de semanas empiezan a germinar. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
        const speakOutput = 'En diciembre da comienzo el invierno, pero eso no significa que nuestro huerto se quede sin actividad. Estos son los cultivos que puedes sembrar. La acelga se siembra durante todo el año. Se realiza de forma directa en la tierra. También podemos sembrar durante todo el año espinacas por siembra directa. Las lechugas se siembran en semillero protegido y se trasplantan una vez tengan cuatro o cinco hojas. Los rabanitos se siembran directamente en la tierra. Otro de los cultivos que se puede sembrar durante todo el año es la zanahoria. Se realiza una siembra directa. El apio se siembra en semillero y se trasplanta cuando tenga unos diez centímetros. Otro de los cultivos importantes que podemos empezar a sembrar en semillero es el pimiento y se trasplanta cuando tiene tres o cuatro hojas. También podemos sembrar berenjena en semilleros. Se trasplanta cuando la planta tenga unos doce centímetros. Si todavía no lo hemos hecho, es un buen momento para sembrar cebollas en semillero. Las podemos trasplantar cuando tengan el grosor de un lápiz. Tanto los guisantes, como las habas, podemos sembrarlos de forma directa. También podemos plantar ajos. Se siembra directamente un diente de ajo con la punta hacia arriba y en un par de semanas empiezan a germinar. Ten en cuenta que este calendario es orientativo y puede tener variaciones dependiendo del clima de la zona en que te encuentres.';
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
