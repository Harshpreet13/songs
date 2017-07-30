

       function fancyTimeFormat(time)
        {   
            // Hours, minutes and seconds
            var hrs = ~~(time / 3600);
            var mins = ~~((time % 3600) / 60);
            var secs = time % 60;

            // Output like "1:01" or "4:03:59" or "123:03:59"
            var ret = "";

            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }

            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }
                

        function toggleSong() {
            var song = document.querySelector('audio');
            if(song.paused == true) {
            console.log('Playing');
            $('.play-icon').removeClass('fa-play').addClass('fa-pause');
            song.play();
                }
            else {
            console.log('Pausing');

            $('.play-icon').removeClass('fa-pause').addClass('fa-play');
            song.pause();
                }
            } 

            function updateCurrentTime() {
        var song = document.querySelector('audio');
       // console.log(song.currentTime);
       // console.log(song.duration);
       var currentTime = Math.floor(song.currentTime);
       currentTime = fancyTimeFormat(currentTime);
        var duration = Math.floor(song.duration);
        duration = fancyTimeFormat(duration);
        $('.time-elapsed').text(currentTime);
        $('.song-duration').text(duration);
        }

        var songNumber=1;

        function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image);
    $('.current-song-name').text(songObj.name);
    $('.current-song-album').text(songObj.album);
}

        function addSongNameClickEvent(songObj,position) {
            var songName=songObj.fileName;
            var id = '#song' + position;
                $(id).click(function() {
                var audio = document.querySelector('audio');
                var currentSong = audio.src;
                if(songNumber !== position)
                {
                    audio.src=songName;
                    songNumber=position;  //updating songnumber with new value
                   changeCurrentSongDetails(songObj);   //Function call
                }
                
                toggleSong();
                
                });
                }






         //whenever HTML document is loaded,only after that,this function run.
        $(document).ready(function(){  //jQuery equivalent of windows.onload

        $('#songs').DataTable();
        changeCurrentSongDetails(songs[0]);    
        updateCurrentTime();
        setInterval(function() {
        updateCurrentTime();

            },1000);
     

        var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image':'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image':'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image':'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image':'song4.jpg'
    },{

        'name': 'Qismat',
        'artist':'Ammy Virk',
        'album' : 'Qismat',
        'duration':'4:03',
        'fileName':'song5.mp3',
        'image':'song5.jpg'
            },{

                'name': 'Akhar',
        'artist':'Amrinder Gill',
        'album' : 'Lahoriye',
        'duration':'3:40',
        'fileName':'song6.mp3',
        'image':'song6.jpg'
            },{

                'name': 'Bas tu',
        'artist':'Jasmine Sandlas',
        'album' : 'Bas tu',
        'duration':'3:41',
        'fileName':'song7.mp3',
        'image':'song7.jpg'
            }]

            //fetch from database-AJAX ,Backend ,Server se yeh information mangte hai
                   for(var i =0; i < songs.length;i++) {
                        var obj = songs[i];
                        var name = '#song' + (i+1);
                        var song = $(name);
                        song.find('.song-name').text(obj.name);
                        song.find('.song-artist').text(obj.artist);
                        song.find('.song-album').text(obj.album);
                        song.find('.song-length').text(obj.duration);
                        addSongNameClickEvent(obj,i+1);
                    }

                });



                    

        


    


    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    $('.play-icon').on('click', function() {
        // function ko call karo
        toggleSong();
    });
    $('body').on('keypress', function(event) {
                if (event.keyCode == 32) {
                   
                        //function ko call karo
                        toggleSong();
                }
            });



    