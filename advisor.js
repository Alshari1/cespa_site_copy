const teamMembers = [
    {
        name: "Albert Flores",
        role: "VP of Sales",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Theresa Webb",
        role: "Business Development Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Savannah Nguyen",
        role: "Director of Product",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Daniel Murphy",
        role: "Business Analyst",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Darrell Steward",
        role: "Director of Sales",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600"
    }
];

document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById('team-grid');

    // Card Builder Function
    function createCardElement(member) {
        const card = document.createElement('div');
        card.className = "relative overflow-hidden rounded aspect-[4/5] bg-slate-100 group shadow-sm hover:shadow-lg transition-all duration-500 ease-out reveal-item";

        card.innerHTML = `
                    <img src="${member.image}" 
                         alt="${member.name}" 
                         class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                         loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform group-hover:-translate-y-1 transition-all duration-500 ease-out">
                        <h3 class="text-white font-semibold text-lg sm:text-xl tracking-tight">${member.name}</h3>
                        <p class="text-slate-300 text-xs sm:text-sm font-medium mt-1">${member.role}</p>
                    </div>
                `;
        return card;
    }

    // Step 1: Render Intro Text Block
    const introHTML = `
                <div class="lg:col-span-2 flex flex-col justify-center pr-0 lg:pr-8 py-6 reveal-item">
                    <h2 class="font-inter text-[12px] uppercase  text-black  tracking-wide font-medium">
                        Advisory panel
                    </h2>
                      <h2 class="font-cormorant text-black text-5xl my-6">Meet the Brain
            </h2>
                </div>
            `;
    grid.insertAdjacentHTML('beforeend', introHTML);

    // Step 2: Render first two profile cards
    teamMembers.slice(0, 2).forEach(member => {
        grid.appendChild(createCardElement(member));
    });

    // Step 3: Render Link Block
    const linkHTML = `
                <div class="flex items-end pb-4 reveal-item">
                    <a href="#" class="group inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors duration-300 py-2">
                        See All Members
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             class="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-out" 
                             fill="none" 
                             viewBox="0 0 24 24" 
                             stroke="currentColor" 
                             stroke-width="2.5">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
            `;
    grid.insertAdjacentHTML('beforeend', linkHTML);

    // Step 4: Render remaining profile cards
    teamMembers.slice(2).forEach(member => {
        grid.appendChild(createCardElement(member));
    });

    // Step 5: Animation Observers
    const revealItems = document.querySelectorAll('.reveal-item');
    revealItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = "1";
                        item.style.transform = "translateY(0)";
                    }, index * 100);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 });

    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        observer.observe(mainContainer);
    }
});