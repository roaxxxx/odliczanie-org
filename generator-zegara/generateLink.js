        function generateLink() {
            const name = document.getElementById('name').value;
            const time = document.getElementById('time').value;
            const createdBy = document.getElementById('createdBy').value;
            const emote = document.getElementById('emote').value;
            const music = document.getElementById('music').value;
            const theme = document.getElementById('theme').value;

            const url = `https://odliczanie.org/view?name=${name}&time=${time}&createdBy=${createdBy}&emote=${emote}&music=${music}&theme=${theme}`;

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `Wygenerowany link: <a href="${url}" target="_blank">${url}</a>`;
        }
