import noImage from '../assets/no-image-placeholder.webp'


const getCroppedGameImageUrl = (url: string) => {

    if (url === null) return noImage;

    const target = 'media/'
    // calculating the index at which the target substring ends, by adding the length of the target string to the starting index.
    const index = url.indexOf(target) + target.length
    // url.slice(index) extracts the remaining portion of the URL string starting from the end of the target substring.
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedGameImageUrl;