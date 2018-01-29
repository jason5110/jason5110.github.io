(function() {
	var config = {
        apiKey: "AIzaSyCIt-SXHFUBMsfSyACYNC6h7KbHrmT53Uc",
        authDomain: "eatwhat-6151420538.firebaseapp.com",
        databaseURL: "https://eatwhat-6151420538.firebaseio.com",
    };


    if (!firebase.apps.length) {
	    firebase.initializeApp(config);
	}

    const btnLogout = document.getElementById('btnLogout');

    btnLogout.addEventListener('click', e => {
    	firebase.auth().signOut();
    })


    firebase.auth().onAuthStateChanged(firebaseUser => {
    	if (firebaseUser) {
    		console.log(firebaseUser)
    		btnLogout.classList.remove('hide');
    	} 
    	else{
    		console.log('not logged in')
    		btnLogout.classList.add('hide');

            window.history.back();
    	}
    })


}());