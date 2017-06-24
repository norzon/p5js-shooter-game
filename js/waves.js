var waves = [
    {   // Wave 1
        total: 5,
        waveTimer: 300,
        subWave: [
            {
                total: 3,
                health: 1,
                speed: 1,
                cooldown: 60
            },
            {
                total: 2,
                health: 2,
                speed: 1,
                cooldown: 120
            }
        ]
    },

    {   // Last wave
        total: Infinity,
        subWave: [
            {
                total: Infinity,
                health: 10,
                speed: 3,
                cooldown: 60
            }
        ]
    }
];
