export default async function getProductsData(lang, catName) {
    const urlPath =`https://prodapp.lifepharmacy.com/api/web/products?collections=${catName}&order_by=popularity&type=cols&skip=0&take=7&new_method=true&lang=${lang}`
    console.log(urlPath);
    
    const res = await fetch(urlPath)

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}