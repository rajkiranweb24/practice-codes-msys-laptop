import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import UseState from './UseState';
import PostsComponent from './UseEffect';
import Header from './Header';
import Example from './Example';
import SingleComponent from './SingleComponent';
import DarkMode from './DarkMode';
import StateClassComp from './StateClassComp';
import Parent from './Parent';
import ConditionalRender from './ConditionalRender';
import HandleEvents from './HandleEvents';
import HandleForm from './HandleForm';
import Styling from './Styling';
import CrudApi from './CrudApi';
import ContextExample from './ContextExample';
import PromiseExample from './PromiseExample';
import { BrowserRouter } from 'react-router-dom';
import RouterHome from './RouterHome';
import RouterAbout from './RouterAbout';
import RouterHeader from './RouterHeader';

import TodosList from './TodosList';
import DataFetching from './DataFetching';
import CoroselApp from './CoroselApp';
import Counter from './Counter';
import SpreadRest from './SpreadRest';
import FormComponent from './FormComponent';



function App() {
  return (
    <div className="App">

     
       
          

      <FormComponent       />
     


      {/* <SpreadRest/> */}
      {/* <Counter/> */}
      {/* <CoroselApp/> */}
      {/* <DataFetching/> */}
      {/* <TodosList/> */}
      
      
      {/* <BrowserRouter>
      <RouterHeader/>
      <Routes>
        <Route path="/" element={<RouterHome/>} />
        <Route path="/about" element={<RouterAbout/>} />
        <Route path="*" element={ <div>404 not found</div> } />
   
      </Routes>
     </ BrowserRouter> */}
      {/* <PromiseExample/> */}
      {/* <ContextExample/> */}
      {/* <CrudApi/> */}
      {/* <Styling/> */}
    {/* <HandleForm/> */}
      {/* <HandleEvents/> */}
      {/* <ConditionalRender/> */}
      {/* <Parent/> */}
      {/* <StateClassComp/> */}
     {/* <DarkMode/> */}
      {/* <Header/>
      <Example/>
      <Routes>
        <Route exact path='/' element={<PostsComponent/>}/>
        <Route exact path='/post/:id' element={<SingleComponent/>}/>
      </Routes> */}
    
    </div>
  );
}

export default App;
