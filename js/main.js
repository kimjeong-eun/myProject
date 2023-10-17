const prevbtn=document.querySelector(".btnPrev");
const nextbtn=document.querySelector(".btnNext");
const img=document.querySelector(".MainImg").querySelectorAll("div");

const closebtn=document.querySelector(".close");
const paint1=document.querySelector("#paint1");
const inform1=document.querySelector(".inform1");

const num = img.length;
var i=0;


/* 설명 닫기 버튼 */
closebtn.addEventListener("click",(e)=>{ 
    e.currentTarget.closest("article").style.display="none";
});


/* 교육 시간 안내 버튼 */

paint1.addEventListener("click",()=>{

    inform1.style.display="block";
    inform1.style.transform=`translate(5vw,-20vh)`;
    inform1.style.opacity=1;
    inform1.style.zIndex=2;
});

/* 중앙 배너 이미지 바꾸기 */
nextbtn.addEventListener("click",()=>{

    if(i===0)
    {
        for(let el of img)
        {
            el.style.transform=`translateX(-50vw)`;
        }
        i++;     
    }
    else if(i===1){
        for(let el of img)
        {
            el.style.transform=`translateX(-100vw)`;
        }
        i++;    
    }
   else if(i>=2)
   {
    for(let el of img)
    {
        el.style.transform=`translateX(0vw)`;
    }
        i=0;
   }    
});

prevbtn.addEventListener("click",()=>{

    if(i===2)
    {
        for(let el of img)
        {
            el.style.transform=`translateX(-50vw)`;
        }
        i--;      
    }
    else if(i===1){
        for(let el of img)
        {
            el.style.transform=`translateX(0vw)`;
        }
        i--;
        console.log(i);
    }
   else if(i<=0)
   {
    for(let el of img)
    {
        el.style.transform=`translateX(-100vw)`;
    }
        i=2;
   }
});