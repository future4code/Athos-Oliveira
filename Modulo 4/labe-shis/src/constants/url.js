const user = "andre-pereira-johnson"
const user2 = "darvas"

const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${user}`
const baseUrl2 = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${user2}`

export const urlGetTrips = `${baseUrl}/trips`
export const urlLogin = `${baseUrl2}/login`
export const urlDetailTrip = `${baseUrl}/trip`
