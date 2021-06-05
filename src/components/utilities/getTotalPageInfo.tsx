export const getTotalPageInfo = (fields: {}): string[] => {
    const conformity = {
        fullName: 'Full name',
        prevName: 'Previous full name',
        citizenship: 'Citizenship',
        gender: 'Gender',
        bankruptcy: 'Bankruptcy',
        birthDay: 'Birthday',
        placeOfBirth: 'Place of Birth',
        passport: 'Passport',
        codeDepartment: 'Code Department',
        dateOfPassport: 'Date of Passport',
        issuingAuthority: 'Issuing Authority',
        phone: 'Mobile',
        additionalPhone: 'Additional phone',
        email: 'E-mail',
        postCode: 'Post code',
        region: 'Region',
        city: 'City',
        street: 'Street',
        houseNumber: 'House number',
        houseBuilding: 'House building',
        apartment: 'Apartment',
        actualPostcode: 'Actual postcode',
        actualRegion: 'Actual region',
        actualCity: 'Actual city',
        actualStreet: 'Actual street',
        actualHouseNumber: 'Actual house number',
        actualHouseBuilding: 'Actual house building',
        actualApartmentNumber: 'Actual apartment number',
        livingTimeRegion: 'Living time in the region',
        dependent: 'Dependent',
        educationStatus: 'Education status',
        familyStatus: 'Family status',
        totalWorkExperience: 'Total work experience',
        organizationName: 'Name of organization',
        taxNumber: 'Tax number',
        webSite: 'Web site',
        workPhone: 'Work phone',
        workAddress: 'Work address',
        chief: 'Name of the chief executive',
        typeOwnership: 'Type of ownership',
        typeActivities: 'Type of activities',
        typePositionHeld: 'Type of position held',
        workExperiencePositionHeld: 'Work experience of the position held',
        income: 'Income at the main place of work',
        addIncome: 'Additional income',
        pension: 'Pension',
        otherIncome: 'Other income',
        creditSum: 'Credit sum',
        creditTerm: 'Credit term',
        insuranceСonsent: 'Insurance consent',
    };

    // Функция получает переданные из store объект типа {id: 'someId', ...} 
    // и ищет ключам объекта типа fullName его строковое значение fullName => 'Full name',
    // формирует массив строк типа ['Full name: <данные из store>', ...] | [] и возвращает на страницу
    // для рендера.
    
    let sortedConformityUnit = '';
    const sortedConformityUnitArray = [];

    try {
        for (const [fieldKey, fieldValue] of Object.entries(fields)) {
            for (const [conformityKey, conformityValue] of Object.entries(conformity)) {
                if (conformityKey === fieldKey) {
                    if (fieldValue) {
                        sortedConformityUnit = `${conformityValue}: ${fieldValue}`;
                        sortedConformityUnitArray.push(sortedConformityUnit);
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
    
    return sortedConformityUnitArray;
}
