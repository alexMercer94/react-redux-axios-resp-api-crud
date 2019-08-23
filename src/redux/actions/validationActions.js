import { VALIDATE_FORM, VALIDATE_FORM_ERROR, VALIDATE_FORM_SUCCESS } from '../types/index';

export function validateFormAction() {
    return dispatch => {
        dispatch(initValidate());
    };
}

export const initValidate = () => {
    return {
        type: VALIDATE_FORM
    };
};

export const errorValidation = () => {
    return {
        type: VALIDATE_FORM_ERROR
    };
};

export const successValidation = () => {
    return {
        type: VALIDATE_FORM_SUCCESS
    };
};
