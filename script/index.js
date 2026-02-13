

const loadLessons = () => {
    const url = 'https://openapi.programming-hero.com/api/levels/all'
    fetch(url)
        .then(res => res.json())
        .then((json) => displayLesson(json.data));
}

const displayLesson = (lessons) => {

    // 1.get the container and empty it 
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = "";
    // 2.get every lession
    for (let lesson of lessons) {
        // 3. create element 

        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `       
    <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary" > 
    <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
    </button>
       `;

        // 4. append in container 
        levelContainer.append(btnDiv);

    }


}

loadLessons();


const loadLevelWord = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayWord(data.data))

}
const displayWord = (array) => {
    // 1. get container 

    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    if (array.length === 0) {
        wordContainer.innerHTML = `
         <div class="card-body text-center items-center col-span-full">
         <img src="./assets/alert-error.png" width="150" height="80" >
                <p class="bangla-font font-bold"> এই লেসন এ এখনো কোনো শব্দ যুক্ত করা হয় নি  </p>
                <h1 id="w-m w-p" class="font-bold text-3xl"> Go To Next Lesson </h1>
               
            </div>
        `;

    }
    else {
        for (let data of array) {



            const cardDiv = document.createElement("div")
            cardDiv.innerHTML = `
      <div class="bg-base-100 w-96 shadow-sm flex-1 text-center ">
            <div class="card-body">
                <h2 id="word-name"class="word font-bold"> ${data.word}
                </h2>
                <p>meaning/pronunciation</p>
                <h2 id="w-m w-p" class="font-bold"> ${data.meaning} / ${data.pronunciation} </h2>
                <div class="card-actions justify-evenly mt-3">
                    <div class="badge badge-outline justify-start bg-blue-100 hover:bg-[#1A91FF80] "><i class="fa-solid fa-circle-info"></i></div>
                    <div class="badge badge-outline justify-end bg-blue-100 hover:bg-[#1A91FF80] "><i class="fa-solid fa-volume-high"></i></div>
                </div>
            </div>
        </div>
   
     `;

            wordContainer.append(cardDiv);

        }

    }

}

