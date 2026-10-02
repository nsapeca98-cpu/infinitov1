function pick(choice){
  const bets=JSON.parse(localStorage.getItem('infinitoBets')||'[]');
  bets.push(choice);
  localStorage.setItem('infinitoBets',JSON.stringify(bets));
  const t=document.getElementById('toast');
  t.textContent='✓ Palpite registrado: '+choice;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2400);
}