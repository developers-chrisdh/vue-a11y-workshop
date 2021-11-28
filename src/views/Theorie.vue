<template>
  <div class="prose">
    <h1>WAI-ARIA</h1>
  </div>

  <section aria-label="Aria roles" class="mb-16">
    <div class="prose">
      <h2 id="title-aria-roles">Aria Roles & Landmark elements</h2>
    </div>

    <prism language="html"
      >{{`
      <nav>...</nav>
      // Same as
      <div role="navigation">...</div>

      <button>...</button>
      // Same as
      <div role="button">...</div>
      `}}
    </prism>

    <div class="prose">
      <table class="table-dividers">
        <colgroup>
          <col width="35%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Landmark Role</th>
            <th scope="col">HTML Element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>banner</td>
            <td>
              <code>&lt;header&gt;</code><br />(if not a child of a sectioning
              element or the <code>main</code>.)
            </td>
          </tr>
          <tr>
            <td>complementary</td>
            <td><code>&lt;aside&gt;</code></td>
          </tr>
          <tr>
            <td>contentinfo</td>
            <td>
              <code>&lt;footer&gt;</code><br />(if not a child of a sectioning
              element or the <code>main</code>.)
            </td>
          </tr>
          <tr>
            <td>form</td>
            <td>
              <code>&lt;form&gt;</code><br />(if provided an accessible name via
              <code>aria-label</code> or <code>aria-labelledby</code>)
            </td>
          </tr>
          <tr>
            <td>main</td>
            <td><code>&lt;main&gt;</code><br />(only use one per page)</td>
          </tr>
          <tr>
            <td>navigation</td>
            <td><code>&lt;nav&gt;</code></td>
          </tr>
          <tr>
            <td>region</td>
            <td>
              <code>&lt;section&gt;</code><br />(if provided an accessible name
              via <code>aria-label</code> or <code>aria-labelledby</code>)
            </td>
          </tr>
          <tr>
            <td>search</td>
            <td>none</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section aria-label="Aria Properties" class="mb-16">
    <div class="prose">
      <h3>Aria Properties</h3>
    </div>

    <prism language="html"
      >{{`
      <button aria-label="Close" onclick="myDialog.close()">X</button>
      `}}
    </prism>

    <p>Alternatief:</p>
    <prism language="html"
      >{{`
      <button onclick="myDialog.close()">
        <span class="sr-only">Close</span>
        <span aria-hidden="true">X</span>
      </button>

      <style>
        .sr-only {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
      </style>
      `}}
    </prism>

    <div class="prose">
      <h3>Veelgebruikte aria properties</h3>
      <ul>
        <li>aria-label</li>
        <li>aria-labelledby</li>
        <li>aria-describedby</li>
        <li>aria-live</li>
        <li>aria-controls</li>
      </ul>
    </div>
  </section>

  <section aria-label="Aria States" class="mb-16">
    <div class="prose">
      <h2>Aria States</h2>
    </div>
    <prism language="html"
      >{{`
      <button type="submit" aria-disabled="true">Submit</button>
      <li role="menuitemcheckbox" aria-checked="true">Sort by Last Modified</li>
      <style>
        [aria-checked='true'] {
          font-weight: bold;
        }
      </style>
      `}}</prism
    >
    <div class="prose">
      <h3>Veelgebruikte aria states</h3>
      <ul>
        <li>aria-hidden</li>
        <li>aria-invalid</li>
        <li>aria-checked</li>
        <li>aria-disabled</li>
        <li>aria-expanded</li>
      </ul>
    </div>
  </section>

  <section aria-label="Tabindex" class="mb-16">
    <div class="prose">
      <h2>Tabindex</h2>
      <ul>
        <li>
          A negative value (usually tabindex="-1") means that the element is not
          reachable via sequential keyboard navigation, but could be focused
          with JavaScript or visually by clicking with the mouse. It's mostly
          useful to create accessible widgets with JavaScript.
        </li>
        <li>
          tabindex="0" means that the element should be focusable in sequential
          keyboard navigation, after any positive tabindex values and its order
          is defined by the document's source order.
        </li>
        <li>
          A positive value means the element should be focusable in sequential
          keyboard navigation, with its order defined by the value of the
          number. That is, tabindex="4" is focused before tabindex="5" and
          tabindex="0", but after tabindex="3". If multiple elements share the
          same positive tabindex value, their order relative to each other
          follows their position in the document source. The maximum value for
          tabindex is 32767. If not specified, it takes the default value 0.
        </li>
      </ul>
    </div>
  </section>

  <router-link to="/opdracht-1" class="button mt-8">
    Opdracht 1:&nbsp;<strong>Een toegankelijke dialoog</strong>
  </router-link>
</template>

<script>
import Prism from 'vue-prism-component';

export default {
  name: 'Theorie',
  components: {
    Prism,
  },
};
</script>
