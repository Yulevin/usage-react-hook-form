export const getRadioButtonContent = (
    searchName: string
) => {
    const content = [
        // Actial location addresses component content 'livingTimeRegion'
        { index: 0, name: 'livingTimeRegion', id: 'lessThanSixMonth', value: 'Less than 6 months', label: 'Less than 6 months' },
        { index: 1, name: 'livingTimeRegion', id: 'fromSixToOneYear', value: 'From 6 months to 1 year', label: 'From 6 months to 1 year' },
        { index: 2, name: 'livingTimeRegion', id: 'fromOneToThreeYears', value: 'From 1 to 3 years', label: 'From 1 to 3 years' },
        { index: 3, name: 'livingTimeRegion', id: 'fromThreeToTenYears', value: 'From 3 to 10 years', label: 'From 3 to 10 years' },
        { index: 4, name: 'livingTimeRegion', id: 'overTenYears', value: 'Over 10 years', label: 'Over 10 years' },
        // Education status component content 'educationStatus'
        { index: 0, name: 'educationStatus', id: 'degree', value: 'Degree/MBA', label: 'Degree/MBA' },
        { index: 1, name: 'educationStatus', id: 'higher', value: 'Higher Education', label: 'Higher Education' },
        { index: 2, name: 'educationStatus', id: 'secondHigher', value: 'Second Education', label: 'Second Education' },
        { index: 3, name: 'educationStatus', id: 'incompleteHigher', value: 'Incomplete Higher', label: 'Incomplete Higher' },
        { index: 4, name: 'educationStatus', id: 'specializedSecondary', value: 'Specialized Secondary', label: 'Specialized Secondary' },
        { index: 5, name: 'educationStatus', id: 'secondary', value: 'Secondary', label: 'Secondary' },
        { index: 6, name: 'educationStatus', id: 'lowerSecondary', value: 'Lower Secondary', label: 'Lower Secondary' },
        // Education status component content 'familyStatus'
        { index: 0, name: 'familyStatus', id: 'married', value: 'Married', label: 'Married' },
        { index: 1, name: 'familyStatus', id: 'single', value: 'Single', label: 'Single' },
        { index: 2, name: 'familyStatus', id: 'divorced', value: 'Divorced', label: 'Divorced' },
        { index: 3, name: 'familyStatus', id: 'civilMarriage', value: 'Civil Marriage', label: 'Civil Marriage' },
        { index: 4, name: 'familyStatus', id: 'other', value: 'Other', label: 'Other' },
        // Employment component 'totalWorkExperience'
        { index: 0, name: 'totalWorkExperience', id: 'lessThanSixMonth', value: 'Less than 6 months', label: 'Less than 6 months' },
        { index: 1, name: 'totalWorkExperience', id: 'fromSixMonthToOneYear', value: 'From 6 months to 1 year', label: 'From 6 months to 1 year' },
        { index: 2, name: 'totalWorkExperience', id: 'fromOneToThreeYears', value: 'From 1 to 3 years', label: 'From 1 to 3 years' },
        { index: 3, name: 'totalWorkExperience', id: 'fromThreeToTenYears', value: 'From 3 to 10 years', label: 'From 3 to 10 years' },
        { index: 4, name: 'totalWorkExperience', id: 'overTenYears', value: 'Over 10 years', label: 'Over 10 years' },
        // Main place of work component 'typeOwnership'
        { index: 0, name: 'typeOwnership', id: 'privateEnterprise', value: 'Private Enterprise', label: 'Private Enterprise' },
        { index: 1, name: 'typeOwnership', id: 'state', value: 'State', label: 'State' },
        { index: 2, name: 'typeOwnership', id: 'individual', value: 'Individual', label: 'Individual' },
        // Main place of work component 'typeActivities'
        { index: 0, name: 'typeActivities', id: 'production', value: 'Production', label: 'Production' },
        { index: 1, name: 'typeActivities', id: 'trade', value: 'Trade', label: 'Trade' },
        { index: 2, name: 'typeActivities', id: 'services', value: 'Services', label: 'Services' },
        { index: 3, name: 'typeActivities', id: 'it', value: 'IT', label: 'IT' },
        { index: 4, name: 'typeActivities', id: 'culture', value: 'Culture', label: 'Culture' },
        { index: 5, name: 'typeActivities', id: 'militaryForces', value: 'Military Forces', label: 'Military Forces' },
        { index: 6, name: 'typeActivities', id: 'transport', value: 'Transport', label: 'Transport' },
        { index: 7, name: 'typeActivities', id: 'building', value: 'Building', label: 'Building' },
        { index: 8, name: 'typeActivities', id: 'agriculture', value: 'Agriculture', label: 'Agriculture' },
        { index: 9, name: 'typeActivities', id: 'education', value: 'Education', label: 'Education' },
        { index: 10, name: 'typeActivities', id: 'medecine', value: 'Medecine', label: 'Medecine' },
        { index: 11, name: 'typeActivities', id: 'science', value: 'Science', label: 'Science' },
        { index: 12, name: 'typeActivities', id: 'lawEnforcement', value: 'Law Enforcement', label: 'Law Enforcement' },
        { index: 13, name: 'typeActivities', id: 'privateSecurity', value: 'Private Security', label: 'Private Security' },
        { index: 14, name: 'typeActivities', id: 'jurisprudence', value: 'Jurisprudence', label: 'Jurisprudence' },
        { index: 15, name: 'typeActivities', id: 'finance', value: 'Finance', label: 'Finance' },
        { index: 16, name: 'typeActivities', id: 'other', value: 'Other', label: 'Other' },
        // Main place of work component 'typePositionHeld'
        { index: 0, name: 'typePositionHeld', id: 'organizationLeadership', value: 'Organization Leadership', label: 'Organization Leadership' },
        { index: 1, name: 'typePositionHeld', id: 'departmentManagement', value: 'Department Management', label: 'Department Management' },
        { index: 2, name: 'typePositionHeld', id: 'selfEmployed', value: 'Self Employed', label: 'Self Employed' },
        { index: 3, name: 'typePositionHeld', id: 'specialist', value: 'Specialist', label: 'Specialist' },
        // Main place of work component 'workExperiencePositionHeld'
        { index: 0, name: 'workExperiencePositionHeld', id: 'lessThanFourMonth', value: 'Less than 4 months', label: 'Less than 4 months' },
        { index: 1, name: 'workExperiencePositionHeld', id: 'fromFourToSixMonth', value: 'From 4 to 6 months', label: 'From 4 to 6 months' },
        { index: 2, name: 'workExperiencePositionHeld', id: 'fromSixToOneYear', value: 'From 6 months to one year', label: 'From 6 months to 1 year' },
        { index: 3, name: 'workExperiencePositionHeld', id: 'fromOneToThreeYears', value: 'From 1 to 3 years', label: 'From 1 to 3 years' },
        { index: 4, name: 'workExperiencePositionHeld', id: 'fromThreeToTenYears', value: 'From 3 to 10 years', label: 'From 3 to 10 years' },
        { index: 5, name: 'workExperiencePositionHeld', id: 'overTenYears', value: 'Over 10 years', label: 'Over 10 years' },
    ];

    // Функция получает строковое значение, ищет по полю {name} соответствие
    // возращает объект { key: value , ... } для рендера radioButton на страницу.

    const sortedContent = content.map(
        content => content.name === searchName ? content : null
    );

    return sortedContent;
}
