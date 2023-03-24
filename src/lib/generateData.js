export default async function generateData(slug) {

    const res = await fetch(`https://prodapp.lifepharmacy.com/api/cms/page/${slug}`);
    if (!res.ok) {
        throw new Error("Unable to fetch Page Data")
    }
    return res.json();

}
