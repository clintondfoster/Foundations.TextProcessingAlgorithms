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

const about = (topics) => (paragraph) => isRelevant(topics, paragraph)

const aboutCats = about(["cat", "kitten", "cats"]);
//console.log(aboutCats("The quick brown fox jumps over the lazy dog.")); //false
//console.log(aboutCats("The quick brown cat jumps over the lazy dog.")); //true


const getRelevantSentences = (criteriaFn, sentences) => (paragraph) => criteriaFn(isRelevant(topics, paragraph))

const sentences = [
    "I have a pet cat.",
    "I have a pet dog.",
    "I don't have a pet.",
  ];

  console.log(getRelevantSentences(aboutCats, sentences)) //["I have a pet cat."]
//   console.log(getRelevantSentences((s) => s.length > 17, sentences)) //["I don't have a pet."]