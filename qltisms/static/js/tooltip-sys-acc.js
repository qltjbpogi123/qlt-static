document.getElementById('showTooltip').addEventListener('click', (e) => {
    e.preventDefault();
    const steps = [
        {
            content: "Manage and view all system users here.",
            title: "Admin Options 💡",
            target: ".sys_admin_options",
            order: 1,
            group: "sidebar-qlt-personnel",
            fixed: true,
        },
        {
            content: "Add new subscribers to the system easily.",
            title: "User Management 💡",
            target: ".sys_user_management",
            order: 2,
            group: "sidebar-qlt-personnel",
            fixed: true,
        },
        {
            content: "View and manage the list of users.",
            title: "Users List 💡",
            target: ".sys_users_list",
            order: 3,
            group: "sidebar-qlt-personnel",
            fixed: true,
        },
        {
            content: "Enhance the system with new features.",
            title: "Features 💡",
            target: ".sys_features",
            order: 4,
            group: "sidebar-qlt-personnel",
            fixed: true,
        },
        {
            content: "Click here for help and support.",
            title: "Help 💡",
            target: ".help",
            order: 5,
            group: "sidebar-qlt-personnel",
            fixed: true,
        },
        {
            content: "<div class='mb-4 text-sm'>Welcome to QLT ISMS!</div><img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXY5eGNodWVtNDl3aDlheThwdW5wdmQ2dWJnODBiNmhjNHZ0ejdtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lepqb4HZRuudXHkp2E/giphy.webp' alt='Ready to go'/>",
            title: "Ready to go!! ✨",
            target: "center",
            order: 6,
            group: "sidebar-qlt-personnel",
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