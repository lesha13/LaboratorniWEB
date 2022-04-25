// 5
let mood = [
    { 
        mood:"Веселий",
        url:"https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png "
    },
    {
       mood:"Сумний",
       url:"https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png "
    },
    {
        mood:"Цукерберг",
        url:"https://itc.ua/wp-content/uploads/2019/10/190305_fiat_concept_centoventi_12-39.jpg "
    }
]

document.getElementById("mood").onchange = () =>
{
    let numberMood = document.getElementById("mood").value
    document.getElementById("img").innerHTML = 
    `
    <p>${mood[numberMood-1].mood}</p>
    <img src="${mood[numberMood-1].url}">
    `
}

