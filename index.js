let home=document.getElementById("score1")
let guest=document.getElementById("score2")
let c1=0
let c2=0
function p1h()
{
    c1+=1
    home.textContent=c1
}
function p2h()
{
    c1+=2
    home.textContent=c1
}
function p3h()
{
    c1+=3
    home.textContent=c1
}
function p1g()
{
    c2+=1
    guest.textContent=c2
}
function p2g()
{
    c2+=2
    guest.textContent=c2
}
function p3g()
{
    c2+=3
    guest.textContent=c2
}

