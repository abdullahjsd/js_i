function showAndCloseAlert() {
    var alertBox = alert("Bu alert 3 saniye sonra kapanacak.");
    setTimeout(function() {
        alertBox.close();
    }, 3000); 
    
}


showAndCloseAlert();











