function isRelevant(topics, paragraph) {
    //search for topic keyword by iterating through paragraph
    let lower = paragraph.toLowerCase();
    for (let i = 0; i < topics.length; i++) {
        if (lower.includes(topics[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}
// console.log(isRelevant(['cat', 'Fox'], "The quick brown fox jumps over the lazy dog")) // true
// --------------------------------------------------


// return a function that takes a paragraph

// returns paragrpaph and checks if relevent to topics



const about = (topics) => (paragraph) => isRelevant(topics, paragraph)

// const about = (topics) => {
//     const aboutCats = (paragraph) => {
//         return isRelevant = () => {
//             return true;
//         }
//     }
// }




const aboutCats = about(["cat", "kitten", "cats"]);
// console.log(aboutCats("The quick brown fox jumps over the lazy dog."));
console.log(aboutCats("The quick brown cat jumps over the lazy dog.")); // true
