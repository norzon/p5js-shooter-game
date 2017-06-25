var waves = [
    {   // Wave 1
        total: 5,
        subTimer: 300,
        subWave: [
            { total: 3, health: 1, speed: 1, cooldown: 60 },
            { total: 2, health: 2 ,speed: 1, cooldown: 120 }
        ]
    },
    {   // Wave 2
        total: 10,
        subTimer: 180,
        subWave: [
            { total: 4, health: 1, speed: 2, cooldown: 90 },
            { total: 3, health: 2, speed: 1, cooldown: 90 },
            { total: 3, health: 1, speed: 3, cooldown: 120 },
        ]
    },
    {   // Last wave
        total: "Infinity",
        subWave: [
            {total: "Infinity", health: 10, speed: 3, cooldown: 60}
        ]
    }
];
