<template>
  <task-one-story />
  <div class="prose">
    <hr />
    <p>Klik op de button om je in te schrijven voor de nieuwsbrief</p>
    <button
      class="button"
      aria-label="Open de dialoog"
      @click="showModal"
      ref="modalTrigger"
    >
      Open
    </button>

    <teleport to="#portal-target">
      <div
        @keydown="handleDialogKeys"
        role="dialog"
        aria-label="Dialog inschrijven nieuwsbrief"
        class="modal"
        ref="dialog"
        :class="modalIsOpen ? 'show' : ''"
      >
        <button class="close" ref="closeButton" @click="closeModal" aria-label="Knop sluiten">
          &times;
        </button>
        <div class="modal-heading">
          <h2>Modal window</h2>
        </div>
        <p>Schrijf je in voor de nieuwbrief</p>
        <input type="text" name="email" placeholder="E-mail" aria-label="Vul je E-mail in" />

        <div class="modal-footer mt-auto">
          <button class="button mr-auto">Bevestig inschrijven</button>
          <button class="button ml-auto" @click="closeModal">Sluiten</button>
        </div>
      </div>
    </teleport>

    <hr />

    <div class="prose">
      <h3>Aandachtspunten</h3>
      <ul>
        <li>
          Gebruik de role="dialog" en voorzie de dialoog van een aria-label of
          aria-labelledby
        </li>
        <li>
          Maak gebruik van een "ref" om elementen te benaderen en focus te
          zetten
        </li>
        <li>
          Let op dat je display: none gebruikt, en niet alleen de modal buiten
          het scherm zet
        </li>
      </ul>
    </div>

    <router-link to="/opdracht-1" class="button mt-8">
      Terug naar&nbsp;<strong>Opdracht 1</strong>
    </router-link>
  </div>
</template>

<script>
import TaskOneStory from './TaskOneStory.vue';

export default {
  components: {
    TaskOneStory,
  },
  data() {
    return {
      modalIsOpen: false,
      previousActiveElement: null,
      focusableElements: null,
    };
  },
  methods: {
    showModal() {
      this.modalIsOpen = true;
      this.previousActiveElement = document.activeElement;

      this.focusableElements = this.$refs.dialog.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );

      this.$nextTick(() => {
        this.$refs.closeButton.focus();
      });
    },
    closeModal() {
      this.modalIsOpen = false;

      this.$nextTick(() => {
        // this.$refs.modalTrigger.focus();
        this.previousActiveElement.focus();
        this.previousActiveElement = null;
        this.focusableElements = null;
      });
    },
    handleDialogKeys(e) {
      const KEYCODE_ESC = 27;
      const KEYCODE_TAB = 9;
      let firstFocusableEl = this.focusableElements[0];
      let lastFocusableEl =
        this.focusableElements[this.focusableElements.length - 1];
      let isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

      if (e.keyCode === KEYCODE_ESC) {
        this.closeModal();
        return;
      }

      if (!isTabPressed) {
        return;
      }

      // Shift + tab
      if (e.shiftKey && document.activeElement === firstFocusableEl) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }

        // Tab
      } else if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
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
      font-weight: 800;
      font-size: 24px;
    }
  }

  .modal-footer {
    display: flex;
  }

  input {
    border: 1px solid #888;
    border-radius: 5px;
    padding: 4px;
    margin-bottom: 16px;
  }
}
</style>
