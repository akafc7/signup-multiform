import {  Link } from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm,  } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
// import { useState } from 'react';

export const StepForm4 = () => {
    
    const { state, dispatch } = useForm();
    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4,
        });
    }, []);


   

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/4</p>
                <h1>Ok, {state.name}, cadastro finalizado com sucesso!</h1>
                <h2>Aqui estão seus dados:</h2>

                <br />
                <h3>E-mail: {state.email}</h3>
                <h3>GitHub:  {state.github}</h3>
                <h3>Nivel de Programação {state.level ? "Programador" : "Iniciante" }</h3>

                <hr />
<br />


                <Link to="/step3" className="link">
                    Voltar
                </Link>
            </C.Container>
        </Theme>
    );
};


