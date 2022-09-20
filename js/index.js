const menuItems = document.querySelectorAll(".menu-item");
const messagesLink = document.querySelector("#messages-link");
const messages = document.querySelector(".messages");
const messageSearch = document.querySelector("#message-search");
const allMessages = messages.querySelectorAll(".message");
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add("active");

        if (item.id != "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    })
})

messagesLink.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--primary-color)";
    document.querySelector("#messages-link .notification-count").style.display = "none";
    // now we want the box shadow to be removed after 3 seconds. so;
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 3000);
})



// for searching a particular chat
const searchMessage = ()=>{
    const val = messageSearch.value.toLowerCase();
    allMessages.forEach(message=>{
        const name = message.querySelectorAll("h5").textContent.toLowerCase();
        if(name.indexOf(val)!= -1){
            message.style.display = "flex";
        }else{
            message.style.display = "none";
        }
    })
}

messageSearch.addEventListener("keyup",searchMessage);


// theme customization

const themeBtn = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

themeBtn.addEventListener("click",()=>{
    themeModal.style.display = "grid";
})

themeModal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display = "none";
    }
})

// font sizes customization

const root = document.querySelector(":root");


const fontSizes = document.querySelectorAll(".choose-size span");

const removeSizeActive = () =>{
    fontSizes.forEach(size=>{
        size.classList.remove("active");
    })
}
fontSizes.forEach(size=>{
    
    size.addEventListener("click",()=>{
        removeSizeActive();
        let fontsize;
        size.classList.toggle("active");
        if(size.classList.contains("font-size-1")){
            fontsize = "10px";
            root.style.setProperty("--sticky-top-left","5.4rem");
            root.style.setProperty("--sticky-top-right","5.4rem");
        }else if(size.classList.contains("font-size-2")){
            fontsize = "13px";
            root.style.setProperty("--sticky-top-left","5.4rem");
            root.style.setProperty("--sticky-top-right","-7rem");
        }else if(size.classList.contains("font-size-3")){
            fontsize = "16px";
            root.style.setProperty("--sticky-top-left","-2rem");
            root.style.setProperty("--sticky-top-right","-17rem");
        }else if(size.classList.contains("font-size-4")){
            fontsize = "19px";
            root.style.setProperty("--sticky-top-left","-5rem");
            root.style.setProperty("--sticky-top-right","-25rem");
        }else if(size.classList.contains("font-size-5")){
            fontsize = "22px";
            root.style.setProperty("--sticky-top-left","-12rem");
            root.style.setProperty("--sticky-top-right","-35rem");
        }
        document.querySelector("html").style.fontSize = fontsize;
    })
    
})

// changing the primary color

const colorPallete = document.querySelectorAll(".font-color-customization span");

// remove active from color
const removeColorActive = ()=>{
    colorPallete.forEach(color=>{
        color.classList.remove("active");
    })
}
colorPallete.forEach(color=>{
    color.addEventListener("click",()=>{
        removeColorActive();
        let primaryhue;
        // color.classList.toggle("active");
        if(color.classList.contains("color-1")){
            primaryhue = "252";
        }
    
        else if(color.classList.contains("color-2")){
            primaryhue = "52";
        }
    
        else if(color.classList.contains("color-3")){
            primaryhue = "352";
        }
    
        else if(color.classList.contains("color-4")){
            primaryhue = "152";
        }
    
        else if(color.classList.contains("color-5")){
            primaryhue = "202";
        }
        color.classList.add("active");
        root.style.setProperty("--primary-hue",primaryhue);
    })
    
   
})


// time to change the background colors

// let whiteColorLightness;
// let darkColorLightness;
// let lightColorLightness;

// const bg1 = document.querySelector(".bg-1");
// const bg2 = document.querySelector(".bg-2");
// const bg3 = document.querySelector(".bg-3");

// const changeBG = ()=>{
//     root.style.setProperty("--white-color-lightness",whiteColorLightness);
//     root.style.setProperty("--light-color-lightness",lightColorLightness);
//     root.style.setProperty("--dark-color-lightness",darkColorLightness);
// }

// bg2.addEventListener("click",()=>{
//     bg2.classList.add("active");
//     bg1.classList.remove("active");
//     bg3.classList.remove("active");

//     whiteColorLightness = "20%";
//     darkColorLightness ="95%";
//     lightColorLightness = "15%";

//     changeBG();
// })


// bg3.addEventListener("click",()=>{
//     darkColorLightness = "95%";
//     whiteColorLightness="10%";
//     lightColorLightness="0%";
//     bg3.classList.add("active");
//     bg1.classList.remove("active");
//     bg2.classList.remove("active");
//     changeBG();
// })
// bg1.addEventListener("click",()=>{
//     bg2.classList.remove("active");
//     bg3.classList.remove("active");
//     window.location.reload();
// })


// another way to change the background color.
const bgs = document.querySelectorAll(".choose-bg div");

const removeActiveBg = () =>{
    bgs.forEach(bg=>{
        bg.classList.remove("active");
    })
}
let whiteColorLightness;
let darkColorLightness;
let lightColorLightness;
const changeBG = ()=>{
    root.style.setProperty("--white-color-lightness",whiteColorLightness);
    root.style.setProperty("--light-color-lightness",lightColorLightness);
    root.style.setProperty("--dark-color-lightness",darkColorLightness);
}

bgs.forEach(bg=>{
    bg.addEventListener("click",()=>{
        
        removeActiveBg();
        if(bg.classList.contains("bg-2")){
                whiteColorLightness = "20%";
                darkColorLightness ="95%";
                lightColorLightness = "15%";
                changeBG();
        } else if(bg.classList.contains("bg-3")){
                    darkColorLightness = "95%";
                    whiteColorLightness="10%";
                    lightColorLightness="0%";
                    changeBG();
        } else if(bg.classList.contains("bg-1")){
            window.location.reload();
        }
        bg.classList.add("active");
        
        
    })
})
