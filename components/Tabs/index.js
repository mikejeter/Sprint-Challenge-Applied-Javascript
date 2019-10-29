// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>




axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( results => {
        // Remember response is an object, response.data is an array.
        results.data.topics.forEach(item => {
            const tabClass = createTabs(item, 'topics');
            const newTopics = document.querySelector('.topics');
            newTopics.appendChild(tabClass);
        });
    })
    .catch((err) => {
        console.log(err);
    })


    function createTabs(topicName) {
        const tabClass = document.createElement('div');
        tabClass.classList.add('tab');
        tabClass.textContent = topicName;

        return tabClass;
    }
    // const tabClass = createTabs();

    
    // newTopics.appendChild(tabClass);
