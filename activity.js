fetch('./info.json')
    .then(res => res.json())
    .then(data => {

        const cardsContainer =
            document.querySelector(".card-container"); // FIX


        data.forEach(activity => {
            console.log(activity)

            cardsContainer.innerHTML += `
        <div class="activity-card shadow-md" data-id="${activity.id}">
                <span
                    class="inline-block  px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                    Seminar
                </span>
                <h3>${activity.card_info.Title}</h3>
                <p> ${activity.card_info.description}
                </p>
                <h4 class="card-arrow">→</h4>

            </div>
      `;

        });

    })
    .catch(err => {
        console.log(err.message);
    });