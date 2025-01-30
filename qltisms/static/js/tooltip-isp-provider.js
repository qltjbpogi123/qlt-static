document.getElementById('showTooltip').addEventListener('click', (e) => {
    e.preventDefault();
    const steps = [
        {
            content: "System main functions.",
            title: "Main 💡",
            target: ".isp_essentials",
            order: 1,
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "View and manage network plans.",
            title: "Network 💡",
            target: ".isp_network",
            order: 2,
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "Add personnel/clients to system.",
            title: "User Management 💡",
            target: ".isp_user_management",
            order: 3,
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "View clients and personnels.",
            title: "Users 💡",
            target: ".isp_users_list",
            order: 4,
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "Manage available network features.",
            title: "Network Management 💡",
            target: ".isp_network_management",
            order: 5,
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "Handle support and complaints.",
            title: "Support and Complaints 💡",
            target: ".isp_support_complaints",
            order: 6,
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "Click here for help and support.",
            title: "Help 💡",
            target: ".help",
            order: 7,
            group: "sidebar-isp-provider",
            fixed: true,
        },
        {
            content: "<div class='mb-4 text-sm'>Welcome to QLT ISMS!</div> <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXY5eGNodWVtNDl3aDlheThwdW5wdmQ2dWJnODBiNmhjNHZ0ejdtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lepqb4HZRuudXHkp2E/giphy.webp' alt='Ready to go'/>",
            title: "Ready to go!! ✨",
            target: "center",
            order: 8,
            group: "sidebar-isp-provider",
            fixed: true,
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