fetch("http://jsonplaceholder.typicode.com/photos")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
                console.log(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            
            let mainContainer = document.getElementById("gallery");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = `
                <div class="gallery-item" tabindex="0">

				<img src=`+data[i].thumbnailUrl+` class="gallery-image" alt=`+data[i].title+`>

				</div>`
                mainContainer.appendChild(div);
            }
        }

        fetch("http://jsonplaceholder.typicode.com/users/1")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData2(data);
                console.log(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData2(data) {
            
            let profilename = document.getElementById("profilename");
            let realname = document.getElementById("username");
            document.getElementById("website").href=data.website;
            document.getElementById("website").innerHTML=data.website;
            profilename.innerHTML=data.username;
            realname.innerHTML=data.name;
        
            console.log(data);
        }