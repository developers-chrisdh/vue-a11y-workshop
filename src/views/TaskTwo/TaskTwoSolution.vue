<template>
  <task-two-story />
  <div class="prose">
    <hr />
  </div>

  <div class="prose mt-8">
    <h2>Vul je gegevens in om je order te voltooien.</h2>
  </div>
  <div class="accordion">
    <h3>
      <button
        id="button-section-1"
        class="first"
        :class="isExpanded(0) ? 'open' : ''"
        @click="toggleSection(0)"
        :aria-expanded="isExpanded(0)"
        aria-controls="section-1"
      >
        1. Persoonlijke informatie
        <span class="icon">{{ isExpanded(0) ? '&#8963;' : '&#8964;' }}</span>
      </button>
    </h3>
    <div
      id="section-1"
      class="accordion-panel"
      :hidden="!isExpanded(0)"
      role="region"
      aria-labelledby="button-section-1"
    >
      <label for="input-name">Naam <span aria-hidden="true">*</span></label>
      <input id="input-name" type="text" name="Name" aria-required="true" />
      <label for="input-email">E-mail <span aria-hidden="true">*</span></label>
      <input id="input-email" type="text" name="E-mail" aria-required="true" />
    </div>
    <h3>
      <button
        id="button-section-2"
        :class="isExpanded(1) ? 'open' : ''"
        @click="toggleSection(1)"
        :aria-expanded="isExpanded(1)"
        aria-controls="section-2"
      >
        2. Factuuradres
        <span class="icon">{{ isExpanded(1) ? '&#8963;' : '&#8964;' }}</span>
      </button>
    </h3>
    <div
      id="section-2"
      class="accordion-panel"
      :hidden="!isExpanded(1)"
      role="region"
      aria-labelledby="button-section-2"
    >
      <label for="input-adres">Adres <span aria-hidden="true">*</span></label>
      <input id="input-adres" type="text" name="Adres" aria-required="true" />
      <label for="input-postcode"
        >Postcode <span aria-hidden="true">*</span></label
      >
      <input
        id="input-postcode"
        type="text"
        name="Postcode"
        aria-required="true"
      />
    </div>
    <h3>
      <button
        id="button-section-3"
        :class="isExpanded(2) ? 'open' : ''"
        @click="toggleSection(2)"
        :aria-expanded="isExpanded(2)"
        aria-controls="section-3"
      >
        3. Verzendadres
        <span class="icon">{{ isExpanded(2) ? '&#8963;' : '&#8964;' }}</span>
      </button>
    </h3>
    <div
      id="section-3"
      class="accordion-panel"
      :hidden="!isExpanded(2)"
      role="region"
      aria-labelledby="button-section-3"
    >
      <label for="input-adres-verzend"
        >Adres <span aria-hidden="true">*</span></label
      >
      <input
        id="input-adres-verzend"
        type="text"
        name="Adres"
        aria-required="true"
      />
      <label for="input-postcode-verzend"
        >Postcode <span aria-hidden="true">*</span></label
      >
      <input
        id="input-postcode-verzend"
        type="text"
        name="Postcode"
        aria-required="true"
      />
    </div>
  </div>

  <div class="prose">
    <h2>Aandachtspunten</h2>
  </div>

  <router-link to="/opdracht-2" class="button mt-8">
    Start&nbsp;<strong>Opdracht 1</strong>
  </router-link>
</template>

<script>
import TaskTwoStory from './TaskTwoStory.vue';

export default {
  components: {
    TaskTwoStory,
  },
  data() {
    return {
      selectedSection: 0,
    };
  },
  methods: {
    toggleSection(sectionIndex) {
      this.selectedSection = sectionIndex;
    },
    isExpanded(sectionIndex) {
      return this.selectedSection === sectionIndex;
    },
  },
};
</script>

<style lang="scss">
.accordion {
  max-width: 480px;
  margin: 32px 0;
  border: 1px solid #888;
  border-radius: 9px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.accordion h3 {
  margin: 0;
  padding: 0;
}

.accordion button {
  display: flex;
  width: 100%;
  padding: 16px;
  border-top: 1px solid #888;
  background-color: #f4f4ff;
  font-size: 18px;
  font-weight: 600;

  &.open {
    border-bottom: 1px solid #888;
  }

  &.first {
    border-top: none;
  }
}

.accordion button .icon {
  margin-left: auto;
}

.accordion-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
}

.accordion input {
  min-width: 320px;
  margin-bottom: 8px;
  padding: 4px;
  border: 1px solid #888;
}
</style>
