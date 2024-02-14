document.addEventListener('DOMContentLoaded',function(){
    const images = ["1.avif","2.avif","3.avif"]
    let current =0



    document.getElementById('previous').addEventListener('click',function(){
        current --
        if(current<0){
            current = images.length - 1
        }
        updateImage();
    })
    document.getElementById('next').addEventListener('click',function(){
        current++
        if (current>= images.length){
            current = 0
        }
        updateImage()
    })

    function updateImage(){
        let imageElement = document.getElementById("im")
        imageElement.src = images[current]
    }
});

// document.addEventListener('DOMContentLoaded',function(){
//     let current = 1;
//     document.getElementById('previous').addEventListener('click',function(){
//         current--;
//         if(current < 1){
//             current = 3;
//         }
//         updateImage();
//     });
//     document.getElementById('next').addEventListener('click',function(){
//         current++;
//         if (current > 3){
//             current = 1;
//         }
//         updateImage();
//     });

//     function updateImage(){
//         let imageElement = document.getElementById("im");
//         imageElement.src = `/${current}.avif`; 
//     }
// });
