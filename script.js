        function fetchCatFact() {
            fetch('https://catfact.ninja/fact')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('fact').innerText = data.fact;

                    setTimeout(() => {
                        document.getElementById('fact').innerText = 'Meow!';

                        setTimeout(fetchCatFact, 1000); 
                    }, 4000);
                })
                .catch(error => {
                    document.getElementById('fact').innerText = 'Failed to fetch cat fact!';
                    console.error(error);
                });
        }

        fetchCatFact();
