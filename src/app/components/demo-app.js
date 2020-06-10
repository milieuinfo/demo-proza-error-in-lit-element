import {html, LitElement} from "lit-element";

import {define} from "vl-ui-core/dist/vl-core.min.js";
import 'vl-ui-alert/dist/vl-alert.min.js';
import 'vl-ui-checkbox/dist/vl-checkbox.min.js';
import 'vl-ui-proza-message/dist/vl-proza-message';
import 'vl-ui-button/dist/vl-button.js';

class DemoApp extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/node_modules/vl-ui-button/dist/style.css">
      <div>
        <vl-alert type="warning" 
                  title='registratie.voorwaarden.meldingTitel'>
          <div>
           <vl-proza-message domain="ERKENNINGEN" code="registratie.voorwaarden.meldingTekst"></vl-proza-message>
          </div> 
        </vl-alert>
        <!--      
        <vl-checkbox id="aanvaard"
                     label="Ik heb de voorwaarden gelezen en begrepen"
                     @input="${this._toggleVolgende}"
                     single>
        </vl-checkbox>
        -->
          <button id="button-test" type="button" is="vl-button"  @click="${this._toggleVolgende}">click</button>
          <p>De 'click' event van button werkt niet wanneer gecombineerd met een vl-proza-message</p>
      </div>
    `;
  }

  _toggleVolgende(event) {
    alert("Ok");
  }

}

define('demo-app', DemoApp);