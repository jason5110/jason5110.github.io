(function() {
	var config = {
        apiKey: "AIzaSyCIt-SXHFUBMsfSyACYNC6h7KbHrmT53Uc",
        authDomain: "eatwhat-6151420538.firebaseapp.com",
        databaseURL: "https://eatwhat-6151420538.firebaseio.com",
        // projectId: "eatwhat-6151420538",
        // storageBucket: "eatwhat-6151420538.appspot.com",
        // messagingSenderId: "573626268392"
    };


    if (!firebase.apps.length) {
	    firebase.initializeApp(config);
	}
    // firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');



    btnLogin.addEventListener('click', e=> {
    	const email = txtEmail.value;
    	const pass = txtPassword.value;
    	const auth = firebase.auth();

    	console.log('btnLogin email: '+JSON.stringify(email)+', pass: '+JSON.stringify(pass))

    	const promise = auth.signInWithEmailAndPassword(email, pass)


    	promise.catch(e => console.log(e.message));
    })

    btnLogout.addEventListener('click', e => {
    	firebase.auth().signOut();
    })


    firebase.auth().onAuthStateChanged(firebaseUser => {
    	if (firebaseUser) {
    		console.log(firebaseUser)
    		btnLogout.classList.remove('hide');
    		btnLogin.classList.add('hide');


    		window.location.href = "pages/main.html"

    	} 
    	else{
    		console.log('not logged in')
    		btnLogout.classList.add('hide');
    		btnLogin.classList.remove('hide');
    	}
    })


}());