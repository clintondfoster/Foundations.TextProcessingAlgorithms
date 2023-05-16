function isRelevant (topics, paragraph) {
//search for topic keyword by iterating through paragraph
let lower = paragraph.toLowerCase();
   for (let i = 0; i < topics.length; i++) {
    if (lower.includes(topics[i].toLowerCase())) {
       return true;
        }
    }
    return false;
}
    console.log(isRelevant(['cat','Fox'], "The quick brown fox jumps over the lazy dog")) // true


about (topics) {

}

