const talkList = document.getElementById("talkList");
const search = document.getElementById("search");

let talks = [];

fetch("talks.json")
  .then(response => response.json())
  .then(data => {
    talks = data;
    displayTalks(talks);
  });

function displayTalks(list) {

  talkList.innerHTML = "";

  list.forEach(talk => {

    talkList.innerHTML += `
      <div class="talk-card">

        <h4>${talk.title}</h4>

        <p>
          <strong>Speaker:</strong> ${talk.speaker}
        </p>

        <p>
          <strong>Category:</strong> ${talk.category}
        </p>

        <audio controls class="w-100">
            <source src="${talk.audio}">
        </audio>

      </div>
    `;

  });

}

search.addEventListener("input", function(){

    const keyword = this.value.toLowerCase();

    const filtered = talks.filter(talk =>

        talk.title.toLowerCase().includes(keyword) ||

        talk.speaker.toLowerCase().includes(keyword) ||

        talk.category.toLowerCase().includes(keyword)

    );

    displayTalks(filtered);

});
