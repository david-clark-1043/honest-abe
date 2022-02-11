import { fetchBills, fetchCorporationDonations, fetchCorporationInterests, fetchCorporations, fetchInterests, fetchPacDonations, fetchPacs, fetchPoliticianBills, fetchPoliticians } from "./dataAccess.js"
import { HonestAbe } from "./HonestAbe.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPoliticians()
        .then(() => fetchCorporations())
        .then(() => fetchBills())
        .then(() => fetchPacs())
        .then(() => fetchPacDonations())
        .then(() => fetchInterests())
        .then(() => fetchPoliticianBills())
        .then(() => fetchCorporationDonations())
        .then(() => fetchCorporationInterests())
        .then(() => {
            mainContainer.innerHTML = HonestAbe()
        })
}

render()