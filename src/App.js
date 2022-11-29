import './App.css';

import {Header} from './components/Header';

import {Banner} from './components/Banner';
import { PopularProject } from './components/PopularProject';
import { GetStarted } from './components/GetStarted';
import { CompletedProject } from './components/CompletedProject';
import { Benifits } from './components/Benifits';
import { Footer } from './components/Footer';


function App() {

return (
<>
<Header/>
<main>
<Banner />
<PopularProject />
<GetStarted />
<CompletedProject />
<Benifits />
<Footer/>
</main>

</>
);
}

export default App;
