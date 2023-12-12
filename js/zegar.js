    const deadlines = [
        { name: "Święta Bożego Narodzenia", date: "2023-12-24T00:00:00" },
        { name: "Nowy Rok", date: "2024-01-01T00:00:00" },
        { name: "Wielkanoc 2024", date: "2024-03-31T00:00:00" },
        { name: "Matury 2024", date: "2024-05-07T00:00:00" },
        { name: "Wakacje 2024", date: "2024-06-24T00:00:00" },
        { name: "Najbliższy długi weekend", date: "2023-12-30T00:00:00" },
        { name: "Najbliższy dzień wolny", date: "2023-12-25T00:00:00" },
        { name: "Dzień Kobiet", date: "2024-03-08T00:00:00" },
        { name: "Św. Konstytucji 3 Maja", date: "2024-05-03T00:00:00" },
        { name: "Św. Niepodległości", date: "2024-11-11T00:00:00" },
        { name: "Najbliższa niedziela handlowa", date: "2023-12-17T00:00:00" },
    ];

    function updateCountdowns() {
        const now = new Date();
        const timeZoneOffset = now.getTimezoneOffset() * 60000; // Różnica między czasem UTC a lokalnym
        const localNow = new Date(now - timeZoneOffset); // Czas lokalny

        deadlines.forEach((deadline, index) => {
            const targetDate = new Date(deadline.date);
            const timeLeft = targetDate - localNow;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const countdownElement = document.getElementById(`countdown-timer-${index}`);
            countdownElement.textContent = `${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`;
        });
    }

    function showCountdown(index) {
        const countdownItems = document.querySelectorAll(".countdown-item");
        countdownItems.forEach(item => item.classList.remove("active"));
        countdownItems[index].classList.add("active");
    }

    updateCountdowns();
    setInterval(updateCountdowns, 1000);
