// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response)
        return response;
    })
    .then(response => {
        let newTopics = response.data.topics.map((topic) => {
        newTopic = createTopic(topic)
        return newTopic
        })
        return newTopics
    })
    .then(newTopics => {
        const entryPoint = document.querySelector('.topics')
        newTopics.forEach(topic => {
            entryPoint.appendChild(topic);
        })
        
    })


    function createTopic (topic){
        const tab = document.createElement('div')

        tab.classList.add('tab')

        tab.textContent = topic;

        return tab
    }

