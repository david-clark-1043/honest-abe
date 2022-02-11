import { getPoliticians } from "./dataAccess.js"


const PoliticianListElement = (politicianObject) => {
    let elementString = '<section class="politician">'
    // add name
    elementString += `<header class="politician__name">
                        <h1>${politicianObject.name.first} ${politicianObject.name.last}</h1>
                    </header>`
    // add info
    elementString += `<div class="politician_info">
                        <div>Age: ${politicianObject.age}</div>
                        <div>Represents: ${politicianObject.district}</div>
                        </div>`
    
    // close section tag
    elementString += "</section>"

    return elementString
}

export const PoliticianList = () => {
    const politicians = getPoliticians()
    let html = '<article class="politicians">'

    html += politicians.map(politician => {
        let politicianHTML = PoliticianListElement(politician)

        return politicianHTML
    }).join("")

    html += "</article>"

    return html
}