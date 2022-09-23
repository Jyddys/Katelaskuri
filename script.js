
let vastausMyyntituotto = document.querySelector('.myyntituotto')
let vastausMuuttuvatkust = document.querySelector('.myyntiKustannukset')
let katetuotto = document.querySelector('.kateTuotto');
let vastausKiintKust = document.querySelector('.kiinteKust');
let tulos = document.querySelector('.tulos');
let KTP = document.querySelector('.KTP');



function getVal() {
  let myyntituotto = document.querySelector('.mTuotto').value
  let mKustannukset = document.querySelector('.mKustannukset').value;
  let kKustannukset = document.querySelector('.kKustannukset').value;

  vastausMyyntituotto.textContent = `Myyntituotto: ${myyntituotto}€`
  vastausMuuttuvatkust.textContent =`Muuttuvat kustannukset: ${mKustannukset}€`
  katetuotto.textContent = `Katetuotto: ${myyntituotto - mKustannukset}€`
  let katetuottoValmis = myyntituotto - mKustannukset;
  vastausKiintKust.textContent = `Kiinteät kustannukset: ${kKustannukset}€`
  tulos.textContent = `Tulos: ${katetuottoValmis - kKustannukset}€`;
  let tulosValmis = katetuottoValmis - kKustannukset;
  KTP.textContent = `Katetuottoprosentti: ${katetuottoValmis / myyntituotto * 100}%`

}
