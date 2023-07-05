//forum cards
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