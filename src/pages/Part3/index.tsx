import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
// import { useState } from 'react';

export const StepForm3 = () => {
    let navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.email && state.github !== '') {
            console.log(state);
        } else {
            alert('Certifique-se de ter preenchido os campos corretamente.');
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        });
    };
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        });
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Ok, {state.name}, agora precisamos do seu email.</h1>
                <p>Preencha seu email abaixo.</p>

                <hr />

                <label>
                    Seu Email.
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Seu GitHub.
                    <input
                        type="email"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="link">
                    Voltar
                </Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    );
};
