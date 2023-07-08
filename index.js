var closeButton = document.getElementById("for-close-burger");
var menu = document.getElementById("for-hamburger");


closeButton.addEventListener("click", function() {
    menu.style.display = "none";
});

function toggleMenu() {
    var menu = document.getElementById("for-hamburger");
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

const cardDatas = [{
        icon: 'images/card1.png',
        title: 'Lecture',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    },
    {
        icon: '/images/card2.png',
        title: 'CC Exhibition',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    },
    {
        icon: '/images/card3.png',
        title: 'Forum',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    },
    {
        icon: '/images/card4.png',
        title: 'Workshop',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    },
    {
        icon: '/images/card5.png',
        title: 'CC Ignite',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veniam enim? Corporis quisquam quos obcaecati minus consectetur ratione iusto veritatis nam, illo quibusdam itaque aut, dolorum undeculpa delectus.Necessitatibum.',
    }
];

const mainActivities = document.querySelector('.card-forum');

function create() {
    cardDatas.forEach(function(card) {
        const cardForumDetails = document.createElement('div');
        cardForumDetails.classList.add('card-forum-details', 'desk-flex');

        const img = document.createElement('img');
        img.src = card.icon;
        img.alt = 'card-icons';
        cardForumDetails.appendChild(img);

        const title = document.createElement('span');
        title.textContent = card.title;
        cardForumDetails.appendChild(title);

        const description = document.createElement('p');
        description.textContent = card.description;
        cardForumDetails.appendChild(description);

        mainActivities.appendChild(cardForumDetails);
    });
}

create();
//artist cards
const Data = [{
        img: './images/jimin.jpg',
        name: 'Jimin',
        profession: 'Vocalist',
        description: 'Perfomance at YG entertainment',
    },
    {
        img: './images/Rm.jpg',
        name: 'RM',
        profession: 'Visual',
        description: 'Perfomance at YG entertainment',
    },
    {
        img: './images/V.jpg',
        name: 'Kim Tae Yong',
        profession: 'Pianist',
        description: 'Perfomance at YG entertainment',
    },
    {
        img: './images/jungkook.jpg',
        name: 'Jong Junkook',
        profession: 'Dancer',
        description: 'Perfomance at YG entertainment ',
    },
    {
        img: './images/jhope.jpg',
        name: 'Sugar',
        profession: 'Dancer',
        description: 'Perfomance at YG entertainment ',
    },
    {
        img: './images/jk-hope.jpg',
        name: 'J-hope',
        profession: 'Dancer',
        description: 'Perfomance at YG entertainment',
    },
];

const container = document.getElementById('BTS');

function renderPlayer(player) {
    return `
    <div class="player-list">
      <img src="${player.img}" alt="" class="player-img">
      <div class="player-content">
        <h2 class="player-header">${player.name}</h2>
        <h3 class="player-profession">${player.profession}</h3>
          <a class="player-description">${player.description}</a>
        </div>
      </div>
  `;
}

function renderPlayers() {
    Data.forEach(function(player) {
        container.innerHTML += renderPlayer(player);
    });
}

renderPlayers();