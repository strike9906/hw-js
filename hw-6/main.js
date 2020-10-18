// get запрос + доп задание на плюс респект
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2')
function sendGetRequest () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    request.onreadystatechange = function() {
        if (request.readyState !=4 ) {
            return;
        }
        if (request.status == 200) {
            console.log(this.responseText);  
        	setTimeout(() => {
	            flag = true;
	            btn.removeAttribute("disabled");
	        }, 3 * 1000);
        } 
        else {
            console.log('shit happens: ' + request.status + ', ' + request.statusText);
        }
    }
    request.send();
    request.timeout = 10*1000;
    request.ontimeout = function() {
        request.abort();
        console.log('запрос не прошел');
        sendGetRequest();
    }
}
try {
    btn.addEventListener('click', function(){
    	btn.setAttribute("disabled", "disabled");
        sendGetRequest();
    });
    btn2.addEventListener('click', function () {
    	btn2.setAttribute("disabled", "disabled");
    	sendPostRequest();
    })
}
catch (err){
    console.log(err);
    alert('error');
}
// post запроc
function sendPostRequest () {
	let request = new XMLHttpRequest();
	request.open('POST', 'https://jsonplaceholder.typicode.com/users', true);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.onload = function () {
	    console.log(this.responseText); 
        setTimeout(() => {
	        flag = true;
	        btn2.removeAttribute("disabled");
	    }, 3 * 1000);
	};
	request.send('user=person&pwd=password&organization=place&requiredkey=key');
	request.timeout = 10*1000;
    request.ontimeout = function() {
        request.abort();
        console.log('запрос не прошел');
        sendPostRequest();
    }
}