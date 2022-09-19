import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {StepForm1} from './pages/Part1'
import {StepForm2} from './pages/Part2'
import { StepForm3 } from './pages/Part3'
import { StepForm4} from './pages/Part4'
export const Router = () => {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/"       element = {<StepForm1 />} />
                <Route path="/step2"  element = {<StepForm2 />} />
                <Route path="/step3"  element = {<StepForm3 />} />
                <Route path="/step4"  element = {<StepForm4 />} />
            </Routes>
        </BrowserRouter>

    );
}

            
    