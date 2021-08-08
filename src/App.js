import { lazy, Suspense ,useEffect} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import { IntlProvider } from 'react-intl';
import { translate } from './translation/translate';
import { useSelector } from 'react-redux';
import Loader from './Components/Shared/Loader/Loader';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Default = lazy(() => import("./Layouts/Default"));




function App() {
  const language = useSelector((state) => state.language.language);
  useEffect(() => {
    AOS.init({
      duration: 800,
      disable: 'mobile',
      once: true,
    });
  }, []);
  return (
    <Suspense fallback={Loader()}>
      <div className="App">
        <IntlProvider
          locale={language}
          formats={{ number: 'en' }}
          messages={translate[language]}
        >

          <Switch>
            <Route exact path="/" component={Default} />
            <Route exact path="/login" component={Default} />
            <Route exact path="/signup" component={Default} />
            <Route exact path="/analysis" component={Default} />
            <Route exact path="/pricing" component={Default} />
            <Redirect to="/" />
          </Switch>

          <Footer />

          </IntlProvider>

      </div>
    </Suspense>
      );
}

      export default App;
