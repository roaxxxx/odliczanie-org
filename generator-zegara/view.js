        // Pobierz parametry URL
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get("name");
        const createdBy = urlParams.get("createdBy");
        const emote = urlParams.get("emote");
        const isVIP = urlParams.get("isVIP");
        const time = urlParams.get("time");
        const music = urlParams.get("music");
        const theme = urlParams.get("theme");

        // Ustaw tło i czcionkę
        if (!isVIP) {
            document.body.style.fontFamily = "Arial, sans-serif";
        }

        // Ustaw tło strony (jeśli isVIP jest true)
        if (theme) {
            document.body.style.backgroundImage = `url(${theme})`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
        }

        // Ustaw treść h1 i p
        const title = document.createElement("title");
        title.innerHTML = `${name} - odliczanie.org`; // Ustaw tytuł strony

        const h1 = document.createElement("h1");
        const img = document.createElement("img");
        img.src = emote;
        img.width = 24;
        img.height = 24;
        h1.innerHTML = `${name} `;
        h1.appendChild(img);
        document.body.appendChild(h1);

        const p = document.createElement("p");
        p.innerHTML = `Stworzony przez ${createdBy}`;
        document.body.appendChild(p);

        // Utwórz licznik odliczania
        const countdownDiv = document.createElement("div");
        const countdown = document.createElement("span");
        countdownDiv.appendChild(countdown);
        document.body.appendChild(countdownDiv);

        const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            const targetTime = new Date(time).getTime();
            const remainingTime = targetTime - currentTime;

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                countdown.innerHTML = "Czas minął!";
                return;
            }

            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);

        // Dodaj muzykę w tle (jeśli nie jest VIP)
        if (!isVIP && music) {
            const audio = new Audio(music);
            audio.loop = true;
            audio.play();
        }
