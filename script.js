input = document.getElementById("userinput").value

if(input.match(".*\\d.*")) {
    url = "https://steamcommunity.com/profiles/" + input + "/?xml=1";
} else {
    url = "https://steamcommunity.com/id/" + input + "/?xml=1";
}

console.log(url);


$.ajax({
    type: "GET",
    url: url,
    dataType: "xml",
    success: function (xml) {
            $(xml).find('mostPlayedGame').each(function() {
                $('#games').append(
                    '<tr>' +
                        '<td>' +
                            $(this).find('gameName').text() + '</td> ' +
                        '<td>' +
                            $(this).find('hoursOnRecord').text() + '<a>' + 'h' + '</a>' + '</td>' +
                        '<td><img src="' +
                            $(this).find('gameLogo').text() + '"></img></td> '
                            ,'</tr>');
                });

                $(xml).find('profile').each(function() {
                    $('#user').append(
                        '<tr>' +
                            '<td>' +
                                $(this).find('steamID').text() + '</td> ' +
                            '<td><img src="' +
                                $(this).find('avatarMedium').text() + '">' + '</img>' + '</td> ' +
                                '<td>' +
                                $(this).find('memberSince').text() + '</td> ' +
                                '<td>' +
                                $(this).find('location').text() + '</td> ' +
                                '<td>' +
                                $(this).find('realname').text() + '</td> '
                                ,'</tr>');
                    });
            }
        });