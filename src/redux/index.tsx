import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState } from './initialStore';
import {
    SET_GEN_INFO,
    SET_CONTACTS,
    SET_REG_ADDRESS,
    SET_ACT_LOC_ADDRESS,
    SET_EDUCATION_STATUS,
    SET_EMPLOYMENT,
    SET_MAIN_PLACE_WORK,
    SET_MONTHLY_INCOME,
    SET_CREDIT_PARAMETERS,
} from './constans';

import {
    TGeneralInformationInputs,
    TContactInputs,
    TRegistrationAddressInputs,
    TActualLocationAddressInputs,
    TEducationStatusInputs,
    TEmploymentInputs,
    TMainPlaceOfWorkInputs,
    TMonthlyIncomeInputs,
    TCreditParametersInputs
} from '../types';

// Actions & Action Types Generall Information
interface ISetGeneralInformationAction {
    type: typeof SET_GEN_INFO,
    payload: TGeneralInformationInputs,
};

export const setGeneralInformationActionCreator = (
    dataInputs: TGeneralInformationInputs
): ISetGeneralInformationAction => {
    return {
        type: SET_GEN_INFO,
        payload: dataInputs,
    };
}

// Actions & Action Types Contacts
interface ISetContactsAction {
    type: typeof SET_CONTACTS,
    payload: TContactInputs,
};

export const setContactsActionCreator = (
    dataInputs: TContactInputs
): ISetContactsAction => {
    return {
        type: SET_CONTACTS,
        payload: dataInputs,
    };
}

// Actions & Action Types Registration Address
interface ISetRegistrationAddressAction {
    type: typeof SET_REG_ADDRESS,
    payload: TRegistrationAddressInputs,
};

export const setRegistrationAddressActionCreator = (
    dataInputs: TRegistrationAddressInputs
): ISetRegistrationAddressAction => {
    return {
        type: SET_REG_ADDRESS,
        payload: dataInputs,
    };
}

// Actions & Action Types Actual Location Address
interface ISetActualLocationAddressAction {
    type: typeof SET_ACT_LOC_ADDRESS,
    payload: TActualLocationAddressInputs,
};

export const setActualLocationAddressActionCreator = (
    dataInputs: TActualLocationAddressInputs
): ISetActualLocationAddressAction => {
    return {
        type: SET_ACT_LOC_ADDRESS,
        payload: dataInputs,
    };
}

// Actions & Action Types Education Status
interface ISetEducationStatusAction {
    type: typeof SET_EDUCATION_STATUS,
    payload: TEducationStatusInputs,
};

export const setEducationStatusActionCreator = (
    dataInputs: TEducationStatusInputs
): ISetEducationStatusAction => {
    return {
        type: SET_EDUCATION_STATUS,
        payload: dataInputs,
    };
}

// Actions & Action Types Employment
interface ISetEmploymentAction {
    type: typeof SET_EMPLOYMENT,
    payload: TEmploymentInputs,
};

export const setEmploymentActionCreator = (
    dataInputs: TEmploymentInputs
): ISetEmploymentAction => {
    return {
        type: SET_EMPLOYMENT,
        payload: dataInputs,
    };
}

// Actions & Action Types Main Place of Work
interface ISetMainPlaceOfWorkAction {
    type: typeof SET_MAIN_PLACE_WORK,
    payload: TMainPlaceOfWorkInputs,
};

export const setMainPlaceOfWorkActionCreator = (
    dataInputs: TMainPlaceOfWorkInputs
): ISetMainPlaceOfWorkAction => {
    return {
        type: SET_MAIN_PLACE_WORK,
        payload: dataInputs,
    };
}

// Actions & Action Types Monthly Income
interface ISetMonthlyIncomeAction {
    type: typeof SET_MONTHLY_INCOME,
    payload: TMonthlyIncomeInputs,
};

export const setMonthlyIncomeActionCreator = (
    dataInputs: TMonthlyIncomeInputs
): ISetMonthlyIncomeAction => {
    return {
        type: SET_MONTHLY_INCOME,
        payload: dataInputs,
    };
}

// Actions & Action Types Credit Parameters
interface ISetCreditParametersAction {
    type: typeof SET_CREDIT_PARAMETERS,
    payload: TCreditParametersInputs,
};

export const setCreditParametersActionCreator = (
    dataInputs: TCreditParametersInputs
): ISetCreditParametersAction => {
    return {
        type: SET_CREDIT_PARAMETERS,
        payload: dataInputs,
    };
}

// Reducers
type TInputsAction = (
    | ISetGeneralInformationAction
    | ISetContactsAction
    | ISetRegistrationAddressAction
    | ISetActualLocationAddressAction
    | ISetEducationStatusAction
    | ISetEmploymentAction
    | ISetMainPlaceOfWorkAction
    | ISetMonthlyIncomeAction
    | ISetCreditParametersAction
);

const inputsReducer = (
    state = initialState,
    action: TInputsAction
) => {
    switch (action.type) {
        case SET_GEN_INFO: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        case SET_CONTACTS: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        case SET_REG_ADDRESS: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        case SET_ACT_LOC_ADDRESS: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        case SET_EDUCATION_STATUS: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        case SET_EMPLOYMENT: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        case SET_MAIN_PLACE_WORK: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        case SET_MONTHLY_INCOME: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        case SET_CREDIT_PARAMETERS: {
            const { payload } = action;
            return state.map(
                (state) => state.id === payload.id ? { ...payload } : state
            );
        }
        default: {
            return state;
        }
    }
}

// Store
export default createStore(
    inputsReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);
