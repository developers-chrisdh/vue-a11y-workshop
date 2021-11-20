<template>
  <div class="prose">
    <h1>Uitwerking Opdracht 1</h1>

    <div class="userstory">
      <strong>Als</strong> gebruiker met een visuele beperking<br />
      <strong>wil ik</strong> een dialoog zien waar ik mijn e-mail adres kan
      invullen<br />
      <strong>zodat</strong> mij kan inschrijven voor een nieuwsbrief.
    </div>

    <p>Klik op de button om je in te schrijven voor de nieuwsbrief</p>
    <button class="button" aria-label="Open de dialoog" @click="showModal">
      Open
    </button>

    <div class="modal" :class="modalIsOpen ? 'show' : ''">
      <button class="close" @click="closeModal">&times;</button>
      <div class="modal-heading">
        <h2>Modal window</h2>
      </div>
      <p>Schrijf je in voor de nieuwbrief</p>

      <div class="modal-footer mt-auto">
        <button class="button mr-auto">Bevestig inschrijven</button>
        <button ref="closeButton" class="button ml-auto" @click="closeModal">
          Sluiten
        </button>
      </div>
    </div>

    <hr />
    <router-link to="/opdracht-1" class="button mt-8">
      Terug naaar&nbsp;<strong>Opdracht 1</strong>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalIsOpen: false,
    };
  },
  methods: {
    showModal() {
      this.modalIsOpen = true;

      this.$nextTick(() => {
        this.$refs.closeButton.focus();
      });
    },
    closeModal() {
      this.modalIsOpen = false;
    },
  },
};
</script>

<style lang="scss">
.modal {
  display: none;
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  padding: 32px;
  background-color: #fff;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1), 1px 1px 3px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);

  &.show {
    display: flex;
    flex-direction: column;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 32px;
    font-size: 24px;
  }

  .modal-heading {
    h2 {
      margin: 0;
    }
  }

  .modal-footer {
    display: flex;
  }
}
</style>
