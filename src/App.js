import { Routes, Route, BrowserRouter } from 'react-router-dom';

//Context
import { UserContextProvider } from './UserContext';

//Pages
import FormLayout from './components/formLayout/FormLayout';
import Form1 from './pages/forms/form1/Form1';
import Form2 from './pages/forms/form2/Form2';
import Success from './pages/success/Success';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="form/" element={<FormLayout />} >
              <Route index element={<Form1 />} />
              <Route path="next" element={<Form2 />} />
            </Route>
            <Route path="success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>

    </div>
  );
}

export default App;
