
// interface Prop {
//     descriptionRaw: string;
// }

const extractEnglishDescription = (descriptionRaw: string): string => {
    const endTag = "Español";
    const end = descriptionRaw.indexOf(endTag);

    if (end !== -1) {
        return descriptionRaw.slice(0, end);
    }
    // If the word "Español" is not found, return the entire raw description as fallback
    return descriptionRaw;
};

export default extractEnglishDescription;