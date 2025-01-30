document.getElementById('showTooltip').addEventListener('click', (e) => {
    e.preventDefault();
    const steps = [
    {
        content: "Here you can manage and view all users in the system.",
        title: "User  List 💡",
        target: ".user_list",
        order: 1,
        group: "sidebar-qlt-personnel",
        fixed: true,
    },
    {
        content: "Add a new subscriber to the system.",
        title: "Add Subscriber 💡",
        target: ".add_subscriber", 
        order: 2, 
        group: "sidebar-qlt-personnel",
        fixed: true
    },
    {
        content: "Add qualified personnel to the system.",
        title: "Add QLT Personnel 💡",
        target: ".add_qlt_personnel",
        order: 3,
        group: "sidebar-qlt-personnel",
        fixed: true
    },
    {
        content: "Add new features to enhance the network.",
        title: "Add Feature 💡",
        target: ".add_feature", 
        order: 4,
        group: "sidebar-qlt-personnel",
        fixed: true
    },
    {
        content: "Here you can view and manage the list of available features.",
        title: "Features 💡",
        target: ".feature_list", 
        order: 5,
        group: "sidebar-qlt-personnel",
        fixed: true
    },
    {
        content: "If you need help, just click here.",
        title: "Help 💡",
        target: ".help",
        order: 6,
        group: "sidebar-qlt-personnel",
        fixed: true,
    },
    {
        content: "<div class='mb-4 text-sm'>Welcome to QLT ISMS</div> <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXY5eGNodWVtNDl3aDlheThwdW5wdmQ2dWJnODBiNmhjNHZ0ejdtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lepqb4HZRuudXHkp2E/giphy.webp' alt='Ready to go'/>",
        title: "Ready to go!! ✨",
        target: "center", 
        order: 7,
        group: "sidebar-qlt-personnel",
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