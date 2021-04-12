import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';

function App() {

  return (
          <Router>
              <Header />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about-us">
                  <AboutUs />
                </Route>
                <Route path="/all-plants">
                  <AllPlants />
                </Route>
              </Switch>
          </Router>
  );
}

export default App;

// stappen voor opdracht

// Benodigdheden:
// *  context (LanguageContext)
// *  in die context beschikbaar: geselecteerde taal ("nl" of "es")
// *  in die context beschikbaar: taal-verander functie (toggleLanguage) op de button/vlag zodat taal wordt veranderd.

// [x] 1. LanguageContext maken (in apart bestandje met createContext) en exporteren
// [x] 2. LanguageContext importeren in App.js
// [x] 3. LanguageContext.Provider maken en deze als component omwikkelen om de elementen in App.js
// [x] 4. Via de value={} property een data object in de context plaatsen (`const data = { test: "test" } ) => value={(const data = { test: "test" } )}
// [x] 5. Kies een pagina en abonneer die op onze 'LanguageContext'
// [x]    - Importeer de LanguageContext
// [x]    - useContext functie importeren uit React en aanroepen met de LanguageContext
// [x]    - We destructuren de test property uit het object die we nodig hebben
// [x]    - Gebruik de data die in test staat in het component: <p>{test}</p> of console.log(test)
// [x] 6. Werkt dit? Dan kunnen we verder
// [x] 7. Maak op de plek waar jouw data object staat (App.js) een stukje state aan voor [language, toggleLanguage]
// [x] 8. Maak in App.js een aparte functie die bij aanroep (d.m.v. de toggleLanguage-functie) de taal op Nederlands zet
// [x] 9. Maak in App.js een aparte functie die bij aanroep (d.m.v. de toggleLanguage-functie) de taal op Spaans zet
// [x] 10. Stop de twee functies en language in dat data object


// const [language, toggleLanguage] = useState('nl');

// function setNL() {
// toggleLanguage('nl')
// }
//
// function setNL() {
// toggleLanguage('es')
// }
//
// const data = {
//    activeLanguage: language,
//    setNLFunction: setNL,
//    setEsFunction: setEs,
// }
//
//
// [x] 11. Test of je de actieve taal vanuit een pagina uit de context kunt halen en in de console kunt loggen. Check stap 5 voor de stappen
// [x] 12. Zorg ervoor dat op iedere pagina de juiste content wordt weergegeven op basis van de actieve taal
// [ ] 13. Zorg ervoor dat je met een knop (button) in de header van taal kunt wisselen (gebruik OnClick op button)
// [ ] 14. Zorg er ook voor dat er een andere vlag wordt weergegeven)
// [x] 15. Maak er een apart component van de Provider
// [x] 16.    - Kopieer de hele function App() uit App.js en plak dit in het context bestand
// [x]        - Verander de naam 'App' naar 'LanguageContextProvider' en voeg de children property toe
// [x]        - Vervang huidige componenten in deze functie door children property
// [x]        - Exporteer deze functie
// [x]        - Wikkel het nieuwe 'LanguageContextProvider' component om <App /> in index.js



