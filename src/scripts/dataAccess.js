const applicationState = {

}

const API = "http://localhost:8088"

export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(response => response.json())
        .then(
            (politicians) => {
                // Store the external state in application state
                applicationState.politicians = politicians
            }
        )
}

export const fetchInterests = () => {
    return fetch(`${API}/interests`)
        .then(response => response.json())
        .then(
            (interests) => {
                // Store the external state in application state
                applicationState.interests = interests
            }
        )
}

export const fetchPacs = () => {
    return fetch(`${API}/pacs`)
        .then(response => response.json())
        .then(
            (pacs) => {
                // Store the external state in application state
                applicationState.pacs = pacs
            }
        )
}

export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
        .then(response => response.json())
        .then(
            (corporations) => {
                // Store the external state in application state
                applicationState.corporations = corporations
            }
        )
}

export const fetchBills = () => {
    return fetch(`${API}/bills`)
        .then(response => response.json())
        .then(
            (bills) => {
                // Store the external state in application state
                applicationState.bills = bills
            }
        )
}

export const fetchPoliticianBills = () => {
    return fetch(`${API}/politicianBills`)
        .then(response => response.json())
        .then(
            (politicianBills) => {
                // Store the external state in application state
                applicationState.politicianBills = politicianBills
            }
        )
}

export const fetchPacDonations = () => {
    return fetch(`${API}/pacDonations`)
        .then(response => response.json())
        .then(
            (pacDonations) => {
                // Store the external state in application state
                applicationState.pacDonations = pacDonations
            }
        )
}

export const fetchCorporationInterests = () => {
    return fetch(`${API}/corporationInterests`)
        .then(response => response.json())
        .then(
            (corporationInterests) => {
                // Store the external state in application state
                applicationState.corporationInterests = corporationInterests
            }
        )
}

export const fetchCorporationDonations = () => {
    return fetch(`${API}/corporationDonations`)
        .then(response => response.json())
        .then(
            (corporationDonations) => {
                // Store the external state in application state
                applicationState.corporationDonations = corporationDonations
            }
        )
}

export const getPoliticians = () => {
    return applicationState.politicians.map(politician => ({...politician}))
}
export const getPoliticianBills = () => {
    return applicationState.politicianBills.map(politicianBill => ({...politicianBill}))
}
export const getInterests = () => {
    return applicationState.interests.map(interest => ({...interest}))
}
export const getPacs = () => {
    return applicationState.pacs.map(pac => ({...pac}))
}
export const getCorporations = () => {
    return applicationState.corporations.map(corporation => ({...corporation}))
}
export const getBills = () => {
    return applicationState.bills.map(bill => ({...bill}))
}
export const getPacDonations = () => {
    return applicationState.pacDonations.map(pacDonation => ({...pacDonation}))
}
export const getCorporationInterests = () => {
    return applicationState.corporationInterests.map(corporationInterest => ({...corporationInterest}))
}
export const getCorporationDonations = () => {
    return applicationState.corporationDonations.map(corporationDonation => ({...corporationDonation}))
}