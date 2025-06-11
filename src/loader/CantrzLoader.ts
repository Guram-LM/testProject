export const CantrzLoader = async () => {
    const respons = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
    return await respons.json()
}