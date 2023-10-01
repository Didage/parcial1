import {IntlProvider} from 'react-intl';
import App from '../App';
import localeEsMessages from "./../locales/es";
import localeEnMessages from "./../locales/en";
import { useState } from 'react';

function Intl() {

    const messages = {
        'es': localeEsMessages,
        'en': localeEnMessages,
      };

    const [userLocale,setUserLocale] = useState(navigator.language.substring(0, 2) || 'es');

    return(
    <IntlProvider locale={userLocale} messages={messages[userLocale]}>
        <App userLocale={userLocale} setUserLocale={setUserLocale}/>
    </IntlProvider>
    );
}

export default Intl;