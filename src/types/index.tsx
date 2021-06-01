// General Information Input Types
export type TGeneralInformationInputs = {
    id: string,
    fullName: string,
    prevName: string,
    citizenship: string,
    gender: string,
    bankruptcy: string,
    birthDay: string,
    placeOfBirth: string,
    passport: string,
    codeDepartment: string,
    dateOfPassport: string,
    issuingAuthority: string,
};

// Contact Inputs Types
export type TContactInputs = {
    id: string,
    phone: string,
    additionalPhone: string,
    email: string,
};

// Registration Address Types
export type TRegistrationAddressInputs = {
    id: string,
    postCode: string,
    region: string,
    city: string,
    street: string,
    houseNumber: string,
    houseBuilding: string,
    apartment: string,
};

// Actual Location Address Types
export type TActualLocationAddressInputs = {
    id: string,
    actualPostcode: string,
    actualRegion: string,
    actualCity: string,
    actualStreet: string,
    actualHouseNumber: string,
    actualHouseBuilding: string,
    actualApartmentNumber: string,
    livingTimeRegion: string,
};

// Education and Family Status Types
export type TEducationStatusInputs = {
    id: string,
    dependent: string,
    educationStatus: string,
    familyStatus: string,
};

// Employment Types
export type TEmploymentInputs = {
    id: string,
    totalWorkExperience: string,
};

// Main Place Of Work Types
export type TMainPlaceOfWorkInputs = {
    id: string,
    organizationName: string,
    taxNumber: string,
    webSite: string,
    workPhone: string,
    workAddress: string,
    chief: string,
    typeOwnership: string,
    typeActivities: string,
    typePositionHeld: string,
    workExperiencePositionHeld: string,
};

// Monthly Income Types
export type TMonthlyIncomeInputs = {
    id: string,
    income: string,
    addIncome: string,
    pension: string,
    otherIncome: string,
};

// Credit Parameters Types
export type TCreditParametersInputs = {
    id: string,
    creditSum: string,
    creditTerm: string,
    insuranceСonsent: string,
};

// Root State Types for useSelector
export type TRootState = {
    generalInformation: TGeneralInformationInputs,
    contacts: TContactInputs,
    registrationAddress: TRegistrationAddressInputs,
    actualLocationAddress: TActualLocationAddressInputs,
    educationStatus: TEducationStatusInputs,
    employment: TEmploymentInputs,
    mainPlaceOfWork: TMainPlaceOfWorkInputs,
    moonthlyIncome: TMonthlyIncomeInputs,
    creditParameters: TCreditParametersInputs,
};
