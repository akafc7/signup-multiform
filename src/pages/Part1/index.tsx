import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
// import { useState } from 'react';

export const StepForm1 = () => {
    let navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        });
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step2');
        } else {
            alert('Preencha os dados com seu nome completo');
        }
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        });
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/4</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próxima Etapa</button>
            </C.Container>
        </Theme>
    );
};
