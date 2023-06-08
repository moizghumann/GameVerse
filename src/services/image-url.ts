
const getCroppedImageUrl = (url: string) => {
    const target = 'media/'
    // calculating the index at which the target substring ends, by adding the length of the target string to the starting index.
    const index = url.indexOf(target) + target.length
    // url.slice(index) extracts the remaining portion of the URL string starting from the end of the target substring.
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl;