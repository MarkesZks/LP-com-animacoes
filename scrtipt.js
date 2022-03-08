gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate_inicial_texto",{
     duration:0.6,          //Duração da animação
    opacity:0,              //Opacidade
    y:-150,                 //Direção da onde vem o objeto
    stagger:0.5,            //atraso da duraçao do tempo de queda dos objts
    
})
gsap.from(".animate_inicial_img",{
    duration:0.8,           //Duração da animação
    opacity:0,              //Opacidade
    x:200,                  //Direção da onde vem o objeto
}
)
gsap.from(".animate_artigos",{
    duration:1,
    opacity: 0,
    x:-200, 
    stagger:0.3, 
    delay:0.8,
})
gsap.from(".animate_final",{
    scrollTrigger:".animate_final", //quando ele achar a class selecionada ele vai efetuar as animaçoes
    duration:1,
    opacity: 0,
    x:-200, 
    stagger:0.3, 
    delay:0.1,

})