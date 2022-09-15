import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
//import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { useEffect } from 'react';
//import { useState } from 'react';

export const StepForm2 = () => {
    let navigate = useNavigate();
    const { state, dispatch } = useForm();

    // useEffect(() => {
    //     dispatch({
    //         type: FormActions.setCurrentStep,
    //         payload: 2
    //     });
    // }, []);
    useEffect(() => {
        if (state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2,
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        } else {
            alert('Preencha os dados com seu nome completo');
        }
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    };

    // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch({
    //         type: FormActions.setName,
    //         payload: e.target.value
    //     })
    // }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, qual é seu nivel de programação? </h1>
                <p>Escolha uma das duas opções abaixo.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a progamar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className="link">
                    Voltar
                </Link>
                <button onClick={handleNextStep}>Próxima Etapa</button>
            </C.Container>
        </Theme>
    );
};
