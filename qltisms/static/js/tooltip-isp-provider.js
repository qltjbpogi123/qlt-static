document.getElementById('showTooltip').addEventListener('click', (e) => {
    e.preventDefault();
    const steps = [
        {
            content: "Here you can manage and view all users in the system.",
            title: "Dashboard 💡",
            target: ".dashboard", 
            order: 1, 
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "View and manage the account list.",
            title: "Account List 💡",
            target: ".account_list", 
            order: 2, 
            group: "sidebar-isp-provider",
            fixed: true
        },
        {
            content: "Add qualified personnel to the system.",
            title: "Add Personnel 💡",
            target: ".add_personnel",
            order: 3,
            group: "sidebar-isp-provider",
            fixed: true
        },
        {
            content: "Add new clients to the system.",
            title: "Add Client 💡",
            target: ".add_client", 
            order: 4,
            group: "sidebar-isp-provider",
            fixed: true
        },
        {
            content: "Here you can view and manage the list of available features.",
            title: "Features 💡",
            target: ".feature", 
            order: 5,
            group: "sidebar-isp-provider",
            fixed: true
        },
        {
            content: "Manage ISP personnel here.",
            title: "ISP Personnels 💡",
            target: ".isp_personnels", 
            order: 6,
            group: "sidebar-isp-provider",
            fixed: true
        },
        {
            content: "Here you can view and manage the list of clients.",
            title: "Clients 💡",
            target: ".clients", 
            order: 7,
            group: "sidebar-isp-provider",
            fixed: true
        },
        {
            content: "If you need help, just click here.",
            title: "Help 💡",
            target: ".help",
            order: 8,
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "<div class='mb-4 text-sm'>Welcome to QLT ISMS</div> <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXY5eGNodWVtNDl3aDlheThwdW5wdmQ2dWJnODBiNmhjNHZ0ejdtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lepqb4HZRuudXHkp2E/giphy.webp' alt='Ready to go'/>",
            title: "Ready to go!! ✨",
            target: "center", 
            order: 9,
            group: "sidebar-isp-provider",
            fixed: true
        },
    ];
    const tg = new tourguide.TourGuideClient({
        steps: steps,
        debug: true
    });
    
    tg.start();

    tg.onAfterExit(()=>{
    window.location.reload();
    })
})