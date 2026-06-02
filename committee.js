const members = [
    {
        name: "Rafin Hasan",
        role: "President",
        yearDept: "4th Year, CE",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
        linkedinUrl: "https://linkedin.com",
        FbUrl: "https://linkedin.com",
        email: "https://linkedin.com",
    },
    {
        name: "Anika Rahman",
        role: "Vice President",
        yearDept: "4th Year, EEE",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
        linkedinUrl: "https://linkedin.com",
        FbUrl: "https://linkedin.com",
        email: "https://linkedin.com",
    },
    {
        name: "Sajid Islam",
        role: "General Secretary",
        yearDept: "3rd Year, CSE",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
        linkedinUrl: "https://linkedin.com",
        FbUrl: "https://linkedin.com",
        email: "https://linkedin.com",
    },
    {
        name: "Tahsina Alam",
        role: "Treasurer",
        yearDept: "3rd Year, BBA",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200",
        linkedinUrl: "https://linkedin.com",
        FbUrl: "https://linkedin.com",
        email: "https://linkedin.com",
    },
    {
        name: "Tanvir Ahmed",
        role: "Organizing Secretary",
        yearDept: "2nd Year, ME",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
        linkedinUrl: "https://linkedin.com",
        FbUrl: "https://linkedin.com",
        email: "https://linkedin.com",
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Members Data Array

    const gridContainer = document.getElementById('members-grid');
    // 2. Loop and generate HTML elements (keeping styles intact)
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = "flex flex-col items-center text-center p-6 bg-transparent max-w-60";
        memberCard.innerHTML = `
                <div class="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-green-100 shadow-sm">
                    <img src="${member.image}"
                        alt="${member.name} Profile"
                        class="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <h3 class="text-slate-900 font-bold text-lg">
                    ${member.name}
                </h3>
                <p class="text-teal-600 font-medium text-sm mt-0.5">
                    ${member.role}
                </p>
                <p class="text-slate-400 font-normal text-sm mt-0.5">
                    ${member.yearDept}
                </p>
               <p class="flex gap-3 ">
                <a href="${member.linkedinUrl}" target="_blank" rel="noopener noreferrer"
                    class="mt-4 flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300 shadow-sm">
                    <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                <a href="${member.FbUrl}" target="_blank" rel="noopener noreferrer"
                    class="mt-4 flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300 shadow-sm">
                    <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                <a href="${member.email}" target="_blank" rel="noopener noreferrer"
                    class="mt-4 flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all duration-300 shadow-sm">
                    <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
               </p>
            `;
        gridContainer.appendChild(memberCard);
    });
});