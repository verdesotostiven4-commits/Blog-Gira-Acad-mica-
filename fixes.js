// Ajuste final: identidad ESPOCH solo en Inicio, sin tapar contenido y sin flecha flotante.
(function(){
  const RIBBON_URL='https://blogger.googleusercontent.com/img/a/AVvXsEj8bdaW8VHCZFZhr5j20ioZa4qctOGnPYwJQ2_seNhER1COqxXs5ubuNAUAcVuqfrJne5lFyFjBJzqOs7fCyut1nVYaPAusakkYc9MK6jQodlveWs2HNuG49kmfaZVEVd3hpCoZWaJgvck7di6Q4qcRKXwA1jv6N3wIhUGuK9UZHLfwdmDe30MykjnIo00';

  function ensureInstitutionalLockup(){
    const inicio=document.querySelector('#inicio');
    if(!inicio || document.querySelector('.espoch-lockup-shell')) return;
    inicio.insertAdjacentHTML('afterbegin', `
      <section class="espoch-lockup-shell" aria-label="Identidad institucional ESPOCH">
        <div class="espoch-lockup">
          <img src="${RIBBON_URL}" alt="Escuela Superior Politécnica de Chimborazo">
          <div class="espoch-lockup-text">
            <strong>Escuela Superior Politécnica de Chimborazo</strong>
            <span>Facultad de Recursos Naturales · Carrera de Turismo</span>
          </div>
        </div>
      </section>
    `);
  }

  function restartDrop(){
    const lockup=document.querySelector('.espoch-lockup');
    if(!lockup) return;
    lockup.classList.remove('restart-ready');
    lockup.classList.add('restart');
    void lockup.offsetHeight;
    lockup.classList.remove('restart');
    lockup.classList.add('restart-ready');
  }

  function applyRouteState(){
    ensureInstitutionalLockup();
    const isHome=document.querySelector('#inicio')?.classList.contains('active-view');
    document.body.classList.toggle('home-route', !!isHome);
    if(isHome){
      document.body.classList.remove('lockup-hidden');
      restartDrop();
    }else{
      document.body.classList.remove('lockup-hidden');
    }
  }

  let lastY=window.scrollY;
  window.addEventListener('scroll',()=>{
    if(!document.body.classList.contains('home-route')) return;
    const y=window.scrollY;
    const goingDown=y>lastY;
    if(y<45){
      document.body.classList.remove('lockup-hidden');
    }else if(goingDown){
      document.body.classList.add('lockup-hidden');
    }else{
      document.body.classList.remove('lockup-hidden');
    }
    lastY=y;
  },{passive:true});

  document.addEventListener('click',(event)=>{
    if(event.target.closest('[data-route]')) setTimeout(applyRouteState,90);
  });
  window.addEventListener('hashchange',()=>setTimeout(applyRouteState,90));
  window.addEventListener('load',applyRouteState);
  setTimeout(applyRouteState,250);
})();
