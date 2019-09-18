// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector('topics');

axios
.get('https://lambda-times-backend.herokuapp.com/topics')
.then(results => {
    console.log(results);
    results.topics.forEach(topic => {
        topics.appendChild(createTabs(topic));
    });
}).catch((err) => {
    console.log(err);
});

    function createTabs(topic) {
        const tabClass = document.createElement('div');
        tabClass.classList.add('tab');
        tabClass.textContent = topic;

        return createTabs;
    }