document.addEventListener('DOMContentLoaded', function() {
    $("#search").submit(function(e) { // Form ID'si "search" olarak güncellendi
        e.preventDefault();
        const searchQuery = $("#keysowrds").val().trim(); // Input ID'si "keysowrds" olarak güncellendi

        if (searchQuery !== "") {
            chrome.search.query({ text: searchQuery }, function(results) {
                if (chrome.runtime.lastError) {
                    console.error('Arama Hatası:', chrome.runtime.lastError.message);
                    alert("Arama sırasında bir hata oluştu: " + chrome.runtime.lastError.message);
                } else if (results && results.length > 0) {
                    window.location.href = results[0].url;
                }
            });
        } else {
            $("#keysowrds").attr("placeholder", "Lütfen bir şeyler yazın!");
            setTimeout(function() {
                $("#keysowrds").attr("placeholder", "Search on Web");
            }, 3000);
            $("#keysowrds").focus();
        }
    });
});