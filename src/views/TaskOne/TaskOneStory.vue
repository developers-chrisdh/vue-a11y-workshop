<template>
  <div class="prose">
    <h1>Opdracht 1: "Toegankelijke modal"</h1>

    <div class="userstory">
      <strong>Als</strong> gebruiker met een visuele beperking<br />
      <strong>wil ik</strong> een dialoog zien waar ik mijn e-mail adres kan
      invullen<br />
      <strong>zodat</strong> mij kan inschrijven voor een nieuwsbrief.
    </div>

    <h2>Acceptatiecriteria</h2>
    <ul>
      <li>
        Bij het openen van de modal moet de focus gegeven worden aan het eerste
        focusbare element
      </li>
      <li>
        Na het sluiten van de modal moet de focus teruggegeven worden naar het
        element dat hem opent
      </li>
      <li>De dialoog moet gesloten kunnen worden met de escape-key</li>
    </ul>

    <h2>Bonus opdracht</h2>
    <ul>
      <li>
        Implementeer een focustrap. Focus kan daarmee niet meer buiten de modal
        raken
      </li>
      <li>
        Als het laatste focusbare element geselecteerd is, ga via TAB terug naar
        het eerste focusbare element
      </li>
    </ul>
  </div>
</template>
